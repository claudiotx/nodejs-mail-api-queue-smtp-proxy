const util = require('util');
const Rabbus = require('rabbus');
const wascally = require('wascally');

function EmailReceiver(){
	Rabbus.Receiver.call(this, wascally,{
		exchange: 'email.ex',
		routingKey: 'send',
		queue: 'email.q',
		messageType: 'send.email'
	});
}

util.inherits(EmailReceiver, Rabbus.Receiver);
module.exports = EmailReceiver;