const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
require("dotenv").config();
// add your token in .env or add directly here.
const TOKEN = process.env.TOKEN || ""; 

if (!TOKEN) {
  console.error("Bot token is missing! Please set TOKEN in .env or environment variables.");
  process.exit(1);
}
const bot = new TelegramBot(TOKEN, { polling: true });
const app = express();
const PORT = process.env.PORT || 3000;
//your grouo or channel link
const GROUP_LINK = "https://t.me/ASMULTIVERSE_TOKEN";

// add your tokens here 
const tokens = [
  {
    name: "ʏᴀᴋᴇᴇɴ ʙᴀᴛᴄʜ ᴅᴘ", subTokens: [
      //these are subtoken
      { name: "ᴅᴘ ᴄᴏɴꜱᴛᴀʙʟᴇ ʙᴀᴛᴄʜ", value: "token_value " },
      { name: "ᴅᴘ ʜᴇᴀᴅ ᴄᴏɴꜱᴛᴀʙʟᴇ", value: "token_value" },
      { name: "ᴅᴘ ᴅʀɪᴠᴇʀ ʙᴀᴛᴄʜ", value: "token_value" },
      { name: "ᴅᴘ ᴀᴡᴏ & ᴛᴘᴏ ʙᴀᴛᴄʜ", value: "token_value" },
      { name: "ᴅᴘ ᴄᴏᴍʙᴏ ʙᴀᴛᴄʜ", value: "token_value" }
    ]
  },
  //add all your tokens or leave blank add batch name and token values.
  { name: "Batch_name", value: "token_value" },
  { name: "batch2_name", value: "token_valu" },
  { name: "batch3_name", value: "token_value" },
  { name: "batch4_name", value: "token_value" },
  { name: "batch5_name", value: "token_value" },
  { name: "batch6_value", value: "token_value" },
  { name: "batch7_name", value: "token_value" },
  { name: "batch8_name", value: "token_value" },
  { name: "batch9_name",
value: "token_value"},
  { name: "batch10_name",
value: "token_value"},
  { name: "batch11_name",
value: "token_value" },
  { name: "batch12_name",
   value: "token_value" },
  { name: "batch13_name",
  value: "token_value"}
];

// add blocked users chat id or leave blank , these are demo not chat ids.
const bannedUsers = [1234567890,9876543210]; 

bot.on("message", (msg) => {
  if (bannedUsers.includes(msg.chat.id)) {
    bot.sendMessage(msg.chat.id, "🚫 You are blocked! You cannot use this bot.");
    return; 
  }

  bot.emit("allowed_message", msg);
});

// add your channel or group 
bot.on("allowed_message", (msg) => {
  if (msg.text === "/start") {
    bot.sendMessage(msg.chat.id, 
      "👋 ʜᴇʏ ᴀꜱᴘɪʀᴀɴᴛꜱ! 🚀 ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ʏᴏᴜʀ ᴜʟᴛɪᴍᴀᴛᴇ ʜᴜʙ ꜰᴏʀ ɢᴏᴠᴛ. ᴊᴏʙ ᴘʀᴇᴘᴀʀᴀᴛɪᴏɴ—ꜱᴛᴀʏ ꜰᴏᴄᴜꜱᴇᴅ, ꜱᴛᴀʏ ᴀʜᴇᴀᴅ! 📚💪\nꜰᴏʀ ᴄᴏɴᴛᴀᴄᴛ 📬 ᴜꜱᴇ /help . \nᴊᴏɪɴ ᴏᴜʀ ɢʀᴏᴜᴘ ꜰᴏʀ ᴜᴘᴅᴀᴛᴇꜱ ♻️\n\n[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)", 
      {
        parse_mode: "Markdown",
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [
            [{ text: "JOIN CHANNEL 🚀", url: GROUP_LINK }],
            [{ text: "GET TOKEN 🛠️", callback_data: "GET_TOKEN" }]
          ]
        }
      }
    );
  }
});

// Handle the "Get Token" button click
bot.on("callback_query", (query) => {
  if (bannedUsers.includes(query.message.chat.id)) {
    bot.answerCallbackQuery(query.id, { text: "🚫 You are blocked!", show_alert: true });
    return; // Stop execution for blocked users
  }

  if (query.data === "GET_TOKEN") {
    bot.sendMessage(query.message.chat.id, "⚠️ USE THIS COMMAND TO GET YOUR TOKEN. /token");
  }
});

// /token command - Show Rwa tokens (2 per row)
bot.onText(/\/token/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  let inlineKeyboard = [];
  let row = [];

  tokens.forEach((token, index) => {
    row.push({ text: token.name, callback_data: `TOKEN_${index}` });

    if (row.length === 2 || index === tokens.length - 1) {
      inlineKeyboard.push(row);
      row = [];
    }
  });
// add your channel or group 
  bot.sendMessage(chatId, "📌 *ʜᴇʀᴇ ᴀʀᴇ ᴀʟʟ ᴀᴠᴀɪʟᴀʙʟᴇ ᴛᴏᴋᴇɴꜱ ꜰᴏʀ ʏᴏᴜ\nᴇᴠᴇʀʏᴛʜɪɴɢ ɪꜱ 1000% ꜰʀᴇᴇ ʙʏ ᴍᴀᴅxᴀʙʜɪ*\n[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)", {
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard },
  });
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;

  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(query.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  const index = parseInt(query.data.replace("TOKEN_", ""), 10);
  const selectedToken = tokens[index];

  if (!selectedToken) return;

  if (selectedToken.subTokens) {
    let subButtons = selectedToken.subTokens.map((sub, i) => [{ 
      text: sub.name, callback_data: `SUBTOKEN_${index}_${i}` 
    }]);

    bot.sendMessage(chatId, "🔽 Choose a category:", {
      reply_markup: { inline_keyboard: subButtons },
    });
  } else {
    await bot.sendMessage(chatId, `ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ᴛᴏᴋᴇɴ 🔑 ꜰᴏʀ\n*${selectedToken.name}*`, { parse_mode: "Markdown" });

    setTimeout(() => {
      bot.sendMessage(chatId, `\`\`\`\n${selectedToken.value}\n\`\`\`WORKING✅  [𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)`, { parse_mode: "MarkdownV2",disable_web_page_preview: true, });
    }, 200);
  }
});

bot.on("callback_query", async (query) => {
  if (!query.data.startsWith("SUBTOKEN_")) return;

  const chatId = query.message.chat.id;

  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(query.id, { text: "🚫 You are a blocked!", show_alert: true });
  }

  const parts = query.data.split("_");
  const mainIndex = parseInt(parts[1], 10);
  const subIndex = parseInt(parts[2], 10);

  const selectedSubToken = tokens[mainIndex].subTokens[subIndex];

  await bot.sendMessage(chatId, `🔑 ʜᴇʀᴇ ɪꜱ ʏᴏᴜʀ ᴛᴏᴋᴇɴ ꜰᴏʀ \n*${selectedSubToken.name}*`, { parse_mode: "Markdown" });

  setTimeout(() => {
    bot.sendMessage(chatId, `\`\`\`\n${selectedSubToken.value}\n\`\`\`[𝘼𝙎 𝙈𝙐𝙇𝙏𝙸𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)`, { parse_mode: "MarkdownV2",disable_web_page_preview: true, });
  }, 200);
});

const ADMIN_CHAT_ID = "your_chatid"; // Replace with your actual admin chat ID

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  const helpMessage = `
⚙️ *Bot Commands Help* ⚙️

🔹 /start - Begin interaction with the bot  
🔹 /token - Get your access tokens  
🔹 /help - View help information  
🔹 /apk - Get the apk files  
🔸 /cwtoken - Get Career Will Token  
🔸 /rgtoken - Get RG Vikramjeet Token  

[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)  

Bot 🤖 is still under development. If you have any issues, please contact support 🔥.
  `;

  bot.sendMessage(chatId, helpMessage, {
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "📞 Contact Admin", callback_data: "CONTACT_ADMIN" }]
      ]
    }
  });
});

// Handle the "Contact Admin" button click
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(query.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (query.data === "CONTACT_ADMIN") {
    bot.sendMessage(chatId, "📩 Please share your contact with the admin by clicking the button below.", {
      reply_markup: {
        keyboard: [
          [{ text: "📲 Share Contact", request_contact: true }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    });
  }
});

// Handle contact sharing and send to admin
bot.on("message", (msg) => {
  if (msg.contact) {
    const contactInfo = `📞 *New Contact Request*\n👤 Name: ${msg.contact.first_name} ${msg.contact.last_name || ""}\n📱 Phone: ${msg.contact.phone_number}\n🆔 User ID: ${msg.from.id}`;

    // Send contact info to the admin
    bot.sendMessage(ADMIN_CHAT_ID, contactInfo, { parse_mode: "Markdown" });

    bot.sendMessage(msg.chat.id, "✅ Your contact has been successfully shared with the admin. The admin will get back to you soon.", {
      reply_markup: { remove_keyboard: true }
    });
  }
});
// send you apk file to your bot and then forward it to @jsondumpbot, it will give you your file id.
const apkFiles = {
  apk1: { name: "Rojgar with ankit ", file_id: "apk_file_id" },
  apk2: { name: " carrer will", file_id: "apk_file_id" },
  apk3: { name: "classplus", file_id: "apk_file_id" },
  apk4: { name: "EDUCATION BABA", file_id: "apk_file_id" },
  apk5: { name: "KGS", file_id:
"apk_file_id" },
  apk6: { name: "PW", file_id: "apk_file_id" },
  apk7: { name: "RG VIKRAMJEET", file_id: "apk_file_id" },
  apk8: { name: "VIDHYAKUL", file_id: "apk_file_id" },
  apk9: { name: "NEXT TOPPERS",
 file_id: "apk_file_id"}
};

bot.onText(/\/apk/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📥 RWA", callback_data: "apk1" },
          { text: "📥 CLASS PLUS", callback_data: "apk2" }
        ],
        [
          { text: "📥 CAREER WILL", callback_data: "apk3" },
          { text: "📥 EDUCATION BABA", callback_data: "apk4" }
        ],
        [
          { text: "📥 KHAN GS", callback_data: "apk5" },
          { text: "📥 PHYSICS WALLAH", callback_data: "apk6" }
        ],
        [
          { text: "📥 RG VIKRAMJEET(update)", callback_data: "apk7" },
          { text: "📥 VIDHYAKUL", callback_data: "apk8" },
        ],
        [
          { text: "📥 NEXT TOPPERS", callback_data: "apk9" },
        ]
      ]
    }
  };

  bot.sendMessage(chatId, "Select an APK to download:", keyboard);
});

// Handle button clicks
bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(callbackQuery.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (apkFiles[data]) {
    bot.sendDocument(chatId, apkFiles[data].file_id, {
      caption: `APK NAME - ${apkFiles[data].name}\n\n[𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)`,
      parse_mode: "Markdown"
    });
  }
});




// List of CW Tokens (Button Name & Actual Value)
const cwTokens = {
  token1: { name: "MATHS FOUNDATION", value: "token_value", image_id: "image_file_id" },
  token2: { name: "PEDAGODY+2", value: "token_value", image_id: "image_file_id" },
  token3: { name: "NTPC+ALP+2", value: "token_value", image_id: "image_file_id" },
  token4: { name: "STATIC+2", value: "token_value", image_id:"image_file_id"},
  token6: { name: "ENGLISH FOUNDATION+4", value: "token_value",image_id:"image_file_id"},
  token7: { name: "CURRENT AFFAIRS",value: "token_value", image_id: "image_file_id"},
  token8: {name: "GS + MATHS", value: "token_value", image_id: "image_file_id"},
  token9: {name: "REAS+CGL MAINS+MATH+ENGLIS+GD+9", value: "token_value", image_id: "image_file_id"}
};

// Command: /cwtoken
bot.onText(/\/cwtoken/, (msg) => {
  const chatId = msg.chat.id;

  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }
// you can modify text as you want.
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📜 MATHS FOUNDATION", callback_data: "token1" },
        { text: "📜 PEDAGODY+2", callback_data: "token2" }],
        [{ text: "📜 NTPC+ALP+2", callback_data: "token3" },
        {text: "📜 STATIC+2", callback_data: "token4"}],
        [{text: "📜 ENGLISH FOUNDATION+4", callback_data: "token6"},
        {text: "📜 CURRENT AFFAIRS", callback_data: "token7"}],
        [{text: "📜 GS + MATHS", callback_data: "token8"}],
        [{text: "👁️ REASONING+ENGLISH+GD+CGL+9", callback_data:"token9"}]
      ]
    }
  };

  bot.sendMessage(chatId, "SELECT A TOKEN TO VIEW IMAGE 🔮:", keyboard);
});

// Handle button clicks
bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(callbackQuery.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (cwTokens[data]) {
    // Send Image First
    bot.sendPhoto(chatId, cwTokens[data].image_id, {
      caption: `HERE IS THE PREVIEW FOR \n*${cwTokens[data].name}*`,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "💡 SEE TOKEN", callback_data: `get_${data}` }]
        ]
      }
    });
  } else if (data.startsWith("get_")) {
    const tokenKey = data.replace("get_", "");
    if (cwTokens[tokenKey]) {
      bot.sendMessage(chatId, `*${cwTokens[tokenKey].name}*\n\`\`\`\n${cwTokens[tokenKey].value}\n\`\`\`WORKING✅   [𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)`, {
        parse_mode: "Markdown", disable_web_page_preview: true,
      });
    }
  }
});


// rg Vikramjeet tokens
const rgTokens = {
  rgtoken_1: { name: "MATHS SPECIAL", value: "token_value", image_id: "image_file_id" },
  rgtoken_2: { name: "MATH + HINDI", value: "token_value", image_id: "image_file_id" },
  rgtoken_3: { name: "MATH SPECIAL 2.O", value: "token_value", image_id: "image_file_id" }
};

// Command: /rgtoken
bot.onText(/\/rgtoken/, (msg) => {
  const chatId = msg.chat.id;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.sendMessage(chatId, "🚫 You are blocked! You cannot use this bot.");
  }

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📜 MATHS SPECIAL", callback_data: "rgtoken_1" }],
        [{ text: "📜 MATH + HINDI", callback_data: "rgtoken_2" }],
        [{ text: "📜 MATH 2.O", callback_data: "rgtoken_3" }]
      ]
    }
  };

  bot.sendMessage(chatId, "SELECT A TOKEN TO VIEW IMAGE 💡:", keyboard);
});

// Handle button clicks
bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // Check if user is banned
  if (bannedUsers.includes(chatId)) {
    return bot.answerCallbackQuery(callbackQuery.id, { text: "🚫 You are blocked!", show_alert: true });
  }

  if (rgTokens[data]) {
    // Send Image First
    bot.sendPhoto(chatId, rgTokens[data].image_id, {
      caption: `HERE IS THE PREVIEW FOR \n*${rgTokens[data].name}*`,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔍 SEE TOKEN", callback_data: `get_${data}` }]
        ]
      }
    });
  } else if (data.startsWith("get_")) {
    const tokenKey = data.replace("get_", "");
    if (rgTokens[tokenKey]) {
      bot.sendMessage(chatId, `*${rgTokens[tokenKey].name}*\n\`\`\`\n${rgTokens[tokenKey].value}\n\`\`\`WORKING✅   [𝘼𝙎 𝙈𝙐𝙇𝙏𝙄𝙑𝙀𝙍𝙎𝙀](https://t.me/asmultiverse_token)`, {
        parse_mode: "Markdown", disable_web_page_preview: true,
      });
    }
  }
});

// Keep bot alive with Express (For UptimeRobot)
app.get("/", (req, res) => res.send("Bot is running!"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//bot by @popeye68