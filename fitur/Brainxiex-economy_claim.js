const { default: axios } = require("axios");

const cmd = `claim`; 
const args = `code`;
const category = `Economy`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`)).toFixed(0);
    
    if(!isset(arg)) return nyarios(`mana codenya ?`)
    if(!fs.cek(`${dbdir(`voucher`)+arg}`)) return nyarios(`Code Voucher *${arg}* Sudah di Ambil Atau Kadaluarsa`)
    const isinya = Number(`${fs.load(dbdir(`voucher`)+arg)}`);
    try{
        fs.del(dbdir(`voucher`)+arg);
    }catch(e){
        console.error(e)
    }
    fs.save(`${dbfile(`money`)}`,`${money + isinya}`);
    nyarios(`Code Voucher *${arg}* Sudah di Ambil Oleh *@${m.nomor}* Sebesar *${isinya}bx*`)

    


    

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