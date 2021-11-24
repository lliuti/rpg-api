const dotenv = require("dotenv/config");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

io.on("connection", (socket) => {
  console.log(socket.id);
});

httpServer.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} with websockets`);
});

// app.listen(PORT, () => {
//   console.log(`Server (HTTP) running on port: ${PORT}`);
// });
