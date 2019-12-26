interface AJSServerFeature {
  feature: Object
  options: Object
}

interface AJSServerDatabaseConfig {
  url: String
}

interface AJSServerConfig {
  database: AJSServerDatabaseConfig
  features: [
    AJSServerFeature
  ]
}

class AJSServer {
  constructor(config : AJSServerConfig) {
    console.log(config)
  }
}

export default AJSServer;