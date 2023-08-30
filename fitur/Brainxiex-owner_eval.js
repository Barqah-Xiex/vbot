const cmd = `eval`
const args = `javascript syntax`
const category = `Owner`
async function message (sock, m, store){
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs,warna} = func
    try{
        if(m.isOwner){
            const text = `${require(`util`).format(await eval(m.arg))}`;
           sock.sendMessage(m.chat,{text},{quoted: m});
        }else{
            sock.sendMessage(m.chat,{text: `*[ Failed ]* kamu bukan Pemilik Bot ini`},{quoted: m});
        }
    }catch(e){
        console.error(e)
    }
}
module.exports = {cmd,message,args,category}