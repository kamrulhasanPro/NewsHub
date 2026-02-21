// definition
import express from "express";
import dotenv from "dotenv";
import { dbConnect, getDB } from "./configs/dbConnect.js";
import newsRoute from "./routes/news.route.js";
import cron from "node-cron";
const app = express();
const port = 2000;

// middleware
dotenv.config();
app.use(cors());
app.use(express.json());

// connect db
dbConnect();

// save api data in db


// news api
app.use("/api/news", newsRoute);

// route
app.get("/", (req, res) => {
  res.json({
    message: "server is running",
    port,
  });
});

// listen
app.listen(port, () => {
  console.log("Server is running on the", port, "port");
});
