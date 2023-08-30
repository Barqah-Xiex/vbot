const { default: axios } = require("axios");

const cmd = `topup`; 
const args = `nominal`;
const category = `Owner`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

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
    const max_inv =  Number(FileAda(`${dbfile(`max_inv`)}`,`10`));
    const max_kebun =  Number(FileAda(`${dbfile(`max_kebun`)}`,`10`));
    
    const parseMention = (text = '') => [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    const mentioned = [].concat(parseMention(body), (m.mentionedJid || []), (m.quoted ? [m.quoted.sender] : []))
    
    const nominal = Number(arg.split(` `)[0]);

    if(!isset(arg)) return nyarios(`masukin nominalnya`);
    if(!isOwner) return nyarios(`Kamu Bukan Owner`);
    
    fs.save(`${dbfile(`money`)}`,`${money + nominal}`);
    nyarios(`*Sukses* mentransfer *${nominal}bx* dari *@Server* ke *@${m.nomor}*`)


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