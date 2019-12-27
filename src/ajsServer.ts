import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AJSServerFeature } from './ajsServerFeature';

interface AJSServerDatabaseConfig {
  url: string
}

interface AJSServerConfig {
  database: AJSServerDatabaseConfig
  features: [
    {
      feature: AJSServerFeature,
      config: object
    }
  ]
}

export class App {
  private expressInstance : express.Application;
  private features : AJSServerFeature[];

  constructor(config : AJSServerConfig) {
    this.expressInstance = express();
    this.expressInstance.use(bodyParser.json());
    this.expressInstance.use(bodyParser.urlencoded({ extended: true }));
    this.expressInstance.use(cors());

    this.features = [];

    for (const feature of config.features) {
      this.features.push(new feature.feature(feature.config))
    };

    for (const feature of this.features) {
      const featureRouter = express.Router();

      for (const route of feature.featureInfo.routeList) {
        if (route.method === 'GET') {
          featureRouter.get(route.path, route.handler)
        } else if (route.method === 'POST') {
          featureRouter.get(route.path, route.handler);
        } else {
          throw new Error(`Invalid request method '${route.method}'`);
        }
      }

      this.expressInstance.use(feature.featureInfo.basePath, featureRouter);
    }
  }

  async listen(givenPort : Number) {
    const port = process.env.PORT || givenPort;
    await this.expressInstance.listen(port);
    return port;
  }
}