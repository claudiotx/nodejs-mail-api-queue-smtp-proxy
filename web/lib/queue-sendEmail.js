const util = require('util');
const Rabbus = require('rabbus');
const wascally = require('wascally');
// Constructor Function
function SendEmail() {
	Rabbus.Sender.call(this, wascally,{
		exchange: 'email.ex',
		routingKey: 'send',
		messageType: 'send.email'
	});
}

util.inherits(SendEmail, Rabbus.Sender);
module.exports = SendEmail;