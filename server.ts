import 'zone.js/node';

import express from 'express';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderApplication } from '@angular/platform-server';

import bootstrap from './src/main.server';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = join(serverDistFolder, '../browser');
  const indexHtml = join(browserDistFolder, 'index.html');

  server.use(express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  server.get('*', async (req, res, next) => {
    try {
      const html = await renderApplication(bootstrap, {
        document: indexHtml,
        url: req.originalUrl
      });

      res.send(html);
    } catch (err: unknown) {
      next(err);
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
