const { default: axios } = require("axios");

const cmd = `shop`; 
const args = ``;
const category = `Economy`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const max_inv =  Number(FileAda(`${dbfile(`max_inv`)}`,`10`));
    const max_kebun =  Number(FileAda(`${dbfile(`max_kebun`)}`,`10`));
    
    const text = `
*Umpan*

Nama: *Umpan*
Jumlah: *10*
Harga: *10bx*
CMD: *${Prefix}buy umpan 10*

Nama: *Umpan*
Jumlah: *20*
Harga: *20bx*
CMD: *${Prefix}buy umpan 20*

Nama: *Umpan*
Jumlah: *50*
Harga: *50bx*
CMD: *${Prefix}buy umpan 50*

Nama: *Umpan*
Jumlah: *100*
Harga: *100bx*
CMD: *${Prefix}buy umpan 100*




*Lisensi Pekerjaan*

Nama: *Lisensi nelayan*
Jumlah: *1*
Harga: *100bx*
CMD: *${Prefix}buy lic nelayan*

Nama: *Lisensi miner*
Jumlah: *1*
Harga: *100bx*
CMD: *${Prefix}buy lic miner*

Nama: *Lisensi harvester*
Jumlah: *1*
Harga: *100bx*
CMD: *${Prefix}buy lic harvester*

Nama: *Lisensi farmer*
Jumlah: *1*
Harga: *100bx*
CMD: *${Prefix}buy lic farmer*




*Jasa Upgrade*

Nama: *Upgrade Inventory*
Jumlah: *1*
Harga: *${max_inv*50}bx*
CMD: *${Prefix}buy upgrade_backpack*

Nama: *Upgrade Kebun*
Jumlah: *1*
Harga: *${max_kebun*50}bx*
CMD: *${Prefix}buy upgrade_backpack*

`
// const buffer = await media2buffer(`http://xiex.my.id:3000/api/makecutetext?teks=Shop`)
    const templateMessage = {
        text
    }
    
    await sock.sendMessage(id, templateMessage, {quoted: m})
    // const sections = [
    //     {
    //     title: "Umpan",
    //     rows: [
    //         {title: "10 Umpan", rowId: "buy umpan 10", description: "Harga: 10bx"},
    //         {title: "20 Umpan", rowId: "buy umpan 20", description: "Harga: 20bx"},
    //         {title: "50 Umpan", rowId: "buy umpan 50", description: "Harga: 50bx"},
    //         {title: "100 Umpan", rowId: "buy umpan 100", description: "Harga: 100bx"},
    //     ]
    //     },
    //    {
    //     title: "Lisensi Pekerjaan",
    //     rows: [
    //         {title: "Lisensi nelayan", rowId: "buy lic nelayan", description: "Harga: 100bx"},
    //         {title: "Lisensi miner", rowId: "buy lic miner", description: "Harga: 100bx"},
    //         {title: "Lisensi harvester", rowId: "buy lic harvester", description: "Harga: 100bx"},
    //         {title: "Lisensi farmer", rowId: "buy lic farmer", description: "Harga: 100bx"},
    //     ]
    //     },
    //     {
    //         title: `Upgrade`,
    //         rows: [
    //             {title: `Upgrade Tas`, rowId: "buy upgrade_backpack", description: `Harga: ${max_inv*50}bx`},
    //             {title: `Upgrade Kebun`, rowId: "buy upgrade_kebun", description: `Harga: ${max_kebun*50}bx`},
    //         ]
    //         },
    //     {
    //     title: "SELL ALL ITEM",
    //     rows: [
    //         {title: "SELL ALL ITEM", rowId: "sellinv"},
    //     ]
    //     },
    // ]
    
    // const listMessage = {
    //   text: `Selamat Datang Di ${Prefix}Shop`,
    //   footer: `Disini Kami Menjual`,
    //   title: "! SHOP !",
    //   buttonText: "Klik Untuk Melihat Barang",
    //   sections,
    // }
    
    // const sendMsg = await sock.sendMessage(id, listMessage,{quoted:m})



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