module.export.routes = {
    register: (server) => {
        server.route({
            method: 'GET',
            path: '/',
            return: (req, h) => {
                "Hello world!"
            }
        });
    },
};