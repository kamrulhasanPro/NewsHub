import { getDB } from "../configs/dbConnect.js";

export const allNews = async (req, res) => {
  try {
    const newsCollection = await getDB().collection("news");

    const news = await newsCollection.find().toArray();

    const result = res.json({
      message: "All News",
      news,
    });
  } catch (error) {
    console.log("something is wrong", error);
  }
};

export const specificNews = async (req, res) => {
  res.json({
    message: "Specific News",
  });
};
