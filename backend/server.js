import { normalizePort, errorHandler } from "./utils.js";
import http from "http";
import app from "./app.js";

const port = normalizePort(process.env.PORT || 3000);

const server = http.createServer(app);

server.on("error", () => errorHandler);
server.on("listening", () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe" + address: "port " + port;
    console.log("Listening on " + bind); 
});

server.listen(port);
