const { default: axios } = require("axios");
const id = `anti wa.settings`;
async function action(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    
    if(!body.toLocaleLowerCase().includes(`wa.me/settings`)) return;

    const {participants,subject} = await sock.groupMetadata(m.chat)
    
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    function getGroupAdmins (participants) {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
     }
    if(!getGroupAdmins(participants).includes(sock.user.jid)) return;
    await nyarios(`*[ANTI WAKU/SETTINGS] Terdeteksi*\nkamu terdetek menulis link bug`)
    await sleep(1000);
    await sock.deleteMessage(m);

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