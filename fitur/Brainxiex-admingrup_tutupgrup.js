

const cmd = `tutupgrup`; 
const args = ``;
const category = `Admin Grup`;
async function message(sock, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = sock;
    const {chat: id, body, nomor, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs} = func

    const parseMention = (text = '') => [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    const mentioned = [].concat(parseMention(body), (m.mentionedJid || []), (m.quoted ? [m.quoted.sender] : []))

    const {participants,subject} = await sock.groupMetadata(m.chat)
    
    const isAdmin = getGroupAdmins(participants).includes(m.sender);
    function getGroupAdmins (participants) {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
     }

    if(!getGroupAdmins(participants).includes(sock.user.jid)) return;
    if(!isAdmin) return nyarios(`kamu bukan Admin`);
    sock.groupSettingUpdate(id, 'announcement')
    // nyarios(`@${mentioned[0][`split`]("@")[0]} telah di berhentikan oleh @${nomor} dari *${subject}*`)


    
}
module.exports = {cmd,args,category,message};
