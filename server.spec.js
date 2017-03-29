const expect = require('chai').expect;
const io = require('socket.io-client');

const settings = require('./settings');
const serverUrl = `http://${settings.host}:${settings.port}`;

describe('server-side', () => {
  const io = require('socket.io-client');

  const { server, start } = require('./server.js');

  beforeEach(() => {
    start();
  });

  afterEach(() => {
    server.close();
  });

  it('allows a client to connect', (done) => {
    const client = io.connect(serverUrl);
    client.once('connect', () => {
      done();
    });
  });

  it('allows a user to change their name', (done) => {
    const client = io.connect(serverUrl);

    client.on('news', (newsData) => {
      if (newsData.message.indexOf('newName') !== -1) done();
    });

    client.once('connect', () => {
      client.emit('chat message', '/name newName')
    });
  });
});
