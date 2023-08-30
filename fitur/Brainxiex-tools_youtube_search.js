const axios = require("axios");

const cmd = `yts`; 
const args = `search`;
const category = `Tools`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner,nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset, fs,sleep} = func
    
    if(!isset(arg)) return nyarios(`apa yang mau dicari`)
    axios.post(`http://xiex.my.id/api/search`,{search:arg, apikey}).then(({data:{Barqah}}) => {
        Object.keys(Barqah).map(v => `*[ ${v} ]*\n${Barqah[v].map(({title,link}) => `*${title}*\n${link}`).join(`\n\n\n\n`)}`).join("\n\n\n")
    })
}
module.exports = {cmd,args,category,message};