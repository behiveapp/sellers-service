const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const {app} = require('./src/app');

const {HOST = '0.0.0.0', PORT = 3000} = process.env;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}. Starting a new worker`);
    cluster.fork();
  });

  console.log(`Application listening at http://${HOST}:${PORT}`);
} else {
  app.listen(PORT, HOST);
  console.log(`Application was forked at process ${cluster.worker.process.pid}`);
}

