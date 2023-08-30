const { default: axios } = require("axios");
const { readFileSync, writeFileSync, readdirSync, statSync, existsSync } = require("fs");

const cmd = `fitur-read`; 
const args = `File-Fitur`;
const category = `Fitur`;
async function message(liana, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = liana;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot} = config;
    const {isset} = func
    
    if(isOwner){
        if(isset(arg)){
            if(existsSync(`./fitur/${arg}`)){
                sendMessage(id,{text: `${readFileSync(`./fitur/${arg}`)}`},{quoted: m})
            }else{
                sendMessage(id,{text: `file yang anda maksudkan tidak di temukan mohon gunakan ${Prefix}fitur-list`},{quoted: m})
            }
        }else{
            sendMessage(id,{text: `yang mana ? gunakan ${Prefix}fitur-list`},{quoted: m})
        }
    }else{
        sendMessage(id,{text: `kamu bukan owner bot ini`},{quoted: m})
    }
}
module.exports = {cmd,args,category,message};