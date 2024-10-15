const dotenv = require('dotenv');
dotenv.config();

const serverOptions = {
    "server": {
      "port": process.env.PORT || 3000,
      "host": process.env.HOST || "localhost",
      "routes": {
        "cors": process.env.CORS || false
      },
      "security": {
          "hsts": {
            "maxAge": 31536000,
            "includeSubDomains": true
          }
        }
    }
  }
  
  exports.modules = { serverOptions };