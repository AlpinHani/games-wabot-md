let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana [082287750102]
│ • Telkomsel [082287750102]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://instagram/en4y.pin
│ • Gopay [082287750102]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
