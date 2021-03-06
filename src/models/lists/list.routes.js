import { Router } from "express";

import * as ListsController from "./list.controller";

const routes = new Router();

routes.post("/list/new", ListsController.createList);
routes.get("/lists", ListsController.getAllLists);

routes.post("/list/:listId/content/new", ListsController.createContentOfList);

export default routes;
