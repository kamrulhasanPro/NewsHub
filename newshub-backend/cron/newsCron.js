import dotenv from "dotenv";
import cron from "node-cron";
import { getDB } from "../configs/dbConnect.js";

dotenv.config();

const NEWS_API_URL = `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API_KEY}`;

export const startNewsCron = () => {
  cron.schedule("0 */1 * * *", async () => {
    console.log("fetch news in api");
    try {
      const response = await fetch(NEWS_API_URL);
      const data = await response.json();

      console.log(data);
      if (!data?.results?.length) {
        console.log("No news found");
        return;
      }

      // save in db
      const newsCollection = await getDB().collection("news");
      const insertNews = await newsCollection.insertMany(data?.results);

      console.log(`Add InsertMany`, insertNews);
    } catch (error) {
      console.error("Error fetching news", error.message);
    }
  });
};
