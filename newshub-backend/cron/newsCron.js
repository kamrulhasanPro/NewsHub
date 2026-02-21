import cors from "cors";
const API_NEWS = `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API}`;

cron.schedule("0 */1 * * *", async () => {
  console.log("fetch news in api");
  try {
    const res = await fetch("")
      .then((res) => res.json())
      .then((data) => data);
    console.log(res);

    // save in db
    const news = await getDB().collection("news");
    // const insertNews = await news.insertMany(res.)
  } catch (error) {
    console.error("Error fetching news", error.message);
  }
});
