const { default: axios } = require("axios");
const id = `ILIMIT_CHAT`;
async function action(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func, db} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,Nomor_Owner,apikey, limit_chat} = config;
    const {isset,fs} = func

    if(global?.glimit_chat[id] == limit_chat ) return nyarios(`tunggu beberapa saat !`)
    
    
}
module.exports = {id,action};