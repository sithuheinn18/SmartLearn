// Mock Database Array (This can be hooked up to MongoDB or Postgres later!)
const courseDatabase = [
    { id: "c1", title: "Formal Logic & Deduction", category: "Philosophy", modules: 12, icon: "🧩", description: "Master syllogisms, truth matrices, and valid conditional proofs." },
    { id: "c2", title: "Visual Mathematics", category: "Mathematics", modules: 8, icon: "📈", description: "Understand calculus and linear transformations through clean geometric animations." },
    { id: "c3", title: "Classical Mechanics Intuition", category: "Physics", modules: 15, icon: "✨", description: "Build physical mental models of inertia, momentum, and kinetic tracking layouts." },
    { id: "c4", title: "Introduction to Pāḷi Linguistics", category: "Languages", modules: 10, icon: "☸️", description: "Analyze script translation, grammatical cases, and historical etymology structures." }
];

exports.handler = async (event, context) => {
    // Extract search query parameter if passing from frontend (e.g., ?search=logic)
    const searchQuery = event.queryStringParameters.search || "";
    
    // Filter courses matching title, category, or description strings
    const filteredCourses = courseDatabase.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" // Handle local development CORS configurations cleanly
        },
        body: JSON.stringify(filteredCourses)
    };
};