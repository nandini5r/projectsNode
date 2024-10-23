const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/test', (req, res) => {
    res.send("hello from the new project devTinder");
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
