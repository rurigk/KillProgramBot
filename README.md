# KillProgramBot

Recently many twitch streamers have been falling asleep, for that reason I created this little bot to help them in those cases

This bot fulfills a very simple task, it kills a program when a designated twitch user executes a command in the channel chat

[![ko-fi](https://www.ko-fi.com/img/donate_sm.png)](https://ko-fi.com/rurigk)

## How to use

You can run the script with nodejs

or

You can download executable version at [Releases](https://github.com/rurigk/KillProgramBot/releases)

## Configuration

You need to edit the settings.json file in order to use the bot
The settings.json is a utf-8 encoded file, in other words the file cannot be edited with windows notepad, you need to use a program like [Notepad++](https://notepad-plus-plus.org/) or [Sublime text 3](https://www.sublimetext.com/3)

### Fields
The syntax for each field is the next
The text is enclosed in quotes `"fieldname": "text"`
The numbers is not enclosed in quotes `"fieldname": 1`
The boolean values only contains true or false `"fieldname": true`

All fields have a comma at the end except the last
```
{
	"field1" : "text",
	"field2" : 1",
	"field3" : false
}
```

#### username
The twitch user to use as the bot
```
"username" : "thebotusername"
```

#### oauth
The twitch auth api key
```
"oauth" : "oauth:key"
```

#### channel
The chat channel to listen
```
"channel" : "channelname"
```

#### command
The command to trigger the bot
```
"command" : "!command_name"
```

#### command_message
The message to show in the chan when the bot is triggered
```
"command_message" : "The program is killed PogChamp"
```

#### program
The program name to be killed by the bot
```
"program" : "notepad.exe"
```

#### onlyMods
If the value is true only moderators or the streamer can use the command even if the name is in the list of allowed
If the value is false all users in the list can use the command
```
"onlyMods" : true
```

#### allowed
The list of users allowed to use the command

Only one user
```
"allowed" : ["username"]
```
Multiple users
```
"allowed" : ["user1", "user2", "user3"]
```

You can contact me to rurigkdev@gmail.com
