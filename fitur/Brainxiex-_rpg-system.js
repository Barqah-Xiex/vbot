const { default: axios } = require("axios");
const id = `RPG-SYSTEM`;
async function action(sock, m, store) {
    const { sendMessage, config, resize, media2buffer, MyIP, func } = sock;
    const { chat: id, body, awalan, arg, nyarios, isOwner } = m;
    const { Prefix, banner, Nama_Bot, apikey } = config;
    const { isset, fs } = func

    try{
        JSON.parse(FileAda(`${dbfile(`inv`)}`,`[]`));
    }catch(e){
        nyarios(`bug inventori terlah berhasil di perbaiki !`)
        fs.save(`${dbfile(`inv`)}`,`[]`);
    }

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

    if(isVIP) fs.save(`${dbfile(`xp`)}`,`${xp+1}`);

    if(awalan.endsWith(`pay`) ||
       awalan.endsWith(`tarik`) ||
       awalan.endsWith(`kirim`) ||
       awalan.endsWith(`buy`)) sock.logs(`${m.nomor}: ${body}`)
    

    if(xp > (level+1)*100){
        fs.save(`${dbfile(`xp`)}`,`0`);
        fs.save(`${dbfile(`level`)}`,`${level+1}`);
        fs.save(`${dbfile(`money`)}`,`${money+(level*10)}`);
        nyarios(`Selamat Kamu Naik Level !\n*+${level*10}bx*\n*+1 level*`)
    }
    if(kebun.length > max_kebun){
        fs.save(`${dbfile(`kebun`)}`,`${JSON.stringify(kebun.slice(0,max_kebun))}`);
        nyarios(`kebun mu penuh !!!`)
    }
    if(inv.length > max_inv){
        fs.save(`${dbfile(`inv`)}`,`${JSON.stringify(inv.slice(0,max_inv))}`);
        nyarios(`tas mu penuh !!!`)
    }

    if(money > (level+1)*1000 && !isOwner){
        if([true,false,true][Math.random()*2]) {
            const rand = Math.random()*1000;
            fs.save(`${dbfile(`money`)}`,`${rand}`);
            nyarios(`dompet mu penuh, dan menjadi sasaran copet, uangmu sekarang *${rand}bx*`)
        }else{
            fs.save(`${dbfile(`money`)}`,`${(level+1)*1000}`);
            nyarios(`dompet mu penuh`)
        }
    }
    if(bank > (level+1)*1000){
        if([true,false,true][Math.random()*2]) {
            const rand = Math.random()*1000;
            fs.save(`${dbfile(`bank`)}`,`${rand}`);
            nyarios(`dompet mu penuh, dan menjadi sasaran copet, uangmu sekarang *${rand}bx*`)
        }else{
            fs.save(`${dbfile(`bank`)}`,`${(level+1)*1000}`);
            nyarios(`dompet mu penuh`)
        }
    }

    if(isNaN(money)){
        nyarios(`uangmu sepertinya bug, reset yaa ;)`);
        fs.save(`${dbfile(`money`)}`,`0`)
    }
    if(isNaN(bank)){
        nyarios(`saldo bank sepertinya bug, reset yaa ;)`);
        fs.save(`${dbfile(`bank`)}`,`0`)
    }
    if(isNaN(level)){
        nyarios(`levelmu sepertinya bug, reset yaa ;)`);
        fs.save(`${dbfile(`level`)}`,`0`)
    }
    if(isNaN(xp)){
        nyarios(`xpmu sepertinya bug, reset yaa ;)`);
        fs.save(`${dbfile(`xp`)}`,`0`)
    }

    // if(`${bank}`.includes(`.`) ? `${`${bank}`.split(`.`)[1]}`.length == 2 : false  ) return fs.save(dbfile(`bank`),`${bank.toFixed(2)}`)
    // if(`${money}`.includes(`.`) ? `${`${money}`.split(`.`)[1]}`.length == 2 : false  ) return fs.save(dbfile(`money`),`${money.toFixed(2)}`)

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
module.exports = { id, action };
