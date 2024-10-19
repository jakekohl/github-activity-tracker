import path from 'path';
import fs from 'fs';

'use strict';

const routesPlugin = {
    name: 'routes',
    version: '1.0.0',
    register: async function (server, options) {
        const routes = await routesImport(path.join(process.cwd(), '/server/routes'));
        console.log(`Routes: ${routes}`);
        server.route(routes);
    }
};

async function routesImport(directory) {
    console.debug('Importing routes from', directory);
    const files = fs.readdirSync(directory).filter(file => file !== 'index.js');

    files.forEach(async file => {
        console.debug(`Processing ${file}`);
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            await routesImport(filePath); // Recursively search in child directories
        } else if (path.extname(file) === '.js') {
            const route = await import(filePath);
            console.debug('Route', route);
        }
    });
}

export { routesPlugin };