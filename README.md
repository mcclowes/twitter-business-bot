# twitter-business-bot

Check out botwiki.org/tutorials/how-to-create-a-twitter-app to see how to obtain the keys/secrets you need to authenticate and post to Twitter.

# Tweet content

For my data, I create a Google Sheet and access it via the Sheety API endpoint (<https://sheety.co/>).

Add your url to the `.env` under `GOOGLE_SHEET_ENDPOINT`

# Triggering the job

I use <https://cron-job.org/> for trigger the tweet.

You can customize the endpoint that wakes up your Twitter bot. This way you can prevent someone else from triggering it. You can make it something simple like 'tweet', or something random, like 'tweet12345endpoint9876'. Put this in the `.env` undex `BOT_ENDPOINT`