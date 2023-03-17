# Youtube-Search-bot-backend

## Telegram Bot
This is a Telegram bot built with Node.js that can perform the following tasks:

Search for videos on YouTube and provide the link to the top result.
Retrieve a user's repositories from GitHub and display their names.
Fetch and display prayer times for a specific location (default is Tashkent).
Installation
To run this bot locally, you'll need to install Node.js and npm. Then, clone this repository and run the following command in the project directory to install the required dependencies:

npm install
Next, you'll need to obtain the following credentials:

## Telegram bot token (from BotFather)
YouTube Data API key (from Google Cloud Console)
GitHub personal access token (from GitHub settings)
Copy the .env.example file to a new file called .env, and fill in the corresponding values:

##makefile
TELEGRAM_BOT_TOKEN=6139518171:AAEOUUvSaUKLl0XFhQGC3heJNo1Xvn8G3eY
YOUTUBE_API_KEY=<secreate>
GITHUB_ACCESS_TOKEN=<secrate>
Finally, run the following command to start the bot:

sql
npm start
Usage
To use the bot, open a conversation with it on Telegram and type one of the following commands:

###/start - display the main menu with available options
###Search YouTube - search for a video on YouTube and get the link to the top result
### Get GitHub Repositories - retrieve a user's repositories from GitHub and display their names
Get Prayer Times - fetch and display prayer times for a specific location (default is Tashkent)

##Contributing
If you find a bug or have a feature request, feel free to open an issue or submit a pull request.
