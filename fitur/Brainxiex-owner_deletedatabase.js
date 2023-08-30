const { default: axios } = require("axios");

const cmd = `deletedatabase`; 
const args = ``;
const category = `Owner`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const parseMention = (text = '') => [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    const mentioned = [].concat(parseMention(body), (m.mentionedJid || []), (m.quoted ? [m.quoted.sender] : []))

    if(!isOwner) return nyarios(`kamu bukan Owner`);
    let terhapus = [];
    fs.dir(`./database/`).forEach(db => {
        if(fs.cek(`./database/${db}/${mentioned[0]}`)){
            fs.unlinkSync(`./database/${db}/${mentioned[0]}`);
            terhapus.push(`./database/${db}/${mentioned[0]}`)
        }
    });
    nyarios(`yang terhapus:\n${terhapus.join(`\n`)}`)
}
module.exports = {cmd,args,category,message};

