const { default: axios } = require("axios");

const cmd = `ktp`; 
const args = ``;
const category = `Information`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const isVIP = Number(FileAda(`${dbfile(`vip`)}`,`${new Date().getTime()}`)) > new Date().getTime();
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
    const max_inv =  Number(FileAda(`${Number(`${dbfile(`max_inv`)}`)*10}`,`10`));
    const max_kebun =  Number(FileAda(`${dbfile(`max_kebun`)}`,`10`));


sock.loadingMessage(id,"Bentar !!!");

    // sendMessage(id, {image:{url: `http://api3000.xiex.my.id/api/myinfo?namauser=${m.pushName}&nomor=${m.nomor}&ppimg=${encodeURIComponent(ppimg)}&money=${money}&bank=${bank}&umpan=${umpan}&inv=${inv.length}&xp=${xp}&role=${role}`}, caption:`Uang: ${money}bx\nLevel: ${level}/${xp}\nPekerjaan: ${pekerjaan[0]}`},{quoted:m})
    const text = `┌━━֍  〔 🧠 ${m.pushName} 🧠 〕
│
│ Nama: ${m.pushName}
│ Nomor: ${m.nomor}
│ Uang: ${money}bx
│ Umpan: ${umpan}
│ 
│ Bank: ${bank}
│ Level: (${level}) ${xp}/${(level+1)*100}
│ Ransel: ${inv.length}/${max_inv}
│ Pekerjaan: ${pekerjaan[0]}
│ 
└━━֍`
    // const buffer = await media2buffer(`http://api3000.xiex.my.id/api/myinfo?namauser=${m.pushName}&nomor=${m.nomor}&ppimg=${encodeURIComponent(ppimg)}&money=${money}&bank=${bank}&umpan=${umpan}&inv=${inv.length}&xp=${xp}&role=${isVIP ? "VIP" : role}`)
    const buffer = await media2buffer(`http://xiex.my.id/api/image/myinfo?apikey=${apikey}&title=Brainxiex%20CArd&nama=${m.pushName}&nomor=${m.nomor}&ppimg=${encodeURIComponent(ppimg)}&money=${money}&inv=${inv.length}&xp=${xp}&bank=${bank}&umpan=${umpan}&status=${isVIP ? "VIP" : role}`)
    const templateMessage = {
        document: buffer,
        caption: text,
        mimetype: `image/png`,
        fileName: `Your Information.png`,
        contextInfo: {
            forwardingScore: 9999,
            isForwarded: true,
            externalAdReply: {
                mediaType: 1,
                renderLargerThumbnail: true,
                showAdAtrribution: true,
                title: Nama_Bot,
                body: `xiex.my.id`,
                thumbnail: buffer
            }
        },
    }
await sock.sendMessage(id, templateMessage,{quoted: m})


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