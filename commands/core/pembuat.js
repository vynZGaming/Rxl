let { MessageType }= require('@adiwajshing/baileys')
let { contactsArray } = MessageType

module.exports = {
name: ["creator"],
type: ["default"],
useLimit: true,
description: "menampilkan daftar pembuat bot",
utilisation: userbot.prefix + "creator",

async execute(m) {
let { conn } = data
   conarray = []
ownerContact = ['6281261324817','35799551166']
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
 vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
  conarray.push({
"displayName": 'Owner sneazy',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
conn.sendMessage(m.chat, {
"displayName": `${conarray.length} kontak`,
"contacts": conarray 
}, 'contactsArrayMessage', { quoted: m })
conn.sendMessage(m.chat, 'Ini nomor owner ku kak <//>',MessageType.text, { quoted: m} )

  }
}
