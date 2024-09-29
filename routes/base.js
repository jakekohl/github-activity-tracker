module.export.routes = {
    register: (server) => {
        server.route({
            method: 'GET',
            path: '/',
            return: (request, h) => {
                "Hello world!"
            }
        });
    },
};