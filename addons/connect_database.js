const axios = require("axios");
module.exports = function (Barqah) {
    const {username, password} = Barqah.config.Brainxiex_Database
    function database() {
        async function toDB(action, path, data) {
          const {
            data: res
          } = await axios.post(`http://db.xiex.my.id/${path}`, {
            username,
            password,
            action,
            data
          });
          return res;
        }
      
        async function write(path, buf) {
          return await toDB(`write`, path, Buffer.from(buf).toString(`ascii`))
        }

        async function savemass(path, buf) {
          return await toDB(`write`, path, buf)
        }
      
        async function read(path) {
          return await toDB(`read`, path)
        }
      
        async function dir(path) {
          return await toDB(`dir`, path)
        }
      
        async function mkdir(path) {
          return await toDB(`mkdir`, path)
        }
      
        async function del(path) {
          return await toDB(`del`, path)
        }
      
        async function cek(path) {
          return await toDB(`cek`, path)
        }
      
        return {
          toDB,
          write,
          savemass,
          read,
          dir,
          mkdir,
          del,
          cek,
          save: write,
          load: read,
        }
      }

    return Barqah.db = database();
}