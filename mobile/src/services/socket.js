import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.6:3333", {
  autoConnect: false
});

function subscribeToNewDevs(subscribeFunction) {
  socket.io("new-dev", subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };
  socket.connect();

  socket.on("message", text => {});
}

function disconnect() {
  if (socket.connect) socket.disconnect();
}

export { connect, disconnect, subscribeToNewDevs };
