require("dotenv");

const { postTwitterMessage } = require("./app/twitter");
const { every, minutes } = require("./lib/scheduling");

every(30, minutes, postTwitterMessage);
