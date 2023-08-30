const { default: axios } = require("axios");

const cmd = `command`; 
const args = `input command`;
const category = `Work`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs,random} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`));
    const xp =  Number(FileAda(`${dbfile(`xp`)}`,`0`));
    const level =  Number(FileAda(`${dbfile(`level`)}`,`0`));
    const inv =  JSON.parse(FileAda(`${dbfile(`inv`)}`,`[]`));
    const [pekerjaan, WaktuDaftar] =  JSON.parse(FileAda(`${dbfile(`pekerjaan`)}`,`["pengangguran",${new Date().getTime()}]`));
    
    const parseMention = (text = '') => [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
    const mentioned = [].concat(parseMention(body), (m.mentionedJid || []), (m.quoted ? [m.quoted.sender] : []));

    const isTempatRoleplay = id == `628979059392-1614471575@g.us`;
    const isTempatGame = id == "628979059392-1614471493@g.us" || isTempatRoleplay;
    const isTempatUtama = id == `628979059392-1594298364@g.us` || id == `628979059392-1606031648@g.us` || isTempatGame;

    if(!isTempatGame) return nyarios(`untuk bekerja hanya bisa di tempat game!\n\n*${Prefix}listgrup* untuk melihat daftar grup !`);

    if(pekerjaan !== `penyihir`) return nyarios(`anda bukan penyihir`);
    
    const [command,jumlah,tag] = arg.split(" ");

    switch (`${command}`) {
        case `tambihkeunpangalaman`:
            if(!isset(jumlah) || isNaN(Number(jumlah))) return nyarios(`masukan jumlah xpnya`);
            if(Number(jumlah) <= 0 || Number(jumlah) > money) return myarios(`uang tidak cukup, pastikan pelangganmu membayar terlebih dahulu`);
            const tag = mentioned[0];
            if(!isset(tag)) return nyarios(`tag orangnya`);
            const filepathxpdia = `${dbdir(`xp`)}${tag}`; 
            const xpdia = Number(FileAda(filepathxpdia,`0`));
            fs.save(dbfile(`money`),`${money-Number(jumlah)}`);
            fs.save(filepathxpdia,`${xpdia + Number(jumlah)}`);
            nyarios(`mantra berhasil !\nkamu menambah xp @${tag.split("@")[0]}`)
            break;
    
        default:
            nyarios(`daftar mantra:\n*tambihkeungpangalaman*\nBerguna untuk menambahkan xp untuk orang lain!\n${mimiti}command tambihkeunpangalaman 10 @tagorangnya\n\n*Comming Soon*\nMantra selanjutnya akan datang !`)
            break;
    }
    




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