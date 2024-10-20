import User from '../lib/user.js';

const apiBase = process.env.API_BASE;

/**
 * Get a single user
 * 
 * @param {object} request - the request object 
 * @param {object} h - the response toolkit
 * @returns {object} that contains the results of the create user operation
 */
async function getSingleUserHandler(request, h) {
  return 'user';
};

/**
 * get multiple users
 * 
 * @param {object} request - the request object 
 * @param {object} h - the response toolkit
 * @returns {object} that contains the results of the create user operation
 */
async function getMultipleUsersHandler(request, h) {
    return 'users';
    };

/**
 * Create one or more users by passing a payload of user/s information
 * 
 * @param {object} request - the request object
 * @param {object} h - the response toolkit
 * @returns {object} that contains results of the batch create users operation
 */
async function createUsersHandler(request, h) {
  return 'users';
};

/**
 * Update a user by passing a payload of key value pairs to update
 * 
 * 
 * @param {object} request - the request object
 * @param {object} h - the response toolkit
 * @returns {object} that contains results of the batch create users operation
 */
async function updateUserHandler(request, h) {
  return 'user';
};



export const userGetRoutes = [
  {
    method: 'GET',
    path: `${apiBase}/users`,
    handler: await getMultipleUsersHandler()
  },
  {
    method: 'GET',
    path: `${apiBase}/users/{id}`,
    handler: await getSingleUserHandler()
  },
  
];

export const userPostRoutes = [
  {
    method: ['POST', 'PUT'],
    path: `${apiBase}/users`,
    handler: await createUsersHandler()
  },
  {
    method: ['POST', 'PUT'],
    path: `${apiBase}/users/{id}`,
    handler: await updateUserHandler()
},
]
