import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        date: {
          type: String,
        },
        time: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const URL = mongoose.model("url", urlSchema);

export default URL;
