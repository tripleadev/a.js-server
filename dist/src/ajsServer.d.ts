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
    listen(givenPort: Number): Promise<string | Number>;
}
export {};
