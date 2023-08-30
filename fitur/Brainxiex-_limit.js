const { default: axios } = require("axios");
const id = `ai_terus`;
async function action(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func, db} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,Nomor_Owner,apikey,limit} = config;
    const {isset,fs} = func

    const isTempatRoleplay = id == `628979059392-1614471575@g.us`;
    const isTempatGame = id == "628979059392-1614471493@g.us" || isTempatRoleplay;
    const isTempatUtama = id == `628979059392-1594298364@g.us` || id == `628979059392-1606031648@g.us` || isTempatGame;

    if(isTempatUtama) return;

    const cmd = body.slice(1).trim().split(' ').shift().toLowerCase()
    const awalan = body.slice(0).trim().split(' ').shift().toLowerCase()

    
    if(!(Object.keys(sock.Command).includes(cmd)||Object.keys(sock.Command).includes(awalan))) return;
    const idlimit = Number(FileAda(`${dbdir(`limit`)+id}`,`${limit}`)).toFixed(0);
    fs.save(dbdir("limit")+id, `${idlimit - 1}`);
    if((idlimit <= 0) && !((cmd+awalan).includes(`limit`))) {
        nyarios(`limit habis gunakan ${Prefix}addlimit jumlah`);
        return `return`;
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
module.exports = {id,action};