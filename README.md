# VBOT
Virtual Bot By Brainxiex Development
Created By Liana Putri

Pengembang:
- Barqah Xiex
- Trito

# Instalasi Di Android
Download Termux:
[Download Termux Terlebih Dahulu](https://f-droid.org/repo/com.termux_118.apk)

Copy Salah satu code di bawah ini !!!

Termux (via npm i):
```
termux-setup-storage; echo "menunggu persetujuan !"; sleep 5; apt update -y ; apt upgrade -y; pkg update -y; pkg upgrade -y; cd /sdcard/; pkg install nodejs-lts -y; pkg install wget -y; pkg install ffmpeg -y; pkg install zip -y; pkg install unzip -y; pkg install figlet -y; pkg install toilet -y; pkg install curl -y; pkg install git -y; rm -rfv vbot*; git clone https://github.com/Barqah-Xiex/vbot.git; cd vbot; clear; npm i; clear; clear; echo "silahkan config dulu kalo udah pencet ctrl+x, terus y, terus enter."; sleep 5; nano config.js; node index.js;
```
Termux (tanpa npm i):
```
termux-setup-storage; echo "menunggu persetujuan !"; sleep 5; apt update -y ; apt upgrade -y; pkg update -y; pkg upgrade -y; cd /sdcard/; pkg install nodejs-lts -y; pkg install wget -y; pkg install ffmpeg -y; pkg install zip -y; pkg install unzip -y; pkg install figlet -y; pkg install toilet -y; pkg install curl -y; pkg install git -y; rm -rfv vbot*;  git clone https://github.com/Barqah-Xiex/vbot.git; cd vbot; clear; wget http://xiex.my.id/media/vbot.zip; unzip vbot.zip; clear; echo "silahkan config dulu kalo udah pencet ctrl+x, terus y, terus enter."; sleep 5; nano config.js; node index.js;
```



# Instalasi Di Linux

Ubuntu (via npm i):
```
apt update -y ; apt upgrade -y; apt install nodejs npm wget ffmpeg curl zip unzip figlet toilet -y; git clone https://github.com/Barqah-Xiex/vbot.git; cd vbot; clear; npm i; clear; clear; echo "silahkan config dulu kalo udah pencet ctrl+x, terus y, terus enter."; sleep 5; nano config.js; node index.js;
```


Ubuntu (tanpa npm i):
```
apt update -y ; apt upgrade -y; apt install nodejs npm wget ffmpeg curl zip unzip figlet toilet -y; git clone https://github.com/Barqah-Xiex/vbot.git; cd vbot; clear; wget media.xiex.my.id/vbot.zip; unzip vbot.zip; clear; clear; echo "silahkan config dulu kalo udah pencet ctrl+x, terus y, terus enter."; sleep 5; nano config.js; node index.js;
```
