const { default: axios } = require("axios");
const id = `Anti-Linkgrup`;
async function action(sock, m, store) {
    const {sendMessage, config,resize ,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func
    
    
    if(!(body.toLocaleLowerCase().includes(`whatsapp.com`))) return;


    if(!fs.existsSync(dbdir(`antilinkgrup`)+id)) return;
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
    const isAdmin = getGroupAdmins(participants).includes(m.sender);
    if(isAdmin) return nyarios(`antilinkgrup sebenarnya aktif tetapi kamu admin !`)
    await nyarios(`*[ANTI LINK GRUP] Terdeteksi*`)
    await sleep(1000);
    await sock.deleteMessage(m)

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