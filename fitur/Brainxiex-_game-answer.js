const { default: axios } = require("axios");
const id = `Game-Answer`;
async function action(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    sock.game = sock.game||{};

    
    
    if(!isset(sock.game[id])) return;
    if(!(isset(sock.game[id].jawaban) || isset(sock.game[id].money) ) ) return;
    if(!(sock.game[id].jawaban.map(v => `${v}`.toLocaleLowerCase()).includes(body.toLocaleLowerCase()))) return;

    fs.save(`${dbfile(`money`)}`, `${Number(FileAda(`${dbfile(`money`)}`,`0`)) + Number(`${sock.game[id].money}`)}`);
    nyarios(`*Benar !*\n${sock.game[id].alasan||``}\n\n*+${sock.game[id].money}bx*`);
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
module.exports = {id,action};