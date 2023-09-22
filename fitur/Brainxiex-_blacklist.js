const { default: axios } = require("axios");
const id = `Anti-Terblacklist`;
async function action(sock, m, store) {
    const {sendMessage, config,resize ,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    

    dbdir(`blacklist`);
    if(!fs.existsSync(dbdir(`blacklist/${id}`)+m.sender)) return;
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
    console.log(`ada`);
    await nyarios(`*[Blacklist] Terdeteksi*\nkamu terblacklist\n\n*Sujud Dulu Ke @${`${fs.load(dbdir(`blacklist/${id}`)+m.sender)}`.replace(/\n/g,``)}*`)
    await sleep(1000);
    await sock.kick(id,m.sender)
    
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
