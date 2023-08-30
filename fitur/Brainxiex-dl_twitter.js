const { default: axios } = require("axios");

const cmd = `twt`; 
const args = `twitter-link`;
const category = `Downloader`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset} = func
    
    if(isset(arg)){
        const url = `${arg}`;
        const {data: {Barqah:{url:link,title,thumb}}} = await axios.post(`http://xiex.my.id/api/downloader/twitter`,{apikey,url});
        sendMessage(id,{video: {url:link}, caption: `*${title}*\n\napi by xiex.my.id`}, {quoted: m})
    }else{
        sendMessage(id, {text: `masukan linknya`},{quoted:m})
    }
}
module.exports = {cmd,args,category,message};