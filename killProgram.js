const TwitchBot = require('twitch-bot')
const { exec } = require('child_process');
const fs = require('fs');

console.log(`By rurigk https://github.com/rurigk/KillProgramBot`);

var settings = JSON.parse(fs.readFileSync('settings.json'));
var allowed = AllowedToLowerCase();
var command = settings.command;

const Bot = new TwitchBot({
	username: settings.username,
	oauth: settings.oauth,
	channels: [settings.channel]
})
 
Bot.on('join', () => {
	console.log(`Joined to ${settings.channel} as ${settings.username}`);
	console.log(`The command is ${setting.command}`);
	console.log(`The command message is ${setting.command}`);
	console.log(`The program to kill is ${setting.programm}`);
	Bot.on('message', chatter => {
		if(
			chatter.message === command && 
			allowed.indexOf(chatter.username) >= 0 &&
			(IsMod(chatter) || typeof chatter.badges.broadcaster != 'undefined')
		) {
			var date = new Date().toString();
			fs.appendFileSync('log.txt', `Triggered by ${chatter.username} at ${date}\n`);
			exec(`taskkill /IM "${settings.program}" /F`, (err, stdout, stderr) => {
				if (err) {
					// node couldn't execute the command
					console.log(`Unable kill the program`);
					return;
				}

				// the *entire* stdout and stderr (buffered)
				//console.log(`stdout: ${stdout}`);
				//console.log(`stderr: ${stderr}`);
				console.log(settings.command_message);
				Bot.say(settings.command_message);
			});
		}
	})
})
 
Bot.on('error', err => {
	console.log(err);
	if(err.message == "Login authentication failed")
	{
		console.log(`Unable to join to ${settings.channel} as ${settings.username}`);
		console.log(`Authentication failed, check if your oauth key is correct`);
	}
})

function AllowedToLowerCase()
{
	var allowed = [];
	for (var i = 0; i < settings.allowed.length; i++) {
		allowed.push(settings.allowed[i].toLowerCase());
	}
	return allowed;
}

function IsMod(chatter)
{
	if(settings.onlyMods == true)
	{
		return chatter.mod == true;
	}
	return true;
}
