module.exports = function ({db: {write},ev,decodeJid,func: {fs}}) {
    ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = decodeJid(contact.id)
            write(`vbot/nama/${id}`,`${JSON.stringify({id,name: contact.notify},null,2)}`); 
        }
    })
}