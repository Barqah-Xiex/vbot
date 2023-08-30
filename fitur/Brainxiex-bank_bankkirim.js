const { default: axios } = require("axios");

const cmd = `bankkirim`; 
const args = `jumlah`;
const category = `Bank`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    
    const input = arg.replace(/[^0-9]/g, '');
    if(isset(input)){
        if(Number(FileAda(`${dbfile(`money`)}`,`0`)) < Number(input)) return sendMessage(id, {text: `Uang Tidak Cukup`},{quoted: m})
        if(Number(input) <= 0) return sendMessage(id, {text: `Input Tidak Bisa Kurang Dari Sama Dengan 0`},{quoted: m});
        if(Number(input) == NaN) return sendMessage(id, {text: `Input Harus Berupa nomor`},{quoted: m})
        fs.save(`${dbfile(`money`)}`, `${Number(FileAda(`${dbfile(`money`)}`,`0`)) - Number(`${input}`)}`);
        fs.save(`${dbfile(`bank`)}`, `${Number(FileAda(`${dbfile(`bank`)}`,`0`)) + Number(`${input}`)}`);
        sendMessage(id, {text: `Berhasil dimasukan ke Bank sebesar: *${input}bx*`},{quoted: m})
    }else{
        sendMessage(id, {text: `Berapa jumlahnya ?`},{quoted: m})

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