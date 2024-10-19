export async function getLastPull() {
    return('last pull');
};

export async function pull() {
    return('pull');
};

const routes = [
    {
        method: 'GET',
        path: '/pull',
        handler: async (request, h) => {
            await getLastPull();
        }
    },
    {
        method: 'POST',
        path: '/pull',
        handler: async (request, h) => {
            await pull();
        }
    }
];

export { routes };