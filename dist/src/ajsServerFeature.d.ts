import express from 'express';
export interface AJSServerFeature {
    new (config: Object): AJSServerFeature;
    featureInfo: {
        basePath: string;
        routeList: [{
            path: string;
            method: string;
            handler: (req: express.Request, res: express.Response) => void;
        }];
    };
}
