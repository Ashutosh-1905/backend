import http from "http";
import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDb from "./src/config/db.js";


const startServer = async() => {
    await connectDb();
    const server = http.createServer(app);
    const port = config.port || 5000;
    server.listen(() => {
        console.log(`server is running on port ${port}`);
    });
}

startServer();