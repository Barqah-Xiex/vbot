const { default: axios } = require("axios");

const cmd = `myinfo`; 
const args = ``;
const category = `Information`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const isVIP = Number(FileAda(`${dbfile(`vip`)}`,`${new Date().getTime()}`)) > new Date().getTime();
    const ppimg = await sock.profilePictureUrl(m.sender, "image").catch(v => `http://xiex.my.id/media/1655612010102undefined.png`);
    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`));
    const bank =  Number(FileAda(`${dbfile(`bank`)}`,`0`));
    const xp =  Number(FileAda(`${dbfile(`xp`)}`,`0`));
    const level =  Number(FileAda(`${dbfile(`level`)}`,`0`));
    const kebun =  JSON.parse(FileAda(`${dbfile(`kebun`)}`,`[]`));
    const inv =  JSON.parse(FileAda(`${dbfile(`inv`)}`,`[]`));
    const umpan =  Number(FileAda(`${dbfile(`umpan`)}`,`0`));
    const [pekerjaan, WaktuDaftar] =  JSON.parse(FileAda(`${dbfile(`pekerjaan`)}`,`["pengangguran",${new Date().getTime()}]`));
    const role =  (FileAda(`${dbfile(`role`)}`,`${pekerjaan}`));
    const max_inv =  Number(FileAda(`${Number(`${dbfile(`max_inv`)}`)*10}`,`10`));
    const max_kebun =  Number(FileAda(`${dbfile(`max_kebun`)}`,`10`));
    const health =  Number(FileAda(`${dbfile(`health`)}`,`100`));
    const max_health =  Number(FileAda(`${dbfile(`max_health`)}`,`100`));
    const hunger =  Number(FileAda(`${dbfile(`hunger`)}`,`100`));
    const max_hunger =  Number(FileAda(`${dbfile(`max_hunger`)}`,`100`));
    const energy =  Number(FileAda(`${dbfile(`energy`)}`,`100`));
    const max_energy =  Number(FileAda(`${dbfile(`max_energy`)}`,`100`));


const text = `┌━━֍  〔 🧠 ${m.pushName} 🧠 〕
│
│ Nama: ${m.pushName}
│ Nomor: ${m.nomor}
│ Tag: @${m.nomor}
│ Uang: ${money}bx
│ Umpan: ${umpan}
│ 
│ Bank: ${bank}
│ Level: (${level}) ${xp}/${(level+1)*100}
│ Ransel: ${inv.length}/${max_inv}
│ Pekerjaan: ${pekerjaan[0]}
│ 
│ Health: ${health}/${max_health}
│ Hunger: ${hunger}/${max_hunger}
│ Energy: ${energy}/${max_energy}
│ 
└━━֍`
nyarios(text);
    


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
module.exports = {cmd,args,category,message};