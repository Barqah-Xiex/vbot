const { default: axios } = require("axios");

const cmd = `kebun`; 
const args = ``;
const category = `Information`;
async function message(sock, m, store) {try {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const kebun =  JSON.parse(FileAda(`${dbfile(`kebun`)}`,`[]`));
    const [pekerjaan, WaktuDaftar] =  JSON.parse(FileAda(`${dbfile(`pekerjaan`)}`,`["pengangguran",${new Date().getTime()}]`));
    const max_kebun =  Number(FileAda(`${dbfile(`max_kebun`)}`,`10`));

    const now = new Date();
    now.tm = now.getTime();
    now.d = now.getSeconds();
    now.m = now.getMinutes();
    now.j = now.getHours();
    now.h = now.getDate();
    now.b = now.getMonth();
    now.t = now.getFullYear();


    if (pekerjaan !== `farmer`) return nyarios(`anda bukan farmer`);
    const text = `
*+*                                        *+*
Tanaman ${kebun.length}/${max_kebun}
*+*                                        *+*
*Note:*
gunakan *${Prefix}panen* untuk memanen semua tanaman yang telah jadi
gunakan *${Prefix}tanam* untuk tanaman tanaman yang akan di tanam
*+*                                        *+*
${kebun.map(([v, t],i) => `Nama: *${v}*\nWaktu: ${now.tm >= t ? `Siap Panen !` : `${`${((t - now.tm) / 60000)}`.split('.')[0]} menit lagi`}`).join(`\n\n`)}
*+*                                        *+*
`
    nyarios(text)
    // const buffer = await media2buffer(`http://xiex.my.id:3000/api/makecutetext?teks=Kebun`)
    // const templateMessage = {
    //     text
    // }

    // await sock.sendMessage(id, templateMessage, {quoted: m})

    // const sections = [
    //     {
    //         title: `Tanaman ${kebun.length}/${max_kebun}`,
    //         rows: kebun.map(([v, t]) => ({ title: `${v}`, rowId: `${now.tm >= t ? `Harvest` : `say Tunggu *${(t - now.tm) / 60_000} menit* lagi`}`, description: `${now.tm >= t ? `Harvest` : `${(t - now.tm) / 60_000} menit lagi`}` }))
    //     }
    // ]

    // const listMessage = {
    //     title: `Kebun`,
    //     text: `cek kebun ?`,
    //     footer: `Tanamanmu ${kebun.length} buah`,
    //     buttonText: `Liat Kebun!`,
    //     sections,
    // }

    // const sendMsg = await sock.sendMessage(id, listMessage)





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
} catch (e) {console.error(e)}}
module.exports = {cmd,args,category,message};
