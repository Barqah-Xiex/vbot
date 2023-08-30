const axios = require("axios");

const cmd = `google`; 
const args = `search|:|totalpage`;
const category = `Tools`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner,nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset, fs,sleep} = func
    
    if(!isset(arg)) return nyarios(`apa yang mau dicari`);
    const [search,page] = arg.split(`|:|`);
    axios.post(`http://xiex.my.id/api/search/google`,{search,page,apikey}).then(({data:{Barqah}}) => {
       nyarios([...Barqah].map(({title,url,description}) => `*${title}*\n_${url}_\n${description}`).join(`\n\n`))
    })
}
module.exports = {cmd,args,category,message};