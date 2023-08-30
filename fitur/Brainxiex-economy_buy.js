const { default: axios } = require("axios");

const cmd = `buy`; 
const args = `?`;
const category = `Economy`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const money =  Number(FileAda(`${dbfile(`money`)}`,`0`));
    const umpan =  Number(FileAda(`${dbfile(`umpan`)}`,`0`));
    const max_inv =  Number(FileAda(`${dbfile(`max_inv`)}`,`0`));
    const max_kebun =  Number(FileAda(`${dbfile(`max_kebun`)}`,`0`));
    
    if(!isset(arg)) return nyarios(`gunakan *${Prefix}shop*`)
    const [item,iarg1,iarg2] = arg.split(" ");
    switch (item) {
        case `umpan`:
            if (money < Number(iarg1)) return nyarios(`uang kurang`);
            fs.save(dbfile(`umpan`),`${umpan+Number(iarg1)}`)
            fs.save(dbfile(`money`),`${money-Number(iarg1)}`)
            nyarios(`umpanmu sekarang: ${fs.load(dbfile(`umpan`))}`)
            break;
        case `lic`:
            if (iarg1 == `penyihir` && money < 10_000) return nyarios(`untuk menjadi penyihir anda perlu 10,000bx`); 
            if (iarg1 == `programmer` && money < 50_000) return nyarios(`untuk menjadi programmer anda perlu 10,000bx`); 
            if (money < 100) return nyarios(`uang kurang`);
            fs.save(dbfile(`money`),`${money-100}`)
            fs.save(dbfile(`pekerjaan`),`${JSON.stringify([iarg1,new Date().getTime()])}`)
            nyarios(`kamu sekarang bekerja sebagai *${iarg1}*`)
            if(iarg1 == `penyihir`) fs.save(dbfile(`money`),`${money-10_000}`);
            if(iarg1 == `programmer`) fs.save(dbfile(`money`),`${money-50_000}`);
        break;
        case `upgrade_backpack`:
            if (money < (max_inv*50)) return nyarios(`uang kurang`);
                fs.save(dbfile(`money`),`${money-(max_inv*50)}`)
                fs.save(dbfile(`max_inv`),`${max_inv+1}`)
                nyarios(`kamu telah mengupgrade tasmu`)
        break;
        case `upgrade_kebun`:
            if (money < (max_kebun*50)) return nyarios(`uang kurang`);
                fs.save(dbfile(`money`),`${money-(max_kebun*50)}`)
                fs.save(dbfile(`max_kebun`),`${max_kebun+1}`)
                nyarios(`kamu telah mengupgrade kebunmu`)
        break;
        default:
            sock[`Command`][`shop`](...arguments)
            break;
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