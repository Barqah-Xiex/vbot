const axios = require("axios");

const cmd = `play`; 
const args = `music`;
const category = `Downloader`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner,nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset, fs,sleep} = func
    
    if(!isset(arg)) return nyarios(`apa yang mau dicari`)
    const mek = {chat: id,...await nyarios(`Sedang Mencari....`)}
    console.log(mek)
    axios.post(`http://xiex.my.id/api/search/yts`,{apikey,search: arg}).then(async({data:{Barqah:{video}}}) => {
        const res = video[Math.floor(Math.random()*video.length)];
        sock.editMessage(mek,`*${res.title}*\n\n${res.link}`);
        console.log(res)
        const {data: {Barqah:{audio:t,title,thumb}}} = await axios.post(`http://xiex.my.id/api/downloader/youtube`,{apikey,url: res.link});
        sock.editMessage(mek,`Mengirim....\n*${res.title}*`);
        sock.sendMessage(id,{audio: {url: t}, ptt: false},{quoted: m}).then(v => {
            sock.editMessage(mek,`*Memutar (${res.title})...*\n\nUlangi untuk menghasilkan result lain`);
        });
    })
}
module.exports = {cmd,args,category,message};