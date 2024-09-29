const apiPath = '/pull'

module.export.routes = {
    register: (server) => {
        server.route({
            method: 'GET',
            path: `${apiPath}/recent`,
            return: (request, h) => {
                "Hello world!"
            },
            validotors
        });
    },
};