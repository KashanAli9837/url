import URL from "../models/url.js";

const handleHomePage = async (req, res) => {
  const urls = await URL.find({});

  res.render("home", {
    urls,
  });
};

export { handleHomePage };
