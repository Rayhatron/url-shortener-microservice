const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendfile('./views/index.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
