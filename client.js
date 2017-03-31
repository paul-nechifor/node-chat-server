// Entry point for webpacked client code.

const $ = require('jquery');
const io = require('socket.io-client');

const settings = require('./settings');
const consts = require('./consts');

function addNews(msg) {
  console.log(msg);
  $('<li>').addClass('news').text(msg).appendTo('#messages');
}

var socket = io.connect(`http://${settings.host}:${settings.port}`);
socket.on('news', function (data) {
  addNews(data.message);
});

socket.on(consts.EVENT_USER_RECV_CHAT, function (data) {
  console.log(data.message);
  $('<li>').text(`${data.name}: ${data.message}`).appendTo('#messages');
});

socket.on('disconnect', function () {
  addNews('The server has disconnected.');
  $('form').off('submit');
});

socket.on('connect', function () {
  console.log('Connected to server');
  $('form').submit(function() {
    socket.emit(consts.EVENT_USER_SEND_CHAT, $('#m').val());
    $('#m').val('');
    return false;
  });
});
