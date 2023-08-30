module.exports = function(Barqah){
    setInterval(function(){
        const {glimit_chat: a} = global;
        Object.keys(a).forEach(v => {
            if(v >= 0) return global.glimit_chat[v] = Number(`${global.glimit_chat[v]}`) - (Barqah.config.limit_chat/5);
            global.glimit_chat[v] = undefined;
        })
    },10_000)
}