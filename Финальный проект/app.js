const http = require("http");
const mainRouteController = require("./controllers/main.js");
const defaultRouteController = require("./controllers/default.js");
const gameRouteController = require("./controllers/game.js");
const voteRouteController = require("./controllers/vote.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.listen(3005, () => {
  console.log("Server is running on port 3005");
});
