const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://chandrasaisrigunapalli_db_user:sirii%401012@cluster0.u2sa5xq.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Connection failed:", error.message);
  } finally {
    await client.close();
  }
}

run();