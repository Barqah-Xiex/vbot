const { default: axios } = require("axios");

const cmd = `judi`; 
const args = `nominal`;
const category = `Game`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`)).toFixed(0);
    const isVIP = Number(FileAda(`${dbfile(`vip`)}`,`${new Date().getTime()}`)) >= new Date().getTime();

    
    
    
    const nominal = Number(arg.split(` `)[0]);

    if(!isset(arg)) return nyarios(`masukin nominalnya`);
    if(isNaN(nominal)||nominal == NaN) return nyarios(`masukan nominal dengan benar !!!`);
    if(nominal <= 0) return nyarios(`gak bisa kurang dari sama dengan 0`);
    if(nominal > 100_000) return nyarios(`gak bisa lebih dari 100k`);
    if(nominal > money) return nyarios(`uang kurang`);

    if(((new Date().getTime())%2) === 0){
        fs.save(`${dbfile(`money`)}`,`${Number(`${money}`) + Number(`${nominal}`)}`);
        nyarios(`*Anda Menang !*\n*Sukses* mentransfer *${nominal}bx* dari *@Mesin Judi* ke *@${m.nomor}*`)
    }else{
        fs.save(`${dbfile(`money`)}`,`${Number(`${money}`) - Number(`${nominal}`)}`);
        nyarios(`*Anda Kalah !*\nUang Anda Hilang *${nominal}bx*`)
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