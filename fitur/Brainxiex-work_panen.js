const { default: axios } = require("axios");

const cmd = `panen`; 
const args = ``;
const category = `Work`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const kebun =  JSON.parse(FileAda(`${dbfile(`kebun`)}`,`[]`));
    const inv =  JSON.parse(FileAda(`${dbfile(`inv`)}`,`[]`));
    const [pekerjaan, WaktuDaftar] =  JSON.parse(FileAda(`${dbfile(`pekerjaan`)}`,`["pengangguran",${new Date().getTime()}]`));

    const now = new Date();
    now.tm = now.getTime();
    now.d = now.getSeconds();
    now.m = now.getMinutes();
    now.j = now.getHours();
    now.h = now.getDate();
    now.b = now.getMonth();
    now.t = now.getFullYear();

    const isTempatRoleplay = id == `628979059392-1614471575@g.us`;
    const isTempatGame = id == "628979059392-1614471493@g.us" || isTempatRoleplay;
    const isTempatUtama = id == `628979059392-1594298364@g.us` || id == `628979059392-1606031648@g.us` || isTempatGame;

    if(!isTempatGame) return nyarios(`untuk bekerja hanya bisa di tempat game!\n\n*${Prefix}listgrup* untuk melihat daftar grup !`);


    if (pekerjaan !== `farmer`) return nyarios(`anda bukan farmer`);

    const newKebun = [];
    const keinv = [];
    kebun.forEach(([v, t]) => {
        if(now.tm >= t){
            inv.push(v);
            keinv.push(v);
        }else{
            newKebun.push([v,t]);
        }
    })
    fs.save(`${dbfile(`kebun`)}`,JSON.stringify(newKebun));
    fs.save(`${dbfile(`inv`)}`,JSON.stringify(inv))
    nyarios(`yang telah di panen adalah:\n${keinv.join(`\n`)}\n\nTotal: ${keinv.length} tanaman`)





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
