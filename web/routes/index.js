const express = require('express');
const emailer = require('nodemailer');
const epa = require('epa').getEnvironment();
const mailer = require('mailer');
// const wascally = require('wascally');
const SendMailViaQueue = require('../lib/queue-sendEmail');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send', (req,res,next)=>{
	console.log('post handled',req.body);
	const from = req.body.from;
	const message = req.body.message;
	const subject = `Contact Request: ${req.body.from}`;

	const emailInfo = {
		to: 'claudioteixeira7@gmail.com',
		message:message,
		subject: subject,
		from: from
	};

	const emailSender = new SendMailViaQueue();
	emailSender.send(emailInfo);

	// // publish to the email exchange
	// wascally.publish('email.ex',{
	// 	routingKey: 'send',
	// 	type: 'email.send',
	// 	body: emailInfo
	// });

	res.render('thank-you');
});

module.exports = router;
