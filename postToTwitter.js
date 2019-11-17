/* Twitter config */
const Twitter = require("twit");
const twitterConfig = {
  twitter: {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  }
};

const axios = require('axios');

const prefix = "Red-hot business idea: "

const randomItem = (items) => items[Math.floor(Math.random()*items.length)];

const postToTwitter = async () => {
  console.log("Fetching data...");
  
  const data = await axios
    .get(process.env.GOOGLE_SHEET_ENDPOINT)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    });
  
  let twists = [] 
  let ideas = [] 
  let markets = [] 
  
  data.forEach(item=>{
    if(item.twists) { twists.push(item.twists) }
    if(item.ideas) { ideas.push(item.ideas) }
    if(item.markets) { markets.push(item.markets) }
  })
    
  const tweet = prefix + randomItem(twists) + ' ' + randomItem(ideas) + ' for ' + randomItem(markets) + '.';

  console.log("Creating Twitter client...");
  const T = new Twitter(twitterConfig.twitter);
  
  console.log("\nPosting to Twitter...");
  
  console.log(tweet)

  T.post("statuses/update", { status: tweet }, function(err, data, response) {
    if (err) {
      console.log("Error posting to Twitter...");
      console.log("error", err);
    } else {
      console.log("\nPosted!");
    }
  });
};

module.exports = postToTwitter