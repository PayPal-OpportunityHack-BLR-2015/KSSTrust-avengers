var websms = require('websmscom');
var myClient = new websms.Client(gatewayUrl, username, password);
var myMessage = new websms.TextMessage(recipientAddressList, unicodeMessageText, [creationFailedCallback]);
myClient.send(myMessage, maxSmsPerMessage, isTest, callback);
