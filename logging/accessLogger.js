const moment = require("moment");

const accessLogger = (req, res, next) => {
  let logData = {
    timestamp: `${moment().format()}`,
    host: {
      ip: `${req.ip}`,
    },
    target: {
      protocol: `${req.protocol}`,
      url: `${req.url}`,
      originalURL: `${req.originalUrl}`,
    },
    server: {
      routeMatched: `${req.route}`,
    },
  };
  console.log(`${JSON.stringify(logData)}`);
  next();
};
module.exports = accessLogger;
