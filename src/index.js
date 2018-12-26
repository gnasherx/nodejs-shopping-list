import express from "express";

import constants from "./configurations/constants";
import "./configurations/database";
import middlewareConfig from "./configurations/middlewares";

const app = express();

middlewareConfig(app);

app.listen(constants.PORT, function(error) {
  if (error) {
    throw error;
    ``;
  } else {
    console.log(`Server is running on port ${constants.PORT}
        ---
    Running on ${process.env.NODE_ENV}`);
  }
});
