const cmd = `join`; 
const args = `linkgrup`;
const category = `VIP`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const isVIP = Number(FileAda(`${dbfile(`vip`)}`,`${new Date().getTime()}`)) > new Date().getTime();
    if(!isVIP) return nyarios(`hanya untuk vip`);
    const link = arg.split("chat.whatsapp.com/")[1].split("/")[0].split(" ")[0].split("\n")[0].split("]")[0]
    await sock.groupAcceptInvite(link).then(r => {
        nyarios(`Udah\n\nStatus:\n${JSON.stringify(r, null, 2)}`)
    }).catch(r => {
        // Barqah.groupAcceptInviteV4(link)
        nyarios(`Gagal\n\nStatus:\n${JSON.stringify(r, null, 2)}`)
    })



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