const auth0_path = `${process.env.api_base}/auth0`;

/**
 * 
 */
async function getAuth0User() {
    // get the user from the database
    const user = await db.collection('users').findOne({ id: req.user.sub });
};

/**
 * Create a new user in the database
 */
async function createAuth0User() {
    
    const user = await db.collection('users').insertOne({ id: req.user.sub });
}


module.exports = { 
    register: (server) => {
        server.route({
            method: 'GET',
            path: `${auth0_path}/`,
            handler: (request, h) => {
                return 'Hello, world!';
            },
        });
        
        server.route({
            method: 'POST',
            path: `${auth0_path}/`,
            handler: (request, h) => {
                return 'Hello, world!';
            },
        });

        server.route({
            method: 'GET',
            path: `${auth0_path}/me`,
            handler: (request, h) => {
                return 'Hello, world!';
            },
        });
    }
 };
