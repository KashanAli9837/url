import { Router } from "express";

import URL from "../models/url.js";
import { handleHomePage } from "../controllers/static.js";

const staticRouter = Router();

staticRouter.get("/", handleHomePage);

export default staticRouter;
