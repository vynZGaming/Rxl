let { MessageType, mentionedJid } = require("@adiwajshing/baileys")
let fetch = Ft.fetch
const Canvas = require("discord-canvas")

module.exports = {
async battery(json) {
let battery = json[2][0][1].value
let persenbat = parseInt(battery)
battrey.value = `${persenbat}%`
battrey.live = json[2][0][1].live
global.battery = ({
value: battrey.value,
isCharge: battry.live
})
}
}

module.exports = {
async groupUpdate({jid, participants, action}) {
console.log("member yang bergabung " + participants[0].split("@")[0])
const groupM = await conn.groupMetadata(jid)
const mem = participants[0]
const imgnye = await conn.getProfilePicture(mem)
.catch(e => {
img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-EY2K9fA93qJM3wF1lPfYMYI6IXF9fkGyR4F43fpRon796thPr4I2KPb&s=10'
})
switch (action) {
  case "remove":
    try {
let image = await new Canvas.Goodbye()
  .setUsername(`${await conn.getName(mem)}`)
  .setDiscriminator(`${groupM.participants.length}`)
  .setMemberCount(`${groupM.participants.length}`)
  .setGuildName(`${groupM.subject}`)
  .setAvatar(`${imgnye}`)
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9o6Xig_RmaDhX_5hDWnsm0UPMJIZPnpaTMNEN0gL2cyZDuq7rIDz6gINj&s=10")
  .toAttachment();
 buff = await image.toBuffer()
teks = `@${mem.split("@")[0]} Keluar Dari Group ${groupM.subject}`
 conn.sendButtonLoc(jid, buff, teks, userbot.packname, 'Selamat tinggal semoga cepat mati 🗿', 'say goodbye')
    } catch (e) {
    console.log(e) 
    }
 break
   case "add":
    try {
let imaged = await new Canvas.Welcome()
  .setUsername(`${await conn.getName(mem)}`)
  .setDiscriminator(`${groupM.participants.length}`)
  .setMemberCount(`${groupM.participants.length}`)
  .setGuildName(`${groupM.subject}`)
  .setAvatar(`${imgnye}`)
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9o6Xig_RmaDhX_5hDWnsm0UPMJIZPnpaTMNEN0gL2cyZDuq7rIDz6gINj&s=10")
  .toAttachment();
 buff = await imaged.toBuffer()
 teks = `@${mem.split("@")[0]} Bergabung dalam Group ${groupM.subject}`
 conn.sendButtonLoc(jid, buff, teks, userbot.packname, 'Welcome', 'say welcome')
    } catch (e) {
    console.log(e) 
    }
 break
}
}
}
