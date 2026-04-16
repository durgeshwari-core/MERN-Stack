const express = require('express');
const app = express();
const port = 3000;

// API ENDPOINT
app.get('/api/student', (req, res) => {
    
    //  The data that server holds 
    const profile = {
        name: "Shreya",
        major: "Engineering",
        skills: ["C", "C++", "Python", "Java", "Node.js"]
    };

    // 2. The API sends this data back to whoever asked for it, formatted as JSON
    res.json(profile); 
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});