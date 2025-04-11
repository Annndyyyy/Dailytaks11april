const logger = (req, res, next) => {
    const start = Date.now();
  
    res.on('finish', () => {
      const duration = Date.now() - start;
      const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`;
  
      if (process.env.NODE_ENV !== 'production') {
        console.log(log);
      }
    });
  
    next();
  };
  
  module.exports = logger;
  