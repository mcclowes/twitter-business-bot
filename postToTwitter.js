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

const prefix = "Red-hot business idea: "

const randomItem = (items) => items[Math.floor(Math.random()*items.length)];

const twists = [
  'on-demand',
  'cheap',
  'high-end',
  'subscription-paid',
  'peer-to-peer',
  'off-brand',
  'second-hand',
  'luxury',
  'fresh',
  'brand-new',
  'innovative',
  'by-the-hour',
  'rented',
  'state-of-the-art',
  'classic',
  'ethical',
  'environmentally-friendly',
  'funny',
  'fashionable',
  'quirky',
  'eclectic',
  'tiny',
  'huge',
  'big',
]

const ideas = [
  'taxis',
  'pedicures',
  'massages',
  'funeral care',
  'music',
  'videos',
  'laptops',
  'smartphones',
  'books',
  'crosswords',
  'fashion',
  'plants',
  'homeware',
  'building supplies',
  'builders',
  'IT support',
  'pesto',
  'tutoring',
  'games consoles',
  'e-sports streaming',
  'blockbuster movies',
  'torrenting',
  'A/V cables',
  'web hosting',
  'health care',
  'financial advice',
  'meat',
  'groceries',
  'vegan products',
  'glasses',
  'pets',
  'trainers',
  'drones',
  'false-teeth',
  'flip-flops',
  'luggage',
  'friends',
  'peanut butter',
  'Marmite',
  'carrots',
  'mattresses',
]

const markets = [
  'millials',
  'boomers',
  'the 1%',
  'gen-z-ers',
  'gen-y-ers',
  'whistleblowers',
  'the 99%',
  'grandmothers',
  'men',
  'women',
  'Apple users',
  'spooky ghosts',
  'cats',
  'dogs',
  'window cleaners',
  'gang members',
  'drug dealers',
  'personal trainers',
  'bankers',
  'social workers',
  'chartered accountants',
  'software developers',
  'gamers',
  'pets',
  'chauffeurs',
  '@FreddieRidell',
  'nervous people',
  'the clinically big-balled',
  'the betrothed',
  'the forgetful',
  'the ashamed',
  'the toothless',
  'the estranged',
  'good people',
  'bad people',
  'the alt-right',
  'centrists',
  'rappers',
  'a lost generation',
  'Twitter users',
  'otaku',
  'geese',
  'Boris Johnson',
  'Brexiters',
  'the monarchy',
]

const postToTwitter = (data) => {
  console.log("Creating Twitter client...");
  const T = new Twitter(twitterConfig.twitter);

  const tweet = prefix + randomItem(twists) + ' ' + randomItem(ideas) + ' for ' + randomItem(markets) + '. [bot generated]';

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