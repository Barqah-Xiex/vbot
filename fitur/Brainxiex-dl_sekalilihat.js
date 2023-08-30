const { default: axios } = require("axios");

const cmd = `lihatlagi`; 
const args = ``;
const category = `Downloader`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner,nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset} = func
    
    if(m.quoted){
        m.quoted.copyNForward(m.chat, false, {readViewOnce: true}, {quoted: m}).catch(_ => nyarios(`Maybe It's Opened`,console.log(_)))
    }else{
        sendMessage(id, {text: `mana ? coba reply tampilah sekalilihatnya !`},{quoted:m})
    }
}
module.exports = {cmd,args,category,message};