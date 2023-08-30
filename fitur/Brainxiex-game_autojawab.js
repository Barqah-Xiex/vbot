const { default: axios } = require("axios");

const cmd = `autojawab`; 
const args = ``;
const category = `Game`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset, fs} = func
    const isVIP = Number(FileAda(`${dbfile(`vip`)}`,`${new Date().getTime()}`)) > new Date().getTime();

    if(!isVIP) return nyarios(`kamu bukan vip !`)
    sock.game = sock.game||{};

    
    
    if(!isset(sock.game[id])) return nyarios(`tidak ada game`);
    if(!(isset(sock.game[id].jawaban) || isset(sock.game[id].money) ) ) return nyarios(`game telah berakhir`);

    fs.save(`${dbfile(`money`)}`, `${Number(FileAda(`${dbfile(`money`)}`,`0`)) + Number(`${sock.game[id].money}`)}`);
    nyarios({text: `*Benar !*\n${sock.game[id].jawaban}\n${sock.game[id].alasan||``}\n\n*+${sock.game[id].money}bx*`});
    delete sock.game[id];
   



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