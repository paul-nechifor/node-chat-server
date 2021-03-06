# This repository has been moved to [gitlab.com/paul-nechifor/node-chat-server](http://gitlab.com/paul-nechifor/node-chat-server).

Old readme:

Chat server
===========

Boilerplate app for setting up a websocket-based chat server with JavaScript. Currently set up with a very simple Express app and Webpack bundle.

TODO
----

- Finish Client-side code class refactor

- Unit tests:
  - Extract 'Anonymous' into a global variable
  - Refactor the server tests to be more unit-like
  - Finish the client-side tests
  - Get 100% coverage, including else branches

- Functional tests:
  - Find a way to start and stop a full test server.
  - Check that the wdio client connects, browses, and disconnects.

- Features
  - "User has disconnected" message
  - Keep the username when the server restarts
  - Limit to one person per username (except for anonymous - or set a uuid)
  - Slight styling fixes
    - Scroll down when messages take up the whole page
    - Don't have the chat box overlay the page
  - "User is typing" message
  - Channels
  - Giphy
  - Error messaging if a message isn't delivered
  - Store messages?
  - Private messaging?

Getting started
---------------

To install the packages:
```
npm install
```
To bundle the code and start the server:
```
npm start
```
To start the server in watch mode, which will rebundle and restart on any changes to any of the JavaScript files:
```
npm run watch
```

Resources
---------

- The socket.io site is finally back online. https://socket.io/
- An archive.org link to the chat tutorial: https://web.archive.org/web/20161018172034/http://socket.io/get-started/chat/
- A mirror of the documentation: http://devdocs.io/socketio/using-multiple-nodes
- A tutorial: https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/socket-io-let-s-go-to-real-time
- Cheat sheet: https://github.com/socketio/socket.io/blob/master/docs/emit.md
- Testing socket.io with mocha http://liamkaufman.com/blog/2012/01/28/testing-socketio-with-mocha-should-and-socketio-client/
