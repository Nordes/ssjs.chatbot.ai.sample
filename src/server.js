import superscript from 'superscript';
import express from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import routeBuilder from './routes'

const app = express();
const PORT = process.env.PORT || config.env.port || 5000;

app.use(bodyParser.json());

superscript.setup(config.env.superScript, (err, botInstance) => {
  if (err) {
    console.error(err);
  }

  app.bot = botInstance
  routeBuilder(app)
  
  app.listen(PORT, () => {
    console.log(`🚀===> Server is now running on port ${PORT}`);
  });
});