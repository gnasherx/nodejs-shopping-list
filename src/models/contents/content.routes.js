import { Router } from "express";

import * as ContentsController from "./content.controller";

const routes = new Router();

routes.get("/contents", ContentsController.getAllContents);

export default routes;
