// Vercel serverless function entry point
// Use the built CommonJS server file
const server = require("../dist/index.cjs");

// The server exports a default handler function
// In CommonJS, default exports are available as .default or directly
const handler = server.default || server.handler || server;

module.exports = handler;
