const { default: axios } = require("axios");

const cmd = `infogrup`; 
const args = ``;
const category = `Information`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const {participants,subject,owner,desc} = await sock.groupMetadata(m.chat)
    
    function getGroupAdmins (participants) {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
    }
    const Admins = getGroupAdmins(participants);
    const isAdmin = Admins.includes(m.sender);
    const isBotAdmin = Admins.includes(sock.user.jid);
    const buffer = await media2buffer(await sock.profilePictureUrl(m.chat, "image").catch(v => `http://xiex.my.id/media/1655612010102undefined.png`))
    const listAdmin = Admins.map((v,i) => `${i}. @${v.split("@")[0]}`).join(`\n`);
    const templateMessage = {
        document: buffer,
        mimetype: `image/png`,
        fileName: `Info grup`,
        fileLength: 887890909999999,
        pageCount: 1234567890123456789012345,
        caption: `*${subject}*\n*${participants.length} Member*\n\nAdmin: *${Admins.length} Admin*\n${``}\n\nKamu Admin: ${isAdmin}\nBot Admin: ${isBotAdmin}\n\nLink Grup: ${isBotAdmin ? `https://chat.whatsapp.com/${sock.groupInviteCode(id)}`:`Saya Bukan Admin`}\n\nDescription:\n${desc}`,
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
        }
    }
    sendMessage(id,templateMessage,{quoted: m})

}
module.exports = {cmd,args,category,message};