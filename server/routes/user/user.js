async function getUsersHandler() {
    return 'users';
};

async function getSingleUserHandler() {
    return 'user';
}

const routes = [
    {
        method: 'GET',
        path: '/api/users',
        handler: await getUsersHandler()
    },
    {
        method: 'GET',
        path: '/api/users/{id}',
        handler: await getSingleUserHandler()
    }
];
  
export { routes };
