// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 08 September 2024 JAM 00:00 WIB
// WEBSITE : autoresbot.com
// VERSION : 3.5.2
// =============================================


const path=require("path"),fs=require("fs"),chalk=require("chalk"),moment=require("moment-timezone");

const config = {
    botDestination  : 'both', // group |  private | both
    region       	: 'french',
    resbot_version  : 'HangzCuy v3.5',
    apikey_resbot   : 'APIKEY_GRATIS', // apikey beli di autoresbot.com
    nomorsuperOwner : '22502331988',
    grup            : 'https://whatsapp.com/channel/0029VajFFkVJ3juzjX8TkA21',
    email           : 'hangzcuy@gmail.com',
    ig           	: '✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳',
    ownername       : 
 'ʟ /𝒖
    ᴏ/𝒛
      ᴜ/𝒖
       ᴋ/𝒎
         s/ 𝒂
           ᴏ/𝒌
             ɴ/𝒊',
    botname         : 'NARUTO-MD',
    packname        : '✮✮✮ʟᴏᴜᴋsᴏɴᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳',
    sleep_game      : 60000, // waktu main tebak (1000 = 1 detik)
    limit_tunggu 	: 10, // ini menit = 10 menit setiap setelah claim
    MoneyMenangGame : 20,
    ratelimiter 	: 4, // detik
    prefix_custom   : ['#','!','.'],
    dalamdetik		: 5, // ini adalah waktu couldown dalamdetik
    chatmasuk 		: 5, // ini adalah jumlah chat maxsimum {dalamdetik}
    prefix 			: true,
    anticall        : true, // true = aktif || false = tidak aktif
    publik 			: true,
    audio_menu      : true,
    autoread 		: false,
    antitoxic 		: true,
    savekontak		: {
    format   	: 'Buyer @urutan - @tanggal @bulan @tahun',
    mulai 		: '1',
    },
    author          : `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: Azhari Creative\nBot: 0852-4615-4386`,
    allmenu         : 'https://iili.io/dmKqfTP.jpg',
    typeWelcome 	: '2', // ada 3 pilihan angka 1 = image pp user  2 = image welcome custom   || 3 = teks only
    icon_on			: '🟢', 
	icon_off		: '🔴',
    game 			: {
        tebakangka   : 'https://iili.io/dmKqfTP.jpg',
        tebaklontong : 'https://iili.io/dmKqfTP.jpg',
        tebakkalimat : 'https://iili.io/dmKqfTP.jpg',
        tebaklirik   : 'https://iili.io/dmKqfTP.jpg',
        tebakkata    : 'https://iili.io/dmKqfTP.jpg',
        tebakbendera : 'https://iili.io/dmKqfTP.jpg',
        tebakgambar  : 'https://iili.io/dmKqfTP.jpg',
        tebaklagu    : 'https://iili.io/dmKqfTP.jpg'
    },
    PANEL            : {
        URL             : 'https://dash.navocloud.com', // https://panel.contoh.com
        KEY_APPLICATION : '', // ambil di panel : ptla_xxxxx
        SERVER_EGG      : '15',
        port_range      : '1900-2000',
        id_location     : '5', // id location -> ambil di panel
        cpu_default     : 90, // unlimited ganti 0
        disk_default    : 5120, // 5 gb || unlimited ganti 0
        description     : 'Jika Ada Pertanyaan Hubungi Telegram Admin : https://t.me/autoresbot_com'
    },
    BACKUP          : {
        autobackup : true, // true atau false
        autosendwa : true
    }
};



module.exports = config;

let file = path.resolve(__filename);
fs.watchFile(file,(()=>{fs.unwatchFile(file),console.log(`${chalk.greenBright.bold("UPDATE FILE "+file)} ${chalk.redBright.bold("PLEASE RESTART THIS SERVER")}`),delete require.cache[file],require(file)}));













/* 
---- PENJELASAN ------ 
 // 🟢 🔴
true : artinya aktif
false : tidak aktif

jadi kalau
anticall        : true 
// artinya bot lu gak bisa di telpon // kalo ada orang nelpon lansung di block



untuk link yang seperti https://telegra.ph/file/4cd10be17fd6c13303453.jpg
kalau mau di ganti silakan upload gambar kalian dulu ke website https://telegra.ph
lalu nanti salin url gambarnya 


KALAU MAU NANYA NANYA CHAT https://t.me/autoresbot_com admin/owner autoresbot

*/
