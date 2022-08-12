import http from "http";
import express from "express";
import bodyParser from "body-parser";
import config from "./config/config";
import routes from "./routes";
import mongoose from "mongoose";
import Logging from "./config/Logging";
import Database from "./database";

const NAMESPACE = "Server";
const router = express();

/** Database **/
const db = new Database(config.mongo.url);
  db.connect()
    .then(str => {
      StartServer();
    });

const StartServer = () => {
  /** Logging the request **/
  router.use((req, res, next) => {
    Logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      if (res.statusCode == 404)
        Logging.error(
          NAMESPACE,
          `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
        );
      else
        Logging.info(
          NAMESPACE,
          `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
        );
    });

    next();
  });

  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());

  /** Rules for API **/
  router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
      return res.status(200).json({});
    }

    next();
  });

  /** Routes **/
  router.use("/api", routes);

  /** Error Handing **/
  router.use((req, res, next) => {
    const error = new Error("not found");

    return res.status(404).json({
      message: Logging.error("API", error.message),
    });
  });

  /** Server **/
  const httpServer = http.createServer(router);
  httpServer.listen(config.server.port, () =>
    Logging.info(
      NAMESPACE,
      `Server running on ${config.server.hostname}:${config.server.port}`
    )
  );
};
