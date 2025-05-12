# ALL-IN-ONE Discord Bot

![Node.js](https://img.shields.io/badge/Node.js-16.9.0%2B-brightgreen?logo=node.js)
![License](https://img.shields.io/github/license/ApsXminer/AIO-V1)
![Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen)
![Made With Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)

> 🚀 A fully featured, modular Discord bot built to manage your entire server with ease.

---

## ✨ Features

- 🎮 **AFK System** – Set, reset, and list AFK statuses.
- 📢 **Announcement Tools** – Seamless embed announcement generation.
- ⚙️ **Auto Moderation** – Spam control, bad words filter, and more.
- 🎉 **Giveaways** – Host giveaways with automatic entries and winner selection.
- 🔐 **Moderation** – Commands for warn, mute, ban, kick, purge, etc.
- 🧾 **Advanced Logging** – Tracks edits, deletions, joins/leaves, and role changes.
- 📊 **Level System** – XP, rank cards, and leaderboard.
- 🎵 **Music Integration** – Lavalink support with optional Spotify connection.
- 📬 **Ticket System** – Interactive button-based ticket creation.
- 🧠 **AI Chat** – GROQ-powered chat responses.
- 🎮 **Radio Streaming** – Play internet radio in voice channels.
- 🛠️ **Custom Commands** – Easily add personalized bot commands.

---

## 📦 Installation

### Requirements

- Node.js 16.9.0 or higher
- A Discord bot token
- MongoDB URI
- Lavalink server (local or remote)

### Clone & Install

```bash
git clone https://github.com/ApsXminer/AIO-V1.git
cd AIO-V1
npm install
````

---

## 🚀 Run the Bot

```bash
node .
```


---

## ⚙️ Configuration

### Environment Variables


```env
# Required
DISCORD_TOKEN=your_discord_bot_token
MONGO_TOKEN=your_mongo_connection_uri
GIPHY_TOKEN=your_giphy_api_key
WEBHOOK_ID=your_webhook_id
WEBHOOK_TOKEN=your_webhook_token
DISCORD_ID=your_discord_user_id
OWNER_ID=bot_owner_id
GROQ=your_groq_api_key

# Optional
DISCORD_STATUS="Listening to meself, i love you"
RADIO=https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live.mp3
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
LAVALINK_HOST=lava.link
LAVALINK_PASSWORD=I'm a secret
LAVALINK_PORT=80
LAVALINK_SECURE=false
```

---

## 📁 File Structure

```
ALL-IN-ONE-Discord-Bot/
├── src/
│   ├── index.js
│   ├── bot.js
│   ├── commands/
│   ├── events/
│   └── assets/utils/
├── .env.example
├── package.json
└── README.md
```


## 📜 License

Licensed under the [MIT License](LICENSE).

---

> 💖 Made with passion by Code X — !


