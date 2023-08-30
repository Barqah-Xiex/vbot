const axios = require("axios");

const cmd = `tt`; 
const args = `tiktok-link`;
const category = `Downloader`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset} = func
    
    if(isset(arg)){
        const ar = `${arg}`;
        const {data:{Barqah:{title,url,thumb}}} = await axios.get(`http://xiex.my.id/api/downloader/tiktok?url=${ar}&apikey=${apikey}`);
        sendMessage(id,{video: {url}, caption: `*${title}*\n\napi by xiex.my.id`}, {quoted: m})
    }else{
        sendMessage(id, {text: `masukan linknya`},{quoted:m})
    }
}

module.exports = {cmd,args,category,message};