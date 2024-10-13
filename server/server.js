const { createAuth0Client } = require('@auth0/auth0-spa-js');
const express = require("express");
const fs = require('fs');
const path = require('path');

// Create an express application
const app = express();

// Get all files in the middleware directory
const middlewarePath = path.join(__dirname, 'middleware');
const middlewareFiles = fs.readdirSync(middlewarePath);
middlewareFiles.forEach((file) => {
    const middleware = require(path.join(middlewarePath, file));
    app.use(middleware);
});

// Get all files in the routes directory
const routesPath = path.join(__dirname, 'routes');
const routeFiles = fs.readdirSync(routesPath);
const routes = {};
routeFiles.forEach((file) => {
    const routeName = path.basename(file, '.js');
    const routePath = path.join(routesPath, file);
    routes[routeName] = require(routePath);
    app.use(routes[routeName]);
    console.log(`Routes for "${routeName}" loaded.`);
});

app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(`Path: ${r.route.path}, Methods: ${Object.keys(r.route.methods)}`);
    }
  });

  console.log(app._router.stack);

// Listen on port 3000
app.listen(3000, () => console.log("Application running on port 3000"));
