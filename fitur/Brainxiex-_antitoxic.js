const { default: axios } = require("axios");
const id = `@everyone`;
async function action(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func, db} = sock;
    const {chat: id, body, arg, isOwner, nyarios} = m;
    const {Prefix,banner,Nama_Bot,Nomor_Owner,apikey} = config;
    const {isset,fs} = func

    
   if(
    body.toLocaleLowerCase().includes("anjing") ||
    body.toLocaleLowerCase().includes("kontol") ||
    body.toLocaleLowerCase().includes("memek") ||
    body.toLocaleLowerCase().includes("babi") ||
    body.toLocaleLowerCase().includes("jembut") ||
    body.toLocaleLowerCase().includes("yatim") ||
    body.toLocaleLowerCase().includes("kontl") ||
    body.toLocaleLowerCase().includes("ajg") ||
    body.toLocaleLowerCase().includes("ngentot") ||
    body.toLocaleLowerCase().includes("gblk") ||
    body.toLocaleLowerCase().includes("goblok") ||
    body.toLocaleLowerCase().includes("gblok") ||
    body.toLocaleLowerCase().includes("bego") ||
    body.toLocaleLowerCase().includes("tolol") ||
    body.toLocaleLowerCase().includes("dumb") ||
    body.toLocaleLowerCase().includes("kntl") 
    ){
        nyarios(`
*Astaghfirullah Astaghfirullah Astaghfirullah*


Dari Abu Hurairah radhiyallahu ‘anhu, Rasulullah SAW bersabda:

*مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا، أَوْ لِيَصْمُتْ*

“Barang siapa beriman kepada Allah dan hari akhir, maka berkatalah yang baik dan jika tidak maka diamlah.” (HR. Bukhari no. 6018 dan Muslim no. 47)`)
   }
}
module.exports = {id,action};