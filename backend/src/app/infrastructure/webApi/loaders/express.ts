import { myApi } from "../../../../config";
import { router as routes } from '../routes'
import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import timeout from 'connect-timeout';


export const expressLoader = async (app: Express) => {
  const corsOptions = {
    origin: myApi.origin
  }

  app.use(express.json());
  app.use(timeout(`${myApi.timedOut}s`))
  if (corsOptions.origin == "*") {
    app.use(cors())
  } else {
    app.use(cors(corsOptions))
  }
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json()); 
  app.use(
    bodyParser.urlencoded({
      extended: true, 
    })
  );
  
  app.use(bodyParser.json());

  app.use("/api", routes);
};
