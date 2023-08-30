const { default: axios } = require("axios");

const cmd = `sellinv`; 
const args = ``;
const category = `Economy`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func


    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`));
    const inv =  JSON.parse(FileAda(`${dbfile(`inv`)}`,`[]`));

    const allitem = await global.rpgitem.All()
    
    let totalpendapatan = 0;
    for (v of inv){
        const hargajual = allitem[v];
        totalpendapatan = totalpendapatan+hargajual;
    }
    fs.save(dbfile(`inv`),`[]`);
    fs.save(dbfile(`money`),`${money+totalpendapatan}`);
    nyarios(`Kamu menjual:\n${inv.map((v,i) => `${i}. *${v}*`).join(`\n`)}\n\nkamu mendapatkan: ${totalpendapatan}bx`)


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