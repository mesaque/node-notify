const https = require('https');
const player = require('play-sound')();
const cron = require('node-cron');
const notifier = require('node-notifier');


cron.schedule('* * * * *', function(){


	https.get('https://foxbit.exchange/', function(res) {

	  if( res.statusCode != 302 ){
	  	notifier.notify(
		  	{
		  		title: 'FoxBit MONITOR :p',
		  		message: 'ONLINEeEeEeEeE!!!'
		  	}
	  	);
		player.play('./media/slow-spring-board.mp3', (err) => {
		    if (err) console.log(`Could not play sound: ${err}`);
		});

	  }else {
	  	//notifier.notify(
	  	//	{
		//  		title: 'FoxBit MONITOR :p',
		//  		message: 'OFFlineEeE :('
		//  	});
	  	player.play('./media/light.mp3', (err) => {
		    if (err) console.log(`Could not play sound: ${err}`);
		});
	  }

	}).on('error', function(e) {
	  console.error(e);
	});

});