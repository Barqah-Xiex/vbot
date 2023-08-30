const { default: axios } = require("axios");

const cmd = `addlimit`; 
const args = `nominal`;
const category = `Limit`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey,limit} = config;
    const {isset,fs} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`)).toFixed(0);
    const isVIP = Number(FileAda(`${dbfile(`vip`)}`,`${new Date().getTime()}`)) >= new Date().getTime();

    
    
    
    const nominal = Number(arg.split(` `)[0]);

    if(!isset(arg)) return nyarios(`masukin nominalnya`);
    if(isNaN(nominal)||nominal == NaN) return nyarios(`masukan nominal dengan benar !!!`);
    if(nominal <= 0) return nyarios(`gak bisa kurang dari sama dengan 0`);
    if(nominal > 100_000) return nyarios(`gak bisa lebih dari 100k`);
    if(nominal > money) return nyarios(`uang kurang`);

    const idlimit = Number(FileAda(`${dbdir(`limit`)+id}`,`${limit}`)).toFixed(0);

    fs.save(dbdir("limit")+id, `${Number(`${idlimit}`) + Number(`${nominal}`)}`);
    fs.save(`${dbfile(`money`)}`,`${Number(`${money}`) - Number(`${nominal}`)}`);

    nyarios(`Limit Sekarang: ${Number(FileAda(`${dbdir(`limit`)+id}`,`${limit}`)).toFixed(0)}`)



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