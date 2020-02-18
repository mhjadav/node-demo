import express from "express";
import bodyParser from "body-parser";
import setRoutes from "./routes";
import path from 'path';

const server = express();

server.use(express.static(path.join(__dirname,'/src/static')));
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());
setRoutes(server);
export default server;