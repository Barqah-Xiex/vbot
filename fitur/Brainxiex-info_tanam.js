const { default: axios } = require("axios");

const cmd = `tanam`; 
const args = `tanaman`;
const category = `Information`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`));
    const level =  Number(FileAda(`${dbfile(`level`)}`,`0`));
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


    const Sayuran = {
        "beet": 1,
        "broccoli": 2,
        "cabbage": 3,
        "carrot": 4,
        "cauliflower": 5,
        "celery": 6,
        "corn": 7,
        "cucumber": 8,
        "garlic": 9,
        "lettuce": 10,
        "onion": 11,
        "parsley": 12,
        "potato": 13,
        "radish": 14,
        "spinach": 15,
        "turnip": 16,
    }

    const RPGsayur = await global.rpgitem.Sayuran();

    const jenis_beli = Object.keys(Sayuran).slice(0,level+1);
    const jenis_jual = Object.keys(RPGsayur).slice(0,level+1);

    if(pekerjaan !== `farmer`) return nyarios(`anda bukan farmer`);
    if(isset(jenis_jual.includes(arg))){
        if(money < Sayuran[arg]) return nyarios(`uangmu kurang`)
        kebun.push([arg,(now.tm + (rpgitem.Sayuran[arg] * 60_000))])
        fs.save(dbfile(`money`), `${money - Sayuran[arg]}`);
        fs.save(dbfile(`kebun`), `${JSON.stringify(kebun)}`);
        nyarios(`kamu menanam *${arg}*\ncek kebun`)
    }else{
        const text = `

Tanaman ${kebun.length}/${max_kebun}

${jenis_jual.map((v) => `Nama: *${v}*\nHarga: *${Sayuran[v]}bx*\nJual: *${rpgitem.Sayuran[v]}bx*\nWaktu: *${RPGsayur[v]}menit*\nCMD: *${Prefix}tanam ${v}*`).join(`\n\n`)}

    `
    // const buffer = await media2buffer(`http://xiex.my.id:3000/api/makecutetext?teks=Tanam`);
    const templateMessage = {
        text
    }

    await sock.sendMessage(id, templateMessage, {quoted: m})
        // const sections = [
        //    {
        //     title: "TANAMAN",
        //     rows: jenis_jual.map(v => ({title:`${v}`, rowId: `tanam ${v}`, description:`${RPGsayur[v]}menit, Buy ${Sayuran[v]}bx, Sell ${rpgitem.Sayuran[v]}bx`}))
        //    }
        // ]
        
        // const listMessage = {
        //   title: `Toko Bibit`,
        //   text: `Apa Yang Akan Kamu Beli ?`,
        //   footer: `Di Sini Hanya ${jenis_jual.length} Tanaman Yang Tersedia Untukmu`,
        //   buttonText: `Liat Dan Tanam!`,
        //   sections,
        //   viewOnce: true
        // }
        
        // const sendMsg = await sock.sendMessage(id, listMessage)
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
