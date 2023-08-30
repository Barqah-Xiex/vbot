const { default: axios } = require("axios");

const cmd = `bikinvoucher`; 
const args = `nominal`;
const category = `Economy`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`)).toFixed(0);
    const [pekerjaan, WaktuDaftar] =  JSON.parse(FileAda(`${dbfile(`pekerjaan`)}`,`["pengangguran",${new Date().getTime()}]`));
    const role =  (FileAda(`${dbfile(`role`)}`,`${pekerjaan}`));
    
    const parseMention = (text = '') => [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    const mentioned = [].concat(parseMention(body), (m.mentionedJid || []), (m.quoted ? [m.quoted.sender] : []))
    
    const nominal = Number(arg.split(` `)[0]);

    if(!isset(arg)) return nyarios(`masukin nominalnya`);
    if(isNaN(nominal)||nominal == NaN) return nyarios(`masukan nominal dengan benar !!!`);
    if(nominal <= 0) return nyarios(`gak bisa kurang dari sama dengan 0`);
    if(nominal > 100_000) return nyarios(`gak bisa lebih dari 100k`);
    if(nominal > money) return nyarios(`uang kurang`);

    fs.save(`${dbfile(`money`)}`,`${money - nominal}`);

    const code = sock.number2string(new Date().getTime());
    fs.save(`${dbdir(`voucher`)+code}`,`${nominal}`);
    nyarios(`${Prefix}claim ${code}`)


    

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