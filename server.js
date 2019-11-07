/* Setting things up. */
const express = require("express");
const app = express();

app.use(express.static("public"));

const postToTwitter = require('./postToTwitter.js')

app.all(`/${process.env.BOT_ENDPOINT}`, function(req, res) {
  postToTwitter();
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your bot is running on port " + listener.address().port);
});
