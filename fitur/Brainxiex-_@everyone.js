const { default: axios } = require("axios");
const id = `@everyone`;
async function action(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func, db} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,Nomor_Owner,apikey} = config;
    const {isset,fs} = func

    const isVIP = Number(FileAda(`${dbfile(`vip`)}`,`${new Date().getTime()}`)) > new Date().getTime();

    
    
    
    
    if(!body.includes(`@everyone`)) return;
    if(!m.chat.endsWith("g.us")) return nyarios(`hanya bisa di gunakan di grup`);
    const {participants,subject,owner,desc} = await sock.groupMetadata(m.chat);
    const isAdmin = getGroupAdmins(participants).includes(m.sender);
    function getGroupAdmins (participants) {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
     }
    if(!(isVIP||isAdmin)) return nyarios(`hanya di gunakan untuk pengguna VIP / Admin Grup`);
    sendMessage(m.chat, { text : body.replace(/@everyone/g,`*@everyone*`), mentions: participants.map(a => a.id)}, { quoted: m })
   function dbdir(a) {return dir("./database/" + a + "/")}
    function dbfile(a) {return dbdir(a) + m.sender}
    function dir(nama) {
        if (!fs.existsSync(nama)) {
            fs.mkdirSync(nama);
        }
        return nama
    }
    function FileAda(a,b){
        if(fs.existsSync(a)){
            return `${fs.load(a)}`
        }else{
            return b
        }
    }
    
}
module.exports = {id,action};