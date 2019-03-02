const rabbit = require('wascally');
const mailer = require('mailer');
var path = require("path");
const epa = require('epa').getEnvironment();
const EmailReceiver = require('./emailReceiver');

// Handler functions
const reportError = (err) => {
	console.error('Error: ', err.stack);
	exit();
}	

const waitForEmailRequests = () =>{
	console.log('waiting for email requests..');
	// Via Rabbus
	const emailReceiver = new EmailReceiver();
	emailReceiver.receive(function(message, properties, actions, next){
		console.log("MESSAGE RECEIVED", message);		
		actions.ack();
	});	
	emailReceiver.receive(sendEmailViaSmtp);
};

function sendEmailViaSmtp (message, properties, actions, next) {
	console.log('sending email via SMPT', emailConfig);
	// TODO
	// mailer.send(email,(err)=>{
	// 	if(err) { return reportError(err); }
	// 	console.log('email processed by mailer');			
	// });	
	actions.ack();
}

// Connect to RabbitMQ via Wascally
const rabbitMqConfig = epa.get('rabbitmq');
rabbit
	.configure(rabbitMqConfig)
	.then(waitForEmailRequests)
	.then(undefined, reportError);


// Close all Queue Channels
const exit = ()=>{
	rabbit.closeAll.then(process.exit);
}

