/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var twilio = require('twilio');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var to;
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/',function(req,res){
	res.send('pradeep');
    

});

app.post('/email',function(req,res){
    
       console.log("request:"); console.log(req.body);

        send_mail(req,res);
    res.send("mail sent");
    
});
app.post('/sms',function(req,res){
    
       console.log("request:"); console.log(req.body);

        send_sms(req,res);
    res.send("sms sent");
    
});
function send_sms(req,res){

    var client = new twilio.RestClient('AC123b512793595f222abf93e980718b5b','21367639153e33ea046e938061f10fa8');
  client.sms.messages.create({
    to: req.body.to,
    from:'+12056248952',
    body: req.body.subject
}, function(error, message) {
	if(!error){
		console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
 
        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.');
        console.log(error);
    }
});
}
function send_mail(req,res){
var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "kssevatrust@gmail.com",
       pass: "admin*123"
   }
});
smtpTransport.sendMail({
   from: "kssevatrust@gmail.com", // sender address
   to: req.body.email, // comma separated list of receivers
   subject: req.body.subject, // Subject line
   text: req.body.message // plaintext body
}, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
});
    
}
	
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
	//var host = server.address().address;
	//var port = server.address().port;
	//console.log("server is started at address : %s port: %s", host,port);

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
