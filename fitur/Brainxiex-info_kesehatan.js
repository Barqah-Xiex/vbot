const { default: axios } = require("axios");

const cmd = `kesehatan`; 
const args = ``;
const category = `Information`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    
    const health =  Number(FileAda(`${dbfile(`health`)}`,`100`));
    const max_health =  Number(FileAda(`${dbfile(`max_health`)}`,`100`));
    const hunger =  Number(FileAda(`${dbfile(`hunger`)}`,`100`));
    const max_hunger =  Number(FileAda(`${dbfile(`max_hunger`)}`,`100`));
    const energy =  Number(FileAda(`${dbfile(`energy`)}`,`100`));
    const max_energy =  Number(FileAda(`${dbfile(`max_energy`)}`,`100`));
    


    const text = `┌━━֍  〔 🧠 *Kesehatan* 🧠 〕
│
│ ❤️ ${health}/${max_health}
│ 🍔 ${hunger}/${max_hunger}
│ ⚡ ${energy}/${max_energy}
│ 
└━━֍`

nyarios(text);

   function dbdir(a) {return dir("./database/" + a + "/")}
    function dbfile(a) {return dbdir(a) + m.sender}
    function dir(nama) {8888
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