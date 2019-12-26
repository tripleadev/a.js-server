interface AJSServerFeature {
    feature: Object;
    options: Object;
}
interface AJSServerDatabaseConfig {
    url: String;
}
interface AJSServerConfig {
    database: AJSServerDatabaseConfig;
    features: [AJSServerFeature];
}
declare class AJSServer {
    constructor(config: AJSServerConfig);
}
export default AJSServer;
