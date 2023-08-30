const { default: axios } = require("axios");

const cmd = `watak`; 
const args = `nama`;
const category = `Fun`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    axios.get(`http://xiex.my.id/api/random/watak?apikey=APIKEY`).then(({data: {Barqah}}) => nyarios(`wataknya adalah ${Barqah}`))
}
module.exports = {cmd,args,category,message};