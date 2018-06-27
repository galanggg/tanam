import * as functions from 'firebase-functions';
import * as express from 'express';
import { Nuxt } from 'nuxt';

const app = express();

const config = {
  dev: false,
  buildDir: '../../../dist/theme',
  build: {
    publicPath: '/assets/'
  }
};

const nuxt = new Nuxt(config);

const handleRequest = (req, res) => {
  console.log('REQUEST STARTED!');
  return nuxt.render(req, res);
}

const adminPage = (req, res) => {
  console.log('admin page');
  res.send('admin page');
}

app.get('/admin', adminPage);
app.get('**', handleRequest);

export const theme = functions.https.onRequest(app);