const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
    // If a connection instance already exists in memory, reuse it!
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    if (!uri) {
        throw new Error("Missing MONGODB_URI system configuration matrix.");
    }

    // Initialize a clean cloud client connection instance
    const client = new MongoClient(uri);
    await client.connect();
    
    // Automatically targets the database specified in your URI connection string
    const db = client.db();

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

module.exports = { connectToDatabase };