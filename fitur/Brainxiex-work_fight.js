const { default: axios } = require("axios");

const cmd = `fight`; 
const args = ``;
const category = `Work`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

   
    const inv =  JSON.parse(FileAda(`${dbfile(`inv`)}`,`[]`));
    const [pekerjaan, WaktuDaftar] =  JSON.parse(FileAda(`${dbfile(`pekerjaan`)}`,`["pengangguran",${new Date().getTime()}]`));


    const isTempatRoleplay = id == `628979059392-1614471575@g.us`;
    const isTempatGame = id == "628979059392-1614471493@g.us" || isTempatRoleplay;
    const isTempatUtama = id == `628979059392-1594298364@g.us` || id == `628979059392-1606031648@g.us` || isTempatGame;

    if(!isTempatGame) return nyarios(`untuk bekerja hanya bisa di tempat game!\n\n*${Prefix}listgrup* untuk melihat daftar grup !`);


    if (pekerjaan !== `fighter`) return nyarios(`anda bukan fighter`);

    switch (arg) {
        case `attack`:
            if(!isset(global[m.sender]?.monster)) return nyarios(`gunakan terlebih dahulu ${Prefix}${cmd} search`)
            break;
    
        default:
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
