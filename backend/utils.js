// Utility funcitons


// Normalizing the port
export const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

export const errorHandler = (error, port, server) => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port: " + port;
    switch(error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
        // eslint-disable-next-line no-fallthrough
        case "EADDRINUSE":
            console.error(bind + " is already in use.");
            process.exit(1);
        // eslint-disable-next-line no-fallthrough
        default:
            console.error(error);
            process.exit(1);
    }
}