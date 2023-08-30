const { default: axios } = require("axios");
const { argv } = require("yargs");

const cmd = `ytmp3`; 
const args = `youtube-link`;
const category = `Downloader`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset} = func
    
    if(isset(arg)){
        const url = `${arg}`;
        const mek = {chat: id,...await nyarios(`Sedang Menghubungkan ke http://xiex.my.id/api/downloader/youtube ....`)}
        const {data: {Barqah:{audio:t,title,thumb}}} = await axios.post(`http://xiex.my.id/api/downloader/youtube`,{apikey,url});
        sock.editMessage(mek,`Mengirim....\n*${title}*`);
        sock.sendMessage(id,{audio: {url: t}, mimetype: 'audio/mp4', ptt: false},{quoted: m}).then(v => {
            sock.editMessage(mek,`*Memutar (${title})...*`);
        });
    }else{
        sendMessage(id, {text: `masukan linknya`},{quoted:m})
    }
}
module.exports = {cmd,args,category,message};