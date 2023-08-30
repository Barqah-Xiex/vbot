module.exports = function(liana){
    const {fs} = liana.func;
    liana.ev.on(`group-participants.update`, async function({action,id,participants}) {
      if(!(action == `add`||action ==`remove`)||fs.existsSync(dbdir(`togglewelcome`)+id)) return;
      	  const {participants:alpsod} = await liana.groupMetadata(id)
    
    	  const isAdmin = getGroupAdmins(alpsod).includes(liana.user.jid);
      	  if(!isAdmin) return;
          const {config: {Nama_Bot}} = liana;
          const Kondisi = action.replace(`add`,`Welcome`).replace(`remove`,`Good Bye`).replace(`promote`,`Prmote`).replace(`demote`,`Demote`);
          console.log(action, isAdmin)
          const {subject,participants:p,desc} = await liana.groupMetadata(id).catch(v => ({subject: id, participants}));
          const KataKata = action == `add` ? `Welcome to *${subject}*\n\nJangan Lupa Untuk Mengecek Deskripsi Grup Yaa 😉` : action == `remove` ? `Good Bye from *${subject}* !\n\nSelamat Tinggal Saudaraku !`: ``
		try{
        liana.groupMetadata(id).then(async ({subject,participants:p}) => {
            liana.profilePictureUrl(participants[0], 'image').then(async (pp) => ppna(pp)).catch(async (v) => ppna(`http://xiex.my.id/media/1655612010102undefined.png`));
            async function ppna(pp){
                const link = `http://xiex.my.id/api/image/welcome?apikey=${liana.config.apikey}&title=${encodeURIComponent(Kondisi)}&nama=${encodeURIComponent(`${liana.getName(`${participants[0]}`)}`)}&nomor=${participants[0].split("@")[0]}&ppimg=${encodeURIComponent(pp)}&grup=${encodeURIComponent(subject)}&membernya=${p.length}`;
                
                const templateMessage = {
                    document: Buffer.from(`hai`,),
                    caption: `${KataKata}`,
                    mimetype: `image/png`,
                    fileName: `${Kondisi}`,
                    contextInfo: {
                        forwardingScore: 9999,
                        isForwarded: true,
                        externalAdReply: {
                            mediaType: 1,
                            renderLargerThumbnail: true,
                            showAdAtrribution: true,
                            title: Nama_Bot,
                            body: `Powered By xiex.my.id`,
                            thumbnail: await liana.media2buffer(link),
                            // thumbnailUrl: link,
                            sourceUrl: "http://xiex.my.id",
                        }
                    },
                }
                await liana.sendMessage(id, templateMessage,{quoted:fakereply(Kondisi,undefined,{itemCount: p.length})})
                liana.media2buffer(link).then(async (buffer) => {
                //   liana.resize(buffer).then(async (jpegThumbnail) => liana.sendMessage(id, {location:{jpegThumbnail}}))
                })
            }
        });
        }catch(e){
        	console.error(`Welcommer`,e)
        }
        
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
    return liana;
}
  
function getGroupAdmins(participants) {
    let admins = []
    for (let i of participants) {
        i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ''
    }
    return admins || []
}
function fakereply(message, thumbnail,options) {
    return {
        key: {
            participant: '0@s.whatsapp.net'
        },
        message: {
            orderMessage: {
                itemCount: 1,
                status: 1,
                surface: 1,
                message,
                orderTitle: message,
                thumbnail,
                sellerJid: '0@s.whatsapp.net',
                ...options

            }
        }
    }
}