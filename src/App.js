const express = require("express");
const app = express();
const fs = require("fs");

app.get("/data", (req, res) => {
    fs.readFile("data.json", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading JSON file");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(3001, () => {
    console.log("Express server listening on port 3001");
});