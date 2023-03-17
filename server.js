const TelegramBot = require('node-telegram-bot-api')
const { google } = require('googleapis')

const bot = new TelegramBot('6139518171:AAEOUUvSaUKLl0XFhQGC3heJNo1Xvn8G3eY', { polling: true })

// Create a new instance of the YouTube Data API client
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCnPMT1Y2sgoQoWyrv01rBw-nEbprmVRKw',
})

// Handle the "/start" command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! What video are you looking for?')
})

// Handle user input
bot.on('message', (msg) => {
  const chatId = msg.chat.id

  // Search for a video on YouTube
  youtube.search.list(
    {
      part: 'id',
      q: msg.text,
      type: 'video',
      maxResults: 1,
    },
    (err, res) => {
      if (err) {
        console.log(err)
        bot.sendMessage(
          chatId,
          "Sorry, I couldn't find a video for that search query." 
        )
      } else if (res.data.items.length === 0) {
        bot.sendMessage(
          chatId,
          "Sorry, I couldn't find a video for that search query."
        )
      } else {
        const videoId = res.data.items[0].id.videoId
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
        bot.sendMessage(chatId, videoUrl)
      }
    }
  )
})
console.log("11");