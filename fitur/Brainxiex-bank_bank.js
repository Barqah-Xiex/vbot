const { default: axios } = require("axios");

const cmd = `bank`; 
const args = ``;
const category = `Bank`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`)).toFixed(0);
    const bank =  Number(FileAda(`${dbfile(`bank`)}`,`0`)).toFixed(0);
    
   
   sendMessage(id, {text: `Dompet:\n*${money}bx*\n\nSaldo:\n*${bank}bx*\n\n*${Prefix}banktarik* jumlah\n*${Prefix}bankkirim* jumlah`},{quoted: m})



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