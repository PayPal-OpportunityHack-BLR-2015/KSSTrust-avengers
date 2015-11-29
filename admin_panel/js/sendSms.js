var twilio = require('twilio');

// Your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACa05c25a250c166e9bfac25b8a58f2957';
var authToken = "72147e9e2143fe857bc2c1a325a86e2f";
var client = require('twilio')(accountSid, authToken);
 
client.messages.create({
    body: "Yay! It worked",
    to: "+919566896454",
    from: "+12056714977"
}, function(err, message) {
   
    process.stdout.write(message.sid);
});
