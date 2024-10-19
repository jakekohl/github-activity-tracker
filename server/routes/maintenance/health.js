const healthUrl = '/health';

const healthHandler = (request, h) => {
  // Perform health checks here
  // You can check the status of your dependencies, database connections, etc.

  // Return a response indicating the health status
  return {
    status: 'OK',
    message: 'Health checks passed successfully'
  };
};

const routes = {
  method: 'GET',
  path: healthUrl,
  handler: healthHandler
};

export { routes };