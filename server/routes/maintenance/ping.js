

async function pingHandler() {
    try {
        return h.response('ok').code(200);
    } catch (error) {
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
}

const routes = [{
    method: 'GET',
    path: '/ping',
    handler: pingHandler()
}];

export { routes };
