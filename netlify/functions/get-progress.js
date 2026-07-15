const { connectToDatabase } = require('./utils/db');

exports.handler = async (event, context) => {
    if (event.httpMethod !== "GET") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const userId = event.queryStringParameters.userId;

        if (!userId) {
            return { statusCode: 400, body: "Missing authorized User ID query parameter." };
        }

        // Connect and pull user records matching this specific ID
        const { db } = await connectToDatabase();
        const collection = db.collection('user_progress');
        
        const trackingRecords = await collection.find({ userId: userId }).toArray();

        return {
            statusCode: 200,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify(trackingRecords)
        };

    } catch (error) {
        console.error("Failed to read tracking matrix rules:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch profile metrics from cloud." })
        };
    }
};