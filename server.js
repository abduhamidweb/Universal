// V1
// const TelegramBot = require('node-telegram-bot-api')
// const { google } = require('googleapis')

// const bot = new TelegramBot('6139518171:AAEOUUvSaUKLl0XFhQGC3heJNo1Xvn8G3eY', { polling: true })

// // Create a new instance of the YouTube Data API client
// const youtube = google.youtube({
//   version: 'v3',
//   auth: 'AIzaSyCnPMT1Y2sgoQoWyrv01rBw-nEbprmVRKw',
// })

// // Handle the "/start" command
// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, 'Hello! What video are you looking for?')
// })

// // Handle user input
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id

//   // Search for a video on YouTube
//   youtube.search.list(
//     {
//       part: 'id',
//       q: msg.text,
//       type: 'video',
//       maxResults: 1,
//     },
//     (err, res) => {
//       if (err) {
//         console.log(err)
//         bot.sendMessage(
//           chatId,
//           "Sorry, I couldn't find a video for that search query."
//         )
//       } else if (res.data.items.length === 0) {
//         bot.sendMessage(
//           chatId,
//           "Sorry, I couldn't find a video for that search query."
//         )
//       } else {
//         const videoId = res.data.items[0].id.videoId
//         const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
//         bot.sendMessage(chatId, videoUrl)
//       }
//     }
//   )
// })
// V2
// const TelegramBot = require('node-telegram-bot-api')
// const { google } = require('googleapis')
// const axios = require('axios')

// const bot = new TelegramBot('6139518171:AAEOUUvSaUKLl0XFhQGC3heJNo1Xvn8G3eY', {
//   polling: true,
// })

// // Create a new instance of the YouTube Data API client
// const youtube = google.youtube({
//   version: 'v3',
//   auth: 'AIzaSyCnPMT1Y2sgoQoWyrv01rBw-nEbprmVRKw',
// })

// // Handle the "/start" command
// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, 'Hello! What would you like me to do?', {
//     reply_markup: {
//       keyboard: [
//         [{ text: 'Search YouTube' }],
//         [{ text: 'Get GitHub Repositories' }],
//       ],
//       resize_keyboard: true,
//     },
//   })
// })

// // Handle the "Search YouTube" button click
// bot.onText(/Search YouTube/, (msg) => {
//   bot.sendMessage(msg.chat.id, 'What video are you looking for?')
// })

// // Handle user input for YouTube search
// bot.on('message', (msg) => {
//   if (msg.text === 'Search YouTube') {
//     return // Ignore this message since it's a button click
//   }

//   const chatId = msg.chat.id

//   // Search for a video on YouTube
//   youtube.search.list(
//     {
//       part: 'id',
//       q: msg.text,
//       type: 'video',
//       maxResults: 1,
//     },
//     (err, res) => {
//       if (err) {
//         console.log(err)
//         bot.sendMessage(
//           chatId,
//           "Sorry, I couldn't find a video for that search query."
//         )
//       } else if (res.data.items.length === 0) {
//         bot.sendMessage(
//           chatId,
//           "Sorry, I couldn't find a video for that search query."
//         )
//       } else {
//         const videoId = res.data.items[0].id.videoId
//         const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
//         bot.sendMessage(chatId, videoUrl)
//       }
//     }
//   )
// })

// // Handle the "Get GitHub Repositories" button click
// bot.onText(/Get GitHub Repositories/, (msg) => {
//   bot.sendMessage(msg.chat.id, 'What is the GitHub username?')
// })

// // Handle user input for GitHub username
// bot.on('message', async (msg) => {
//   if (msg.text === 'Get GitHub Repositories') {
//     return // Ignore this message since it's a button click
//   }

//   const chatId = msg.chat.id
//   const username = msg.text

//   // Get the user's repositories from GitHub
//   try {
//     const res = await axios.get(
//       `https://api.github.com/users/${username}/repos`
//     )
//     const repos = res.data.map((repo) => repo.name).join('\n')
//     bot.sendMessage(chatId, repos)
//   } catch (err) {
//     console.log(err)
//     bot.sendMessage(
//       chatId,
//       "Sorry, I couldn't find any repositories for that user."
//     )
//   }
// })
// V3





const TelegramBot = require('node-telegram-bot-api');
const { google } = require('googleapis');
const axios = require('axios');

const bot = new TelegramBot('6139518171:AAEOUUvSaUKLl0XFhQGC3heJNo1Xvn8G3eY', {
  polling: true,
})

// Create a new instance of the YouTube Data API client
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCnPMT1Y2sgoQoWyrv01rBw-nEbprmVRKw',
})

// Handle the "/start" command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! What would you like me to do?', {
    reply_markup: {
      keyboard: [
        [{ text: 'Search YouTube' }],
        [{ text: 'Get GitHub Repositories' }],
        [{ text: 'Get Prayer Times' }],
      ],
      resize_keyboard: true,
    },
  });
});

// Handle the "Search YouTube" button click
bot.onText(/Search YouTube/, (msg) => {
  bot.sendMessage(msg.chat.id, 'What video are you looking for?');
});

// Handle user input for YouTube search
bot.on('message', (msg) => {
  if (msg.text === 'Search YouTube') {
    return; // Ignore this message since it's a button click
  }

  const chatId = msg.chat.id;

  // Search for a video on YouTube
  youtube.search.list({
    part: 'id',
    q: msg.text,
    type: 'video',
    maxResults: 1,
  }, (err, res) => {
    if (err) {
      console.log(err);
      bot.sendMessage(chatId, 'Sorry, I couldn\'t find a video for that search query.');
    } else if (res.data.items.length === 0) {
      bot.sendMessage(chatId, 'Sorry, I couldn\'t find a video for that search query.');
    } else {
      const videoId = res.data.items[0].id.videoId;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      bot.sendMessage(chatId, videoUrl);
    }
  });
});

// Handle the "Get GitHub Repositories" button click
bot.onText(/Get GitHub Repositories/, (msg) => {
  bot.sendMessage(msg.chat.id, 'What is the GitHub username?');
});

// Handle user input for GitHub username
bot.on('message', async (msg) => {
  if (msg.text === 'Get GitHub Repositories') {
    return; // Ignore this message since it's a button click
  }

  const chatId = msg.chat.id;
  const username = msg.text;

  // Get the user's repositories from GitHub
  try {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repos = res.data.map((repo) => repo.name).join('\n');
    bot.sendMessage(chatId, repos);
  } catch (err) {
    console.log(err);
    bot.sendMessage(chatId, 'Sorry, I couldn\'t find any repositories for that user.');
  }
});

// Handle the "Get Prayer Times" button click
bot.onText(/Get Prayer Times/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    const res = await axios.get('https://islomapi.uz/api/present/day?region=toshkent');
    const prayerTimes = res.data.data.timetable.map((item) => `${item.name}: ${item.time}`).join('\n');
    bot.sendMessage(chatId, prayerTimes);
  } catch (err) {
    console.log(err);
bot.sendMessage(chatId, "Sorry, I couldn't fetch the prayer times."); 
}
});