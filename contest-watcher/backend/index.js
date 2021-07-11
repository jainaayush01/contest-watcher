const express = require("express");
const cors = require("cors");
const request = require("request");
const moment = require("moment");
require('dotenv').config();

const app = express();

app.use(cors());

const API_KEY = process.env.API_KEY;

app.get("/api/contest", (req, res) => {
    let startTime = moment().format("YYYY-MM-DD HH:MM");
    let endTime = moment().add(1, "d").format("YYYY-MM-DD HH:MM");

    const url = `https://clist.by:443/api/v2/contest/?total_count=true&username=aayushjain&api_key=${API_KEY}&start__gt=${startTime}&start__lt=${endTime}`;

    var options = {
        method: "GET",
        url: url,
        headers: {
            Cookie: "csrftoken=YpG8uoEirttdcErG6RNKo3diFME6RJBRVDm4GNFzfDwwJvngu7Cs1tCQ9Gmhs3rl",
        },
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json(JSON.parse(response.body));
    });
});

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

var listener = app.listen(process.env.PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
