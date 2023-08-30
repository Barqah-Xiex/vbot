const { default: axios } = require("axios");

const cmd = `nulis`; 
const args = ``;
const category = `Tools`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    if(!isset(arg)) return nyarios(`mana tulisannya ?`);
    axios.post(`http://xiex.my.id/api/image/nulis`,{apikey,text:arg},{ responseType: 'arraybuffer' }).then(({data}) => {
        sendMessage(id,{image: Buffer.from(data,`utf-8`), caption: `api by xiex.my.id`})
    }).catch(e => nyarios(require(`util`).format(e)))

}
module.exports = {cmd,args,category,message};