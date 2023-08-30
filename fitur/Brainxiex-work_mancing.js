const { default: axios } = require("axios");

const cmd = `mancing`; 
const args = ``;
const category = `Work`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const ppimg = await sock.profilePictureUrl(m.sender, "image").catch(v => `http://xiex.my.id/media/1655612010102undefined.png`);
    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`));
    const bank =  Number(FileAda(`${dbfile(`bank`)}`,`0`));
    const xp =  Number(FileAda(`${dbfile(`xp`)}`,`0`));
    const level =  Number(FileAda(`${dbfile(`level`)}`,`0`));
    const kebun =  JSON.parse(FileAda(`${dbfile(`kebun`)}`,`[]`));
    const inv =  JSON.parse(FileAda(`${dbfile(`inv`)}`,`[]`));
    const umpan =  Number(FileAda(`${dbfile(`umpan`)}`,`0`));
    const [pekerjaan, WaktuDaftar] =  JSON.parse(FileAda(`${dbfile(`pekerjaan`)}`,`["pengangguran",${new Date().getTime()}]`));
    const role =  (FileAda(`${dbfile(`role`)}`,`${pekerjaan}`));
    const max_inv =  Number(FileAda(`${dbfile(`max_inv`)}`,`0`));
    const max_kebun =  Number(FileAda(`${dbfile(`max_kebun`)}`,`0`));
    
    const jenis = Object.keys(await global.rpgitem.Ikan()).slice(0,level+1);

    const isTempatRoleplay = id == `628979059392-1614471575@g.us`;
    const isTempatGame = id == "628979059392-1614471493@g.us" || isTempatRoleplay;
    const isTempatUtama = id == `628979059392-1594298364@g.us` || id == `628979059392-1606031648@g.us` || isTempatGame;

    if(!isTempatGame) return nyarios(`untuk bekerja hanya bisa di tempat game!\n\n*${Prefix}listgrup* untuk melihat daftar grup !`);

    if(pekerjaan !== `nelayan`) return nyarios(`anda bukan nelayan`);
    if(umpan <= 0) return nyarios(`kamu tidak mempunyai umpan beli umpan dulu di *${Prefix}shop*`)
    const dapatnya = jenis[Math.floor(Math.random() * jenis.length)]
    fs.save(dbfile(`umpan`), `${umpan - 1}`);
    fs.save(dbfile(`inv`), JSON.stringify([...inv,dapatnya]))
    fs.save(dbfile(`xp`), `${xp + 10}`)
    nyarios(`anda mendaptkan *${dapatnya}*`)
   




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