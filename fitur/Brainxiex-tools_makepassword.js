const { default: axios } = require("axios");

const cmd = `makepassword`; 
const args = ``;
const category = `Tools`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    nyarios(`${sock.number2string((new Date().getTime())*(Math.floor(Math.random()*(new Date().getTime()))))}`.substring(0,8).split("").reverse().join(""))


}   
module.exports = {cmd,args,category,message};