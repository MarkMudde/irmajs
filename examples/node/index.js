const irma = require('irmajs');

const server = 'http://localhost:48680';
const request = {
  'type': 'disclosing',
  'content': [{
    'label': 'Over 21',
    'attributes': [ 'irma-demo.MijnOverheid.root.BSN' ]
  }]
};

irma.startSession(server, request)
  .then(qr => irma.handleSession(server, qr, {method: 'console'}))
  .then(result => console.log('Done', result));