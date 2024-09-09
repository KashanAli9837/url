import express from "express";

import connect from "./connection.js";
import router from "./routes/url.js";
import staticRouter from "./routes/static.js";

const app = express();
const PORT = 3000;

// connecting to DB
connect("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("DB connected"))
  .catch(() => console.log("DB could not connect"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("./public"));

// routes
app.use(staticRouter);
app.use(router);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error occurred: `, err);
    return;
  }

  console.log(`Server is running on port ` + PORT);
});
