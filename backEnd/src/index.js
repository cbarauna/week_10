const express = require(`express`);
const mongoose = require(`mongoose`);
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const { setUpWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setUpWebsocket(server);
mongoose.connect(
  `mongodb+srv://root:6fp0cK4sJOszu1ni@cluster0-fze0y.mongodb.net/week10?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
