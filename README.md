# AS MULTIVERSE TOKENS BOT

A Telegram bot built in **Node.js** for manually distributing **AS MULTIVERSE system APK tokens** to users.

> This is one of many bots developed and maintained by **[popeye68](https://github.com/popeye68)**. More public bots will be released soon. Stay tuned!

> **Live Bot**: [AS MULTIVERSE](https://t.me/rwa_tokensbot)

---

## Developer

**GitHub**: [popeye68](https://github.com/popeye68)

---

## Features

- Token delivery system for multiple platforms (RWA, CW, RG)
- Fully manual control — no backend database required
- Lightweight & fast
- Runs perfectly on **Koyeb**, **Heroku**, and **Replit**
- Can be kept online using **UptimeRobot**

---

## Available Commands

| Command    | Description                         |
|------------|-------------------------------------|
| `/start`   | Check if the bot is alive           |
| `/help`    | Show bot usage instructions         |
| `/token`   | Get Rojgar With Ankit token         |
| `/cwtoken` | Get CareerWill token                |
| `/rgtoken` | Get RG Vikramjeet token             |
| `/apk` | Get All Apk files

---

### Deploy the Bot

#### **Koyeb**
[![Deploy on Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=as-multiverse-token&repository=Popeye68%2FAs-Multiverse-Token&branch=main&instance_type=free&instances_min=0&autoscaling_sleep_idle_delay=300)

#### **Heroku**
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Popeye68/As-Multiverse-Token)

#### **Replit**
[![Run on Replit](https://replit.com/badge/github/Popeye68/As-Multiverse-Token)](https://replit.com/github/Popeye68/As-Multiverse-Token)


---

## Keep Bot Alive 24/7

Use [**UptimeRobot**](https://uptimerobot.com/) to ping your deployed bot every 5 minutes.  
Set your Koyeb/Heroku/Replit public URL as the monitor endpoint.

---

## Environment Setup (.env)

The bot uses a `.env` file for secure variable management.

Create a `.env` file with TOKEN = Your bot token

### On Koyeb:
- Go to your bot service.
- Open **"Environment Variables"**.
- Add key `TOKEN` and value as your Bot Token.

### On Heroku:
- Go to your Heroku app.
- Open **Settings > Config Vars**.
- Add key `TOKEN` with your bot token.

### On Replit:
- Go to **Secrets (Lock icon)**.
- Add key: `TOKEN`, value: your token.

---

## Customize `index.js`

Replace the following in your code for the bot to work correctly:

1. **BOT TOKEN**  
   - Get your token from [@BotFather](https://t.me/BotFather)

2. **Admin Chat ID**  
   - Replace `your_chat_id` with your Telegram user ID  
   - Use [@userinfobot](https://t.me/userinfobot) to get it.

3. **Batch Name**  
   - Replace `batch_name` with the actual batch name (e.g. `"AS Batch 5"`)

4. **Token Value**  
   - Replace `token_value` with the actual token string you want to send.

5. **File IDs (Image + APK)**  
   - Send the file (image or APK) to your bot  
   - Forward it to [@jsondumpbot](https://t.me/jsondumpbot)  
   - Copy the `file_id` and paste in the code.

6. **Channel/Group Links**  
   - Replace default URLs with your Telegram group or channel links.

---

## Example `.env`

TOKEN=your_bot_token 

---

## License

This bot is licensed under **ISC** — free for personal and educational use.

---

> Made with caffeine & curiosity by [popeye68](https://github.com/popeye68)

