import express, { Express, Request, Response, Router } from "express";

class App {
  app: Express = express();
  rootApiPath = "/api";

  constructor() {
    this.init();
  }

  init() {
    this.app.use(
      express.json({
        limit: "50mb",
      })
    );

    this.app.get("/", (req: Request, res: Response) => {
      res.send("Microservice Ok");
    });
  }

  setRoutes(api: Router) {
    this.app.use();
  }

  express() {
    return this.app;
  }
}

export default new App();
