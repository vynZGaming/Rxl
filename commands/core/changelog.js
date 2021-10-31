const package = require('../../package.json')
      fetch = require('node-fetch')
      changelog = require('../../changelog.json')

module.exports = {
name: ["changelog"],
type: ["default"],
description: "changelog bot",
utilisation: userbot.prefix + "changelog",

async execute(m) {
let { conn, text } = data

let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
let name = conn.getName(conn.user.jid)
let caption = `Changelog 
tanggal: ${date}
versi saat ini *${package.version}*

${changelog.changelog == '' ? 'Tidak ada changelog yang di tambahkan' : '' || changelog.changelog }

`

conn.send3ButtonLoc(m.chat, await ( await fetch('https://g.top4top.io/p_21309vcaf0.png')).buffer(),
caption, userbot.packname, '📑 DASHBOARD', 'dashboard', '♻️StatusBot', 'stats', '💠Menu', 'menu', m)
}
}
