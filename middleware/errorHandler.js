// middleware/errorHandler.js

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong. Please try again later.",
  });
}

module.exports = errorHandler;