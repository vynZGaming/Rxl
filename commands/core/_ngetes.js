const fetch = require("node-fetch")
let util = Ft.util

module.exports = {
name: ["tes"],
type: ["default"],
description: "menampilkan command",
utilisation: "#tes",

  async execute(m) {
let { conn } = data

conn.sendButImg(m.chat, await ( await fetch('https://g.top4top.io/p_21309vcaf0.png')).buffer(), `apa`, `g`, `kok`, `y`, m)

  }
}