const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API berjalan!");
});

app.listen(4000, () => console.log("Server berjalan di port 4000"));
