const cmd = `fitur-reload`; 
const args = ``;
const category = `Fitur`;
async function message(liana, m, store) {
    const {sendMessage, config,resize,media2buffer, MyIP, func} = liana;
    const {chat: id, body, arg, nyarios, isOwner} = m;
    const {Prefix,banner,Nama_Bot,apikey} = config;
    const {isset,fs,warna} = func;

    if(isset(arg)) {
        const filename = `${__dirname}/${arg}`;
        const file = require.resolve(filename);
        console.info(`${warna(`kuning`,`deleting cache`)} '${warna(`hijau`,filename)}'`);
        delete require.cache[file];
        console.log(`${warna(`hijau`,`memuat`)} '${warna(`kuning`,`./fitur/${arg}`)}'`)
        const {cmd,message,category,args,id,action} = require(`./${arg}`);
        if(isset(cmd) && isset(category) && isset(message)){
        liana.Command[cmd] = message;
        liana.category[category] = liana.category[category]||[];
        liana.category[category].push(cmd+`${args ? " "+args : ""}`)
        }
        if(isset(id)&&isset(action)) liana.fiturAddons[id] = action; 
        return nyarios(`berhasil mereload *${cmd||id}*`);
    }

    liana.Command = {};
    liana.category = {};
    liana.fiturAddons = {};

    
    liana.cache.fitur = {};
    liana.cache.fitur.delcache = 0;
    liana.cache.fitur.reload = 0;

    // async function outputJSON(json,cb) {
    //     if (json.length > 0) {
    //       await cb(json[0]);
    //       outputJSON(json.slice(1));
    //     }
    //   }
    
    await fs.dir(__dirname).forEach((v) => {
        liana.cache.fitur.delcache += 1
        const filename = `${__dirname}/${v}`
        const file = require.resolve(filename)
        console.info(`${warna(`kuning`,`deleting cache`)} '${warna(`hijau`,filename)}'`)
        return delete require.cache[file]
    })
    console.log(`DELETING CACHE >> DONE !`)
    fs.dir(`./fitur`).forEach(v => {
        liana.cache.fitur.reload += 1
        console.log(`${warna(`hijau`,`memuat`)} '${warna(`kuning`,`./fitur/${v}`)}'`)
        const {cmd,message,category,args,id,action} = require(`./${v}`);
        if(isset(cmd) && isset(category) && isset(message)){
        liana.Command[cmd] = message;
        liana.category[category] = liana.category[category]||[];
        liana.category[category].push(cmd+`${args ? " "+args : ""}`)
        }
        if(isset(id)&&isset(action)) liana.fiturAddons[id] = action; 
    })
    fs.dir(`./cmd`).forEach(v => {
        console.log(`${warna(`hijau`,`memuat`)} '${warna(`kuning`,`./cmd/${v}`)}'`)
        const text = `${fs.load(`./cmd/${v}`)}`;
        liana.Command[v] = (__liana,___m,__store) => __liana.sendMessage(___m.chat,{text},{quoted: ___m});
        liana.category["More"] = liana.category["More"]||[];
        liana.category["More"].push(v)
    })
    console.log(`UPDATING FITUR >> DONE !`);
    nyarios(`Deleting Cache: ${liana.cache.fitur.delcache} file\nReload Fitur: ${liana.cache.fitur.reload} file`)
    delete liana.cache.fitur;
    return liana;
}
module.exports = {cmd,args,category,message};