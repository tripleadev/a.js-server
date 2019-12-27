const ajsServer = require('../../');
const BasicFeature = require('./basicFeature');

const app = new ajsServer.App({
  features: [{
    feature: BasicFeature,
    config: {
      name: 'Adam'
    }
  }]
});

app.listen(3000).then((port) => console.log(`Listening on port ${port}`));