const Telegraf = require('telegraf');

const Bot = require('./Bot');

const bot = new Telegraf(Bot.TOKEN);

const NUM_OF_ROWS = 200;
const NUM_OF_BUTTONS = 1;

bot.command('buttonTest', (ctx) => {
  const buttons = Array(NUM_OF_ROWS)
    .fill()
    .map(() => Array(NUM_OF_BUTTONS).fill().map(() => Math.random().toFixed(3)));

  ctx.reply('привет, я вот тут развлекаюсь)', Telegraf.Markup
    .keyboard(buttons)
    .oneTime()
    .resize()
    .extra());
});

bot.startPolling();
