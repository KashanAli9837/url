import { Router } from "express";

import {
  handleGenerateShortURL,
  handleGetAnalytics,
  handleRedirectURl,
  handleAllURLS
} from "../controllers/url.js";

const router = Router();

router.post("/info", handleGenerateShortURL);

router.get("/all", handleAllURLS);

router.get("/open/:shortId", handleRedirectURl);

router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
