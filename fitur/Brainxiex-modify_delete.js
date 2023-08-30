const { default: axios } = require("axios");

const cmd = `del`; 
const args = `(hapus pesan)`;
const category = `Modify`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset} = func
    
    
    sock.deleteMessage(m.quoted);
}
module.exports = {cmd,args,category,message};