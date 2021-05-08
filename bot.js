require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const BOT_PREFIX = '!'
const MAKE_ME_MOD = 'make-me-mod'

client.on('ready', () => {
    console.log('Bot is ready')
})

client.on('messageDelete', msg => {
    msg.channel.send('Stop deleting your messages.')
})

client.on('message', msg => {
    if(msg.content == 'I am friends with Rashaad.') {
        msg.react('👽')
    }

    if(msg.content === `${BOT_PREFIX}${MAKE_ME_MOD}`) {
        //msg.channel.send('pong') //to just display the message
        //msg.reply('pong') //to tag the user
        modUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("840588116246396970")
}

client.login(process.env.BOT_TOKEN)