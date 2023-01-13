require("dotenv").config();

const {
  TWITTER_API_KEY: appKey,
  TWITTER_API_KEY_SECRET: appSecret,
  TWITTER_ACCESS_TOKEN: accessToken,
  TWITTER_ACCESS_SECRET: accessSecret,
} = process.env;
const { TwitterApi } = require("twitter-api-v2");
const generation = require("../lib/generation");

const client = new TwitterApi({
  appKey,
  appSecret,
  accessToken,
  accessSecret,
});

async function postTwitterMessage() {
  const generatedSentence = generation.generate();

  client.v2.tweet(generatedSentence);
}

module.exports = {
  postTwitterMessage,
};
