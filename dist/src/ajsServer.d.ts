/// <reference types="node" />
import { AJSServerFeature } from './ajsServerFeature';
interface AJSServerDatabaseConfig {
    url: string;
}
interface AJSServerConfig {
    database: AJSServerDatabaseConfig;
    features: [{
        feature: AJSServerFeature;
        config: object;
    }];
}
export declare class App {
    private expressInstance;
    private features;
    constructor(config: AJSServerConfig);
    listen(port: Number): Promise<import("http").Server>;
}
export {};
