// app.js

const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
