import { nanoid } from "nanoid";

import URL from "../models/url.js";

const handleGenerateShortURL = async (req, res) => {
  const { url } = req.body;
  const shortId = nanoid(8);

  await URL.create({
    shortId,
    redirectURL: url,
    visitHistory: [],
  });

  res.render("info", {
    shortId,
  });
};

const handleRedirectURl = async (req, res) => {
  const shortId = req.params.shortId;
  const newDate = new Date();
  const date = newDate.toDateString();
  const time = newDate.toLocaleTimeString();

  const result = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          date,
          time,
        },
      },
    }
  );

  if (!result.redirectURL) {
    return res.status(404).json({ error: "URL not found" });
  }

  res.redirect(result.redirectURL);
};

const handleGetAnalytics = async (req, res) => {
  const { shortId } = req.params;
  const { visitHistory } = await URL.findOne({
    shortId,
  });

  res.render("analytics", {
    clicks: visitHistory.length,
  });
};

const handleAllURLS = async (req, res) => {
  const urls = await URL.find({});

  res.render("all", { urls });
};

export {
  handleGenerateShortURL,
  handleRedirectURl,
  handleGetAnalytics,
  handleAllURLS,
};
