class BasicFeature {
  constructor(config) {
    this.config = config;

    this.featureInfo = {
      basePath: '/',
      routeList: [
        {
          path: '/',
          method: 'GET',
          handler: this.helloRouteHandler.bind(this)
        }
      ]
    }
  }

  helloRouteHandler(req, res) {
    res.json({ msg: `hello, ${this.config.name}` } )
  }
}

module.exports = BasicFeature;