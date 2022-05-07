import { myApi } from "./config";
import express from 'express';
import { init } from "./app/infrastructure/webApi/loaders";

const startServer = async () => {

  const app = express();
  await init(app);
  app.listen(myApi.port, () => {
    console.log(`Listening ${myApi.name} on port ${myApi.port}!`);
  });

};

startServer();
