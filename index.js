/*
❴ Dk No Controle Fml ❵
❴ Deixa Meus Creditos Pfvr ❵
❴ Base Simples Porém Muito Boa❵
*/
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const {
default: AnyWASocket,
MessageType,
Presence,
GroupSettingChange,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
makeInMemoryStore,
useSingleFileAuthState,
useMultiFileAuthState,
BufferJSON, 
jidDecode, 
DisconnectReason, 
fetchLatestBaileysVersion,
downloadContentFromMessage,
delay,
WA_DEFAULT_EPHEMERAL ,
generateWAMessageFromContent ,
proto ,
generateWAMessageContent ,
generateWAMessage ,
prepareWAMessageMedia ,
areJidsSameUser ,
getContentType

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
} = require("@adiwajshing/baileys")
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const p = require("pino")
const Pino = require("pino")
const axios = require('axios')
const clui = require("clui")
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const cheerio = require("cheerio")
const cfonts = require("cfonts")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { exec, spawn, execSync } = require("child_process")
const { color } = require("./database/arquivos/lib/color")
const { fetchJson } = require("./database/arquivos/lib/fetcher")
const { fromBuffer } = require("file-type")
const { tmpdir } = require("os")
const { palavrasANA } = require('./database/funções/anagrama/jogos.js');
const { getLevelingXp, getLevelingLevel, getLevelingId, Telesticker, addLevelingXp, addLevelingLevel, addLevelingId, smsg, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, jsonformat, format, parseMention } = require('./database/funções/myfunc.js')
let _level = JSON.parse(fs.readFileSync('./database/funções/level.json'))
let leveling = JSON.parse(fs.readFileSync('./database/funções/leveling.json'))
const antinotas = JSON.parse(fs.readFileSync('./database/funções/grupos/antinotas.json'))
const sotoy = JSON.parse(fs.readFileSync('./database/funções/sotoy.json'));
const premium = JSON.parse(fs.readFileSync('./database/funções/usuarios/premium.json'));
const setting = require('./database/funções/funcsion.js')
const forca = JSON.parse(fs.readFileSync('database/funções/grupos/forca.json'))
const puppet = JSON.parse(fs.readFileSync('database/funções/grupos/puppet_forca.json'))
const registros = JSON.parse(fs.readFileSync('./database/funções/usuarios/registros.json'))

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { addFlod , isFlod } = require('./database/funções/spam.js')
const { isFiltered, addFilter } = require('./database/funções/spam.js')
const palavra = JSON.parse(fs.readFileSync('./database/funções/grupos/palavras.json'))
const palavrao = JSON.parse(fs.readFileSync('./database/funções/grupos/palavrao.json'))

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { banner, banner2, getGroupAdmins, getBuffer, getExtension, getRandom, upload, log } = require("./database/lib/functions.js")
const config = JSON.parse(fs.readFileSync("./database/files/config/data.json"))
const dono = config.numeroDono
prefix = config.prefix
prefixo = config.prefix
nomeBot = config.nomeBot
NomeBot = config.nomeBot
numeroBot = config.numeroBot
nomeDono = config.nomeDono
NomeDono = config.nomeDono
emoji = config.emoji
numeroDono = config.numeroDono
reagir = config.reação

const fotoaleatoria = JSON.parse(fs.readFileSync('./database/files/fotos/teste.json'))
result = fotoaleatoria.result
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const logosss = JSON.parse(fs.readFileSync('./database/files/fotos/logos.json'))
logo1 = logosss.logo1
logo2 = logosss.logo2
logo3 = logosss.logo3
logo4 = logosss.logo4
logo5 = logosss.logo5
logo6 = logosss.logo6
logo7 = logosss.logo7

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { menu } = require('./database/files/menu/menu.js');

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
async function startyniakami () {
const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { state, saveCreds } = await useMultiFileAuthState('./database/qr-code/qr-aqui')
console.log(banner.string)
console.log(banner2.string)
const dk = AnyWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
auth: state
})
dk.ev.on('creds.update', saveCreds);
store.bind(dk.ev)
dk.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
dk.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
dk.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startyniakami()
}
} else if(connection === "open") {
console.log(`${color(`Bot Conectado Com Sucesso!`,'white')}`)
}
})
console.log(`${color(`Nome Do Dono: ${nomeDono}`,'white')}`)
console.log(`${color(`Criador Do Bot: Dk`,'red')}`)

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈

dk.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
if (!info.message) return 
await dk.readMessages([info.key]);
if (info.key && info.key.remoteJid == "status@broadcast") return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextinfo" ? altpdf[2] : altpdf[1] : altpdf[0]
global.prefixo

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈

const msg = m.messages[0]
if (!msg.message) return 

const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
var body = (type === 'conversation') ? msg.message.conversation : (type == 'imageMessage') ? msg.message.imageMessage.caption : (type == 'videoMessage') ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''                                                                           
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const yniakami = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
//bady = (type === "conversation") ? info.message.conversation : (type == "imageMessage") ? info.message.imageMessage.caption : (type == "videoMessage") ? info.message.videoMessage.caption : (type == "extendedTextMessage") ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId: ""
budy = (type === "conversation") ? info.message.conversation : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : ""
button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedDisplayText : ""
button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : ""
listMessage = (type == "listResponseMessage") ? info.message.listResponseMessage.title : ""
var pes = (type === "conversation" && info.message.conversation) ? info.message.conversation : (type == "imageMessage") && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == "videoMessage") && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == "extendedTextMessage") && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ""
bidy =  budy.toLowerCase()
//onst stream = await downloadContentFromMessage(mediakey, MediaType)

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? dk.sendMessage(from, {text: teks.trim(), mentions: memberr}) : dk.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = dk.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await dk.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const canal = config.canal
const grupo = config.grupo
const participants = isGroup ? await groupMetadata.participants : ''
const text = args.join(" ")
const c = args.join(' ')
const enviar = (texto) => {
dk.sendMessage(from, { text: texto }, {quoted: info})
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const selo = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const selo1 = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 0,status: 4, thumbnail: fs.readFileSync(`./database/files/fotos/verificado.png`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}
const selo2 = { key: {participant: `0@s.whatsapp.net`, mentionedJid: `Dacoro`, ...(m.from ?{ remoteJid: `${m.from}` } : {}) },message: { "extendedTextMessage": {"text":`𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 😈` }} }       
       
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const isAntiNotas = isGroup ? antinotas.includes(from) : false
const isLevelingOn = isGroup ? leveling.includes(from) : false
const isPalavrao = isGroup ? palavrao.includes(from) : false	
const isPremium = premium.includes(sender)
const isRegistro = registros.includes(sender)
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isOwner = sender.includes(numeroDono)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const allForcaId = []
for(let obj of forca) allForcaId.push(obj.id)
const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false

async function randompalavra() {
    return new Promise(async (resolve, reject) => {
fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
if(err) reject(err)    
var $ = cheerio.load(await res.text())
resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
})
    }) 
}

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null


//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")



const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'BOA MADRUGADA' 
} 
if(time2 > "05:30:00"){
var tempo = 'BOM DIA' 
}
if(time2 > "12:00:00"){
var tempo = 'BOA TARDE' 
}
if(time2 > "19:00:00"){
var tempo = 'BOA NOITE' 
}
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if(isAntiNotas && body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return  
await dk.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: m})
setTimeout(async function () {
dk.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const nivelAtual = getLevelingLevel(sender)
var patt = 'Graduado I '
if (nivelAtual === 1) {patt = 'Graduado  I ' } else if (nivelAtual === 2) {patt = 'Graduado II '} else if (nivelAtual === 3) {patt = 'Graduado  III '} else if (nivelAtual === 4) {patt = 'Graduado  IV  '} else if (nivelAtual === 5) {patt = 'Graduado  V '} else if (nivelAtual === 6) {patt = 'Oficiais Subalternos I'} else if (nivelAtual === 7) {patt = 'Oficiais Subalternos II'} else if (nivelAtual === 8) {patt = 'Oficiais Subalternos III'} else if (nivelAtual === 9) {patt = 'Oficiais Subalternos IV'} else if (nivelAtual === 10) {patt = 'Oficiais Subalternos V'} else if (nivelAtual === 11) {patt = 'Oficiais Intermediários I'} else if (nivelAtual === 12) {patt = 'Oficiais Intermediários II'} else if (nivelAtual === 13) {patt = 'Oficiais Intermediários III'} else if (nivelAtual === 14) {patt = 'Oficiais Intermediários IV'} else if (nivelAtual === 15) {patt = 'Oficiais Intermediários V'} else if (nivelAtual === 16) {patt = 'Oficiais Superioses I'} else if (nivelAtual === 17) {patt = 'Oficiais Superioses II'} else if (nivelAtual === 18) {patt = 'Oficiais Superioses III'} else if (nivelAtual === 19) {patt = 'Oficiais Superioses IV'} else if (nivelAtual === 20) {patt = 'Oficiais Superioses V'} else if (nivelAtual === 21) {patt = 'Major I '} else if (nivelAtual === 22) {patt = 'Major II '} else if (nivelAtual === 23) {patt = 'Major III '} else if (nivelAtual === 24) {patt = 'Major IV '} else if (nivelAtual === 25) {patt = 'Major V '} else if (nivelAtual === 26) {patt = 'Tenente Coronel I '} else if (nivelAtual === 27) {patt = 'Tenente Coronel II '} else if (nivelAtual === 28) {patt = 'Tenente Coronel III '} else if (nivelAtual === 29) {patt = 'Tenente Coronel IV '} else if (nivelAtual === 30) {patt = 'Tenente Coronel V '} else if (nivelAtual === 31) {patt = 'Coronel I '} else if (nivelAtual === 32) {patt = 'Coronel II '} else if (nivelAtual === 33) {patt = 'Coronel III '} else if (nivelAtual === 34) {patt = 'Coronel IV '} else if (nivelAtual === 35) {patt = 'Coronel V '} else if (nivelAtual === 36) {patt = 'Oficiais Generais I'} else if (nivelAtual === 37) {patt = 'Oficiais Generais II'} else if (nivelAtual === 38) {patt = 'Oficiais Generais III'} else if (nivelAtual === 39) {patt = 'Oficiais Generais IV'} else if (nivelAtual === 40) {patt = 'Oficiais Generais V'} else if (nivelAtual > 41) {patt = 'O Grande Marechal 🫡'}
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if(isGroup && fs.existsSync(`./database/funções/anagrama/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./database/funções/anagrama/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return enviar('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { dk.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/funções/anagrama/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `Você Mereceu Aqui Vai Um Bonus\nVocê ganhou ${xp} em *xp*`
enviar(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./database/funções/anagrama/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/funções/anagrama/anagrama-${from}.json`))
dk.sendMessage(from, {text:`
╭═─────── ⟮ ۝ ⟯ ───────═༻
┃               Descubra A Palavra 
┃
┃               ANAGRAMA: ${dataAnagrama2.embaralhada}
┃
┃               DICA: ${dataAnagrama2.dica}
╰──────── ⟮ ۝ ⟯ ─────────═༻
`}) 
}, 5000)
}}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if (isGroup) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
}
} catch (err) {
console.error(err)
}
}

dialogo = {
calma: `𝘊𝘢𝘭𝘮𝘢 𝘈𝘦 𝘑𝘢 𝘌𝘴𝘵𝘰𝘶 𝘌𝘯𝘷𝘪𝘢𝘯𝘥𝘰!`,
erro: `𝘌𝘪𝘵𝘢 𝘋𝘦𝘶 𝘌𝘳𝘳𝘰 𝘢𝘪!`,
admin: `𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘚𝘰́ 𝘗𝘢𝘳𝘢 𝘚𝘦𝘳𝘦𝘴 𝘚𝘶𝘱𝘦𝘳𝘪𝘰𝘳𝘦𝘴!`,
botadm: `𝘚𝘰́ 𝘗𝘰𝘴𝘴𝘰 𝘌𝘹𝘦𝘤𝘶𝘵𝘢𝘳 𝘚𝘦 𝘌𝘶 𝘍𝘰𝘳 𝘈𝘥𝘮`,
login: `𝘕𝘢̃𝘰 𝘈𝘤𝘩𝘦𝘪 𝘚𝘦𝘶 𝘓𝘰𝘨𝘪𝘯 𝘋𝘪𝘨𝘪𝘵𝘦 "${prefixo}𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰 "`,
grupo: `𝘊𝘰𝘮𝘢𝘥𝘰 𝘗𝘳𝘪𝘷𝘢𝘥𝘰 𝘚𝘰́𝘮𝘦𝘯𝘵𝘦 𝘌𝘮 𝘎𝘳𝘶𝘱𝘰𝘴!`,
semnull: `𝘋𝘪𝘨𝘪𝘵𝘦 "${prefixo + command}" "1" 𝘖𝘶 "0"`,
ativo: `𝘖𝘭𝘢́ "${pushname}" 𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 𝘍𝘰𝘪 "${command}" 𝘈𝘵𝘪𝘷𝘰 𝘊𝘰𝘮 𝘚𝘶𝘤𝘦𝘴𝘴𝘰!`,
desativo: `𝘖𝘭𝘢́ "${pushname}" 𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 "${command}" 𝘍𝘰𝘪 𝘋𝘦𝘴𝘢𝘵𝘪𝘷𝘢𝘥𝘰 𝘊𝘰𝘮 𝘚𝘶𝘤𝘦𝘴𝘴𝘰!`,
jaatv: `𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 𝘑𝘢 𝘌𝘴𝘵𝘢 𝘈𝘵𝘪𝘷𝘰!`,
jadstv: `𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 𝘑𝘢 𝘌𝘴𝘵𝘢 𝘋𝘦𝘴𝘢𝘵𝘪𝘷𝘢𝘥𝘰!`,
dono: `𝘚𝘰́ 𝘌𝘹𝘦𝘤𝘶𝘵𝘢𝘳𝘦𝘪 𝘌𝘴𝘴𝘦 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘚𝘦 𝘍𝘰𝘳 𝘔𝘦𝘶 𝘋𝘰𝘯𝘰 𝘘𝘶𝘦 𝘗𝘦𝘥𝘪𝘳!`,
toy: `𝘖𝘭𝘢́ "${pushname}" 𝘗𝘦𝘴𝘲𝘶𝘪𝘴𝘢𝘯𝘥𝘰 𝘈 𝘚𝘶𝘢 𝘍𝘪𝘹𝘢 𝘋𝘦 ${prefixo + command}`
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if(isGroup && isCmd) {
if(isFiltered(sender)) return enviar(`*Não floda...*`)
addFilter(sender)}
if (isGroup && isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem em grupo
${color(`Comando:`,`red`)} ${comando}
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} ${groupName}
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Dk
${color(`╰──────────────────────────────>`,`white`)}
`)
if (isGroup && !isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem em grupo
${color(`Comando:`,`red`)} Não
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} ${groupName}
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Dk
${color(`╰──────────────────────────────>`,`white`)}
`)

if (!isGroup && isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem no pv
${color(`Comando:`,`red`)} ${comando}
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} Não
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Dk
${color(`╰──────────────────────────────>`,`white`)}
`)

if (!isGroup && !isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem no pv
${color(`Comando:`,`red`)} Não
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} Não
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Dk
${color(`╰──────────────────────────────>`,`white`)}
`)

const enviargif = (videoDir, caption) => {
dk.sendMessage(from, {
video: fs.readFileSync(videoDir),
caption: caption,
gifPlayback: true
})
}

const enviarimg = (imageDir, caption) => {
dk.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

const enviarfig = async (figu, tag) => {
bla = fs.readFileSync(figu)
dk.sendMessage(from, {sticker: bla}, {quoted: info})
}

const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
dk.sendMessage(id, buttonMessage, {quoted: vr})
}

const sendBvidT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
video: {url: img1},
gifPlayback: true,
caption: text1,
footer: desc1,
templateButtons: but,
}
dk.sendMessage(id, templateMessage, {quoted: vr})
}

const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
dk.sendMessage(id, templateMessage, {quoted: vr})
}

const enviarImgB = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
dk.sendMessage(id, buttonMessage, {quoted: vr})
}

const enviartextB = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
buttons: but,
footer: desc1,
headerType: 4
}
dk.sendMessage(id, buttonMessage, {quoted: vr})
}

if (!isCmd && info.key.fromMe) return

switch (yniakami) {

case 'registro':
dk.sendMessage(from, { react: { text: `👑`, key: info.key }})               
sendBimgT(from, `${logo1}`, `Olá ${pushname} Você Deseja Fazer O Ligin No ${NomeBot} Bot, Se Sim Clique No Botão Abaixo`, "𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈", [
{index: 1, urlButton: {displayText: 'Numero Do Criador', url: 'https://wa.me/5511973664069'}},
{index: 5, quickReplyButton: {displayText: 'Fazer Login', id: `${prefixo}login`}}], selo2)
break

case 'login':
registros.push(sender)
fs.writeFileSync('./database/funções/usuarios/registros.json',JSON.stringify(registros))
enviar(dialogo.calma)
await delay(10000)
enviar(`
◥◣★◢◤
❴ ${tempo} ❵
❴ Login Feito Com Sucesso ❵

❴ Nome: ${pushname} ❵
❴ Número: ${sender.split('@')[0]} ❵
❴ Celular: ${info.key.id.length > 21 ? 'Android 😴' : info.key.id.substring(0, 2) == '3A' ? 'IOS 😑' : 'WhatsApp web 😅'} ❵
❴ Horário: ${time2} ❵
❴ Data: ${data} ❵

❴🥀❵ Parabéns Por Registrar-Se ❴🥀❵`)
break


case 'menu':
if (!isRegistro) return enviar(dialogo.login)
sendBimgT(from, `${logo1}`, menu(pushname, sender, NomeBot, patt, emoji, numeroDono, nomeDono, prefixo), "𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈", [
{index: 1, urlButton: {displayText: 'Numero Do Criador', url: 'https://wa.me/5511973664069'}},
{index: 5, quickReplyButton: {displayText: 'Forca', id: `${prefixo}!jogodaforca`}},
{index: 7, quickReplyButton: {displayText: 'Cassino', id: `${prefixo}cassino`}},
{index: 4, quickReplyButton: {displayText: 'Ping', id: `${prefixo}ping`}}], selo2)
break

//┈┈───╼┈┈───╼⊳⊰ Level ⊱⊲╾───┈┈╾───┈┈
case 'leveling':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')
if (args.length < 1) return enviar('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return enviar('*O recurso de nível já estava ativo antes*')
leveling.push(from)
enviar(dialogo.ativo)
fs.writeFileSync('./database/funções/usuarios/leveling.json', JSON.stringify(leveling))
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return enviar(`O recurso de level já está Desativado neste grupo.`)
leveling.splice(from, 1)
fs.writeFileSync('./database/funções/usuarios/leveling.json', JSON.stringify(leveling))
enviar(enviar.desativo)
} else {
enviar('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'level':
if (!isRegistro) return enviar(dialogo.login)
const getLevel = getLevelingLevel(sender)
sendBimg(from, `${logo4}`, `
╭╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
┃Nome:* : ${pushname}
┃Numero* : ${sender.split("@")[0]}
┃Patente:* : ${patt} 
┃Level* : ${getLevel} 
┃Xp* :  ${getLevelingXp(sender)}
╰╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾
`, "𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈", 
[
{buttonId: `null`, buttonText: {displayText: `𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈`}, type: 1}], selo2)
break

case 'ganharlevel':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')

if (!isRegistro) return enviar(dialogo.login)
addLevelingLevel(sender, 5000)
enviar("Olá chefe, foi adicionado 5000 mil Level para você 🙂")
break

case 'ganharxp':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')

if (!isRegistro) return enviar(dialogo.login)
addLevelingXp(sender, 5000)
enviar("Foi adicionado 5000 mil de XP para você 🙂")
break

//┈┈─────╼⊳⊰ Diversos ⊱⊲╾─────┈┈
case 'enquete':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')

if (!isRegistro) return enviar(dialogo.login)
enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
pollCreationMessage: {
options: [
{ optionName: 'NÃO' },
{ optionName: 'TALVEZ SIM'},
{ optionName: 'SIM'}, 
{ optionName: 'TALVEZ NÃO'}
],
name: `${q}`,
selectableOptionsCount: 0
}
}), { userJid: from })
await dk.relayMessage(from, enquete.message, { messageId: enquete.key.id})
break

case 'ping':
if (!isRegistro) return enviar(dialogo.login)
timestampe = speed();
latensie = speed() - timestampe
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
sendBimgT(from, `${logo3}`, `
┏━╼┈┈──╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾═༻
┃Ola Dk ${pushname} ${tempo}
┃Velocidade: ${latensie.toFixed(4)}
┃${!isGroup ? `Usuario: ${pushname}` :  `Grupo: ${groupName}`}
┃Tempo Ativo: ${runtime(uptime)}
┗━╼┈┈──╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾═༻
`, "〔 𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈 〕", [
{index: 1, urlButton: {displayText: 'Criador', url: 'https://wa.me/5511973664069'}},
{index: 2, quickReplyButton: {displayText: 'Atualizar', id: `${prefixo}ping`}},], selo2)
break

case 'reagir':
if (!isRegistro) return enviar(dialogo.login)
{
dk.sendMessage(from, { react: { text: `${reagir}`, key: info.key }})               
}
break

//┈┈─────╼⊳⊰ Recursos ⊱⊲╾─────┈┈
case 'serpremium':
case 'serprem':  
if (!isOwner) return enviar(dialogo.dono)
if (!isRegistro) return enviar(dialogo.login)
premium.push(`${numeroDono}@s.whatsapp.net`)
fs.writeFileSync('./database/funções/usuarios/premium.json', JSON.stringify(premium))
enviar(`Pronto ${numeroDono} você foi adicionado na lista premium.`)
break

case 'addpremium':
if (!isRegistro) return enviar(dialogo.login)
if (!isOwner) return enviar(dialogo.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return enviar("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./database/funções/usuarios/premium.json', JSON.stringify(premium))
dk.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return enviar("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./database/funções/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
dk.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`, mentions: [mentioned]}, {quoted: info})
}
break 

case 'delpremium':
if (!isOwner) return enviar(dialogo.dono)
if (!isRegistro) return enviar(dialogo.login)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return enviar("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./database/funções/usuarios/premium.json', JSON.stringify(premium))
dk.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return enviar("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./database/funções/usuarios/premium.json', JSON.stringify(premium))
dk.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break


case 'premiumlist':
if (!isRegistro) return enviar(dialogo.login)
tkks = '╭────⟮ Lista De Premium⟯ 👑\n'
for (let V of premium) {
tkks += `│ ⊱─⊳${V.split('@')[0]}\n`
}
tkks += `│ Total : ${premium.length}\n╰────*「 *${NomeBot}* 」*───═༻`
enviar(tkks.trim())
break
 

//┈┈─────╼⊳⊰ Figurinha ⊱⊲╾─────┈┈
case 'figurinha': case 's': case 'stickergifp': case 'figura': case 'f': case 'figu': case 'st': case 'stk': case 'fgif':
if (!isRegistro) return enviar(dialogo.login)
{
(async function () {
var legenda = q ? q?.split("/")[0] : `┈┈─╼⊳⊰ Solicitado Por:
┈┈─╼⊳⊰ Bot:
┈┈─╼⊳⊰ Dono:`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}
${NomeBot}
${NomeDono}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
dk.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
dk.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
enviar("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break

//┈┈─────╼⊳⊰ Grupo ⊱⊲╾─────┈┈
case 'repetir':
if (!isRegistro) return enviar(dialogo.login)
rsp = q.replace(new RegExp("[()+-/ +a/b/c/d/e/fghijklmnopqrstwuvxyz/]", "gi"), "")
enviar(rsp)
break

case 'calculadora': case 'calcular':  case 'calc':
if (!isRegistro) return enviar(dialogo.login)
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(rsp))
return enviar(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 

case 'nomegp':
if (!isRegistro) return enviar(dialogo.login)
blat = args.join(" ")
dk.groupUpdateSubject(from, `${blat}`)
dk.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp': case 'descriçãogp':  
if (!isRegistro) return enviar(dialogo.login)
blabla = args.join(" ")
dk.groupUpdateDescription(from, `${blabla}`)
dk.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp': case 'fotogp':  
addFilter(from)
if (!isGroup) return enviar('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser ADM')
if (!isBotGroupAdmins) return enviar('O bot Precisa ser ADM')
if (!isQuotedImage) return enviar(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await dk.updateProfilePicture(from, {url: medipp})
enviar(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp': case 'linkgroup':
linkgc = await dk.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
break

case 'totag': case 'cita': case 'hidetag':
if(!isGroup) return enviar('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return enviar('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
dk.sendMessage(from, options)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
dk.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
dk.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
dk.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
dk.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(budy){
if(q.length < 1) return enviar('Citar oq?')
dk.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
enviar(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcarwa':
try {
if (!isGroup) return enviar('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return enviar('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╼⊳⊰ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
dk.sendMessage(from, {text: teks}, {quoted: info})
} catch {
enviar('ERROR!!')
}
break

case 'rebaixar': case 'demote':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await dk.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) da lista de admins.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "200") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} Vacilo E Perdeu O Adm kkkk️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "404") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} não ta no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else dk.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

case 'promover': case 'promote':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Marque ou responda a mensagem de quem você quer promover')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await dk.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} Novo Adm Do gp️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsedm[0].status === "404") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} não ta no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else dk.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

case 'ban': case 'kick':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')
{
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responseb = await dk.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") dk.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else dk.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return enviar(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await dk.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
dk.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await dk.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") dk.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") dk.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") dk.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else dk.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
break

case 'add': case 'unkick': case 'reviver':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (!isGroupAdmins) return enviar('Você precisa ser adm')
if(!q && info.message.extendedTextMessage === null) return enviar('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return enviar(`Número inválido`)
let [result] = await dk.onWhatsApp(id)
if(!result) return enviar(`Esse número não está registrado no WhatsApp`)
let response = await dk.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
dk.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
dk.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
dk.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
dk.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
dk.sendMessage(from, {text: `Prontinho fiz o que você pediu`, mentions: [result.jid, sender]})
} else {
enviar("Vish acho que algo deu errado")
}
} catch {
}
break

//┈┈─────╼⊳⊰ BRINCADEIRAS ⊱⊲╾─────┈┈
case 'cassino':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
sendBimgT(from, `${logo3}`, `
╭═──── ⟮ ۝ ⟯ ────═༻
┣►       ${somtoy2}
╰──── ⟮ ۝ ⟯ ─────═༻

*${Vitória}*

`, "〔 𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈 〕", [{index: 1, urlButton: {displayText: 'Criador', url: 'https://wa.me/5511973664069'}},
{index: 2, quickReplyButton: {displayText: 'Cassino', id: `${prefixo}cassino`}},], selo2)
break

case 'anagrama':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (args.length < 1) return enviar('Ative pressione 1, Desativar pressione 0')
if(!isGroup) return enviar(dialogo.grupo)
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return enviar(dialogo.semnull)
if (args.join(' ') === '1') {
if(fs.existsSync(`./database/funções/anagrama/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/funções/anagrama/anagrama-${from}.json`))
enviar(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./database/funções/anagrama/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
dk.sendMessage(from, {text: `
╭═─────── ⟮ ۝ ⟯ ───────═༻
┃               Descubra A Palavra 
┃
┃               ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
┃
┃               DICA: ${palavrasANA[anaaleatorio].dica}
╰──────── ⟮ ۝ ⟯ ─────────═༻
`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./database/funções/anagrama/anagrama-${from}.json`)) return enviar('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./database/funções/anagrama/anagrama-${from}.json`)
enviar("desativado com sucesso")
}
break

case 'resetforca':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

if(!isPlayForca) return enviar(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
pla_pos = allForcaId.indexOf(sender)
forca.splice(pla_pos, 1)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
enviar(`*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando ${prefix}jogodaforca*`)
break
case 'forca':
if(!isPlayForca) return enviar(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
if(args.length < 1) return enviar(`*Dê o comando mais a letra para advinhar*`)
if(args[0].trim().length < 2) {
    p_pos = allForcaId.indexOf(sender)
    find = forca[p_pos].word.match(args[0].toLowerCase())
    is_correct = false 
    while(find != null) {
res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase())
forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase()
forca[p_pos].array_word[res_tmp] = 0
forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0)
find = forca[p_pos].word.match(args[0].toLowerCase())
is_correct = true
    }
    if(is_correct) {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
attempts = forca[p_pos].attempts
if(str_under == forca[p_pos].word_original) {
enviar(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
} else {
enviar(`*Você acertou!✅*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_\n*Você tem ${attempts} chances*`)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
}
    } else  {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
enviar(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
enviar(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
}
    }
} else {
    p_pos = allForcaId.indexOf(sender)
    if(forca[p_pos].word_original == args[0].toLowerCase()) {
attempts = forca[p_pos].attempts
enviar(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${forca[p_pos].word_original.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
    } else {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
enviar(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
enviar(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
}
    }
}
break

case 'jogodaforca':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (args.length < 1) return enviar('Ative pressione 1, Desativar pressione 0')
if(isPlayForca) return enviar(`*Termine a partida iniciada para jogar uma nova, ou dê o comando ${prefix}resetforca*`)
word_correct = (await randompalavra()).slice(1).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
under_word = '-'.repeat(word_correct.length)
forca.push({
    id: sender,
    word_original: word_correct,
    word: word_correct,
    under_word: under_word,
    array_word: Array.from(word_correct),
    array_under_word: Array.from(under_word),
    tam: word_correct.length,
    attempts: 6
})
fs.writeFileSync('database/funções/grupos/forca.json', JSON.stringify(forca, null, 2))
enviar(`*Jogo da forca iniciado!✅*\n\n*Palavra: ${under_word.split('').join(' ')}*\n*Para advinhar uma letra , dê o comando ${prefix}forca mais a letra*`)
break

case 'cartafofa':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
txt = body.slice(11)
txtt = args.join(" ")
txt1 = txt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return enviar('Cade o número da pessoa?')
if(!txtt) return enviar('Cade a mensagem do correio??')
if(txt.includes("-")) return enviar('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return enviar('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return enviar(`Exemplo: ${prefix + command} 5511973664069/𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈`)
bla = 
`
╭═──── ⟮ ۝ ⟯ ────═༻
┃     𝘊𝘰𝘳𝘳𝘦𝘪𝘰 𝘌𝘭𝘦𝘨𝘢𝘯𝘵𝘦
┃           ⟮💌⟯ 
┃𝘔𝘦𝘯𝘴𝘢𝘨𝘦𝘮: ${txt2}
╰═─── ⟮ ۝ ⟯ ─────═༻`
dk.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'carta':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
txt = body.slice(7)
txtt = args.join(" ")
txt1 = txt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return enviar('Cade o número da pessoa?')
if(!txtt) return enviar('Cade a mensagem do correio??')
if(txt.includes("-")) return enviar('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return enviar('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return enviar(`Exemplo: ${prefix + command} 5511973664069/𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈`)
bla = 
`
╭═──── ⟮ ۝ ⟯ ────═༻
┃     𝘝𝘰𝘤𝘦 𝘙𝘦𝘤𝘦𝘣𝘦𝘶 𝘜𝘮𝘢 𝘊𝘢𝘳𝘵𝘢
┃           ⟮📝⟯ 
┃𝘔𝘦𝘯𝘴𝘢𝘨𝘦𝘮: ${txt2}
╰═─── ⟮ ۝ ⟯ ─────═༻`
dk.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'gay':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')


rate = body.slice(5)
enviar(' ❰ Pesquisando a sua ficha de gay : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${logo2}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 2 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 4 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
await dk.sendMessage(from, {image: wew, caption: 'O Quanto Você É Gay?\nVocê é: '+random+'% gay 🏳️‍🌈\n'+bo+' ', thumbnail:null}, {quoted: selo2})
}, 7000)
break

case 'feio':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(6)
enviar(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${logo5}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 

await dk.sendMessage(from, {image: wew, caption: '  O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' '}, {quoted: info})
 }, 7000)
break 

case 'matar':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${logo4}`)
await dk.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp}, {quoted: info})
break 

case 'corno':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(7)
enviar(dialogo.toy)
setTimeout(async() => {
wew = await getBuffer(`${logo2}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dk.sendMessage(from, {image: wew, caption: '  O quanto você é corno? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱  corno 🐃'}, { quoted: info})
}, 7000)
break

case 'vesgo':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(7)
enviar(dialogo.toy)
setTimeout(async() => {
wew = await getBuffer(`${logo6}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dk.sendMessage(from, {image: wew, caption: 'O quanto você é vesgo? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  Vesgo 🙄😆'}, {quoted: info})
}, 7000)
break 

case 'bebado':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(7)
enviar(dialogo.toy)
setTimeout(async() => {
wew = await getBuffer(`${logo5}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dk.sendMessage(from, {image: wew, caption: 'O quanto você é bebado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ Bêbado 🤢🥵🥴'}, {quoted: info})
}, 7000)
break 

case 'gado':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(6)
enviar(dialogo.toy)
setTimeout(async() => {
wew = await getBuffer(`${logo4}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dk.sendMessage(from, {image: wew, caption: 'O quanto você é gado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gado 🐂'}, {quoted: info})
}, 7000)
break 

case 'gostoso':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(9)
enviar(dialogo.toy)
setTimeout(async() => {
wew = await getBuffer(`${logo3}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dk.sendMessage(from, {image: wew, caption: '  O quanto você é gostoso? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ gostoso 😝', gifPlayback: true}, {quoted: info})
}, 7000)
break 

case 'gostosa':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(9)
enviar(dialogo.toy)
setTimeout(async() => {
wew = await getBuffer(`${logo2}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dk.sendMessage(from, {image: wew, caption: 'O quanto você é gostosa? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gostosa 😳'}, {quoted: info})
}, 7000)
break

case 'beijo':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${logo4}`)
await dk.sendMessage(from, {video: wew, gifPlayback: true, caption: susp}, {quoted: info})
break

case 'tapa':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${logo5}`)
await dk.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp}, {quoted: info})
break

case 'chute': case 'chutar':  
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('marque o alvo que você quer dá um chute')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} [🩸]` 
jry = await getBuffer(`${logo6}`)
await dk.sendMessage(from, {video: jry, gifPlayback: true, caption: susp}, {quoted: info})
break 

case 'dogolpe':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')
if (args.length < 1) return await dk.sendMessage(from, {text: 'coloca um nome'}, {quoted: info})
pkt = body.slice(9)
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
enviar(jpr)
break

case 'shipo':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

teks = args.join(" ")
if(teks.length < 10) return enviar('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Q Fofo.... Eu Shipo eles 2*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Q Fof.... Eu Shipo eles 2*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'nazista':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

rate = body.slice(9)
enviar(dialogo.toy)
setTimeout(async() => {
wew = await getBuffer(`${selo2}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await dk.sendMessage(from, {image: wew, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'}, {quoted: info})
}, 7000)
break 

case 'rankgay':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break

case 'rankgado': case 'rankgados':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break

case 'rankcorno': case 'rankcornos':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NomeBot} ⚡`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rankgostosos': case 'rankgostoso':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosas': case 'rankgostosa':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'ranknazista':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

try{
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')


membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
mentions(ytb, membr, true)
break

case 'rankpau':
if (!isRegistro) return enviar(dialogo.login)
if (!isGroup) return enviar('Só em Grupo')

membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

default:

if (budy.includes('prefixo') || (budy.includes('Prefixo'))){
enviar(`𝘖𝘭𝘢́ "${pushname}" 𝘘𝘶𝘦 𝘓𝘦𝘨𝘢𝘭 𝘝𝘦𝘳 𝘕𝘰𝘷𝘢𝘴 𝘗𝘦𝘴𝘴𝘰𝘢𝘴 𝘗𝘰𝘳 𝘈𝘲𝘶𝘪\n𝘉𝘰𝘮 𝘔𝘦𝘶 𝘗𝘳𝘦𝘧𝘪𝘹𝘰 𝘦́ "${prefixo}" 𝘋𝘪𝘨𝘪𝘵𝘦 𝘌𝘹𝘦𝘮𝘱𝘭𝘰 "${prefixo}𝘮𝘦𝘯𝘶"`)
}

if (budy.includes('Oi') || (budy.includes('oi'))){
enviar(`Olá "${pushname}" Como Você Esta?`)
}

if (budy.includes('Estou Bem') || (budy.includes('estou bem'))){
enviar(`Que Bom Que Você Esta Bem!`)
}

if (budy.includes('Dk') || (budy.includes('dk'))){
enviar(`O Dk Domina Saporra Man!`)
}

if (budy.includes(`${NomeBot}`) || (budy.includes(`${NomeBot}`))){
enviar(`Oii "${pushname}" Estou Aqui!`)
}

if (isCmd){
dk.sendMessage(from, {text: `╭⊰᯽⊱┈────╌ ✯ ╌────┈⊰᯽⊱\n┃Olá "${pushname}"\n┃Não Achei Este Comando\n┃Clique No Botão Abaixo\n┃Ou digite "${prefixo}menu"\n┃Data Do Erro: ${data}\n╰⊰᯽⊱┈────╌ ✯ ╌────┈⊰᯽⊱`, footer: '𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 𝘍𝘮𝘭 😈', buttons: [{buttonId: '${prefixo}menu', buttonText: {displayText: 'Menu'}, type: 1}, ]}, {quoted: info})
return
}



switch(ants){
} 


}
} catch (e) {
console.log(e)
}
})
}
startyniakami()
/*
❴ Dk No Controle Fml ❵
*/