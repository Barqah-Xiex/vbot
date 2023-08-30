const {post} = require("axios");
module.exports = function(Barqah){
    async function tolink(buffer,fileName = `undefined.xiex`) {
        const fileBase64 = Buffer.from(buffer).toString("base64")
        const {data} =  await post(`http://upload.xiex.my.id/`, {file: {data: fileBase64, name: fileName}})
        return data;
    }
    async function tolinkliana(buffer,fileName = `undefined.xiex`) {
        const fileBase64 = Buffer.from(buffer).toString("base64")
        const {data} =  await post(`https://lianaputri.000webhostapp.com/post.php`, {file: {data: fileBase64, name: fileName}})
        return data;
    }
    Barqah.tolink = tolink;
    Barqah.tolinkliana = tolinkliana;
}