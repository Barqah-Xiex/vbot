const { default: axios } = require("axios");

const id = `BOT`;
async function action(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    if(body.toLowerCase().includes(`bot`)) return nyarios(`iya gw bot, gunakan *${Prefix}menu*`)
}
module.exports = {id,action};