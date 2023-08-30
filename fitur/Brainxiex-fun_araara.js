const { default: axios } = require("axios");

const cmd = `araara`; 
const args = ``;
const category = `Sound`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset} = func
    
    
    await sock.sendMessage(id, {
        audio: { url: `http://xiex.my.id/api/${apikey}/ara-ara` },
        ptt: true, mimetype: sock.Baileys.getDevice(m.id) == 'ios' ? 'audio/mpeg' : 'audio/mp4',
    });
}
module.exports = {cmd,args,category,message};