const { createProxyMiddleware } = require("http-proxy-middleware");

// This proxy redirects requests to /api endpoints to
// the Express server running on port 3001.
module.exports = function (app) {
  app.use(
    ["https://api.twitter.com/2/tweets/search/stream","https://api.twitter.com/2/tweets/search/stream/rules"], 
    createProxyMiddleware({
      target: "http://localhost:3001",
    })
  );
};

