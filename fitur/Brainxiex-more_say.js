const { default: axios } = require("axios");

const cmd = `say`; 
const args = `text`;
const category = `More`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    sendMessage(id,{text:arg})
}
module.exports = {cmd,args,category,message};
