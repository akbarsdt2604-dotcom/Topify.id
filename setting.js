const chalk = require("chalk")
const fs = require("fs")

  global.ownerNumber = "6289517579659@s.whatsapp.net"
  global.kontakOwner = "6289517579659"
  global.namaStore = "Topify.id"
  global.botName = "ASISTEN Topify.id"
  global.ownerName = "akbarsyhdt"
  
  
  global.linkyt = "-_-"
  global.linkig = "-_-" 
  global.dana = "089517579659" 
  global.ovo = "-_-"
  global.gopay = "085894252715" 
  global.sawer = "-_-" 
 global.linkgc1 = "-_-"
 global.linkgc2 = "-_-"
//Jikalau dari salah satu di atas kalian tidak memiliki 
//silahkan kosongkan atau isi --


const textSewa = `*SEWA BOT GROUP WHATSAPP*

Harga Sewa:
Per Hari: Rp1.000
Per Minggu: Rp10.000
Per Bulan: Rp20.000


Keunggulan Bot WhatsApp Kami:

- Otomatis balas pesan pelanggan
- Bisa menampilkan list anda didalam group 
- Support berbagai format & perintah 
- Fitur keamanan grup
- Auto hapus link group WhatsApp 
- Sambut member baru
- Rekap penjualan setiap group 
- menampilkan payment didalam group
- Group menjadi terjaga
- Online 24 jam non-stop

Minat sewa? Hubungi Nomor:
wa.me//6289517579659`






//==================TIDAK PERLU DI EDIT=========================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
module.exports = { textSewa }