module.export.routes = {
    register: (server) => {
        server.route({
            method: 'GET',
            path: '/',
            return: (req, h) => {
                console.info('Someone was able to find me!')
                "Hello world!"
            }
        });
    },
};