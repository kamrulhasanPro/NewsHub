import { ObjectId } from "mongodb";
import { getDB } from "../configs/dbConnect.js";

export const allNews = async (req, res) => {
  try {
    const { language, country } = req.query;

    const query = {};
    if (language) {
      query.language = language;
    }
    if (country) {
      query.country = country;
    }

    const newsCollection = await getDB().collection("news");

    const news = await newsCollection.find(query).toArray();

    res.json({
      message: "All News",
      news,
    });
  } catch (error) {
    console.log("something is wrong", error);
  }
};

export const specificNews = async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const newsCollection = await getDB().collection("news");

    const news = await newsCollection.findOne(query);

    res.json({
      message: "Specific News",
      news,
    });
  } catch (error) {
    console.log("something is wrong", error);
  }
};
