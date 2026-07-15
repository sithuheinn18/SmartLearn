const { connectToDatabase } = require('./utils/db');

exports.handler = async (event, context) => {
    // 🛡️ Only allow POST requests (sending data)
    if (event.httpMethod !== "POST") {
        return { 
            statusCode: 405, 
            body: "Method Not Allowed. Use POST to save progress." 
        };
    }

    try {
        const { userId, courseId, progress } = JSON.parse(event.body);

        // Simple validation check
        if (!userId || !courseId || progress === undefined) {
            return { 
                statusCode: 400, 
                body: "Missing required parameters: userId, courseId, or progress." 
            };
        }

        // 🔌 Connect to our MongoDB cloud
        const { db } = await connectToDatabase();
        const collection = db.collection('user_progress');

        // 💾 Upsert: Update if the user already has progress for this course, otherwise insert fresh!
        await collection.updateOne(
            { userId: userId, courseId: courseId },
            { $set: { progress: progress, updatedAt: new Date() } },
            { upsert: true }
        );

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ message: "Progress successfully locked into MongoDB Atlas!" })
        };

    } catch (error) {
        console.error("Database Save Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error saving progress data." })
        };
    }
};