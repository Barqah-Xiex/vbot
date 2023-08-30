const { default: axios } = require("axios");

const cmd = `ceklimit`; 
const args = ``;
const category = `Limit`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey,limit} = config;
    const {isset,fs} = func

    
    

    const idlimit = Number(FileAda(`${dbdir(`limit`)+id}`,`${limit}`)).toFixed(0);

    nyarios(`Sisa Limit Ruangan Ini: *${idlimit} Point*`)



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