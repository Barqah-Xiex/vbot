const { default: axios } = require("axios");

const cmd = `base64enc`; 
const args = `text`;
const category = `Encode & Decode`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    if(!isset(arg)) return nyarios(`mana textnya ?`)
    axios.get(`http://xiex.my.id/api/tools/base64?apikey=${config.apikey}&mode=encode&text=${encodeURIComponent(arg)}`).then(({data: {Barqah}}) => nyarios(Barqah))
}
module.exports = {cmd,args,category,message};