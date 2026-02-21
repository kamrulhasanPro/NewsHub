import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
let db;

export const dbConnect = async () => {
  try {
    await client.connect();
    console.log("✅ Successfully connect DB.");
    db = client.db("task-management-practice");
  } catch (error) {
    console.log("❌ unsuccessfully connect DB.", error);
  }
};

export const getDB = () => db;
