import * as cors from 'cors';
import * as express from 'express';

export function app(): express.Express {
  const server = express();
  server.use(
    cors({
      origin: ['http://localhost:4200', 'http://localhost:4000'],
      allowedHeaders: ['authorization', 'cache-control', 'content-type', 'user-agent', 'enctype', 'visitor-uuid', 'front-request-id'],
      credentials: true,
    })
  );

  server.get('/', (req, res) => {
    res.send({
      path: '/assets/images/dog.jpg',
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4004;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
