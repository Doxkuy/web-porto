import * as THREE from 'three/webgpu'

const text = `
██████╗  █████╗ ███╗   ██╗██████╗ ██╗   ██╗
██╔══██╗██╔══██╗████╗  ██║██╔══██╗╚██╗ ██╔╝
██║  ██║███████║██╔██╗ ██║██║  ██║ ╚████╔╝ 
██║  ██║██╔══██║██║╚██╗██║██║  ██║  ╚██╔╝  
██████╔╝██║  ██║██║ ╚████║██████╔╝   ██║   
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝    ╚═╝   
                                           
 █████╗ ██████╗ ███╗   ██╗ █████╗ ██╗     ██████╗  ██████╗ 
██╔══██╗██╔══██╗████╗  ██║██╔══██╗██║     ██╔══██╗██╔═══██╗
███████║██████╔╝██╔██╗ ██║███████║██║     ██║  ██║██║   ██║
██╔══██║██╔══██╗██║╚██╗██║██╔══██║██║     ██║  ██║██║   ██║
██║  ██║██║  ██║██║ ╚████║██║  ██║███████╗██████╔╝╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝ 

╔═ Intro ═══════════════╗
║ Terima kasih telah mengunjungi portofolio saya!
║ Saya adalah Spesialis API Pentesting & OSINT yang aktif dalam Bug Bounty.
╚═══════════════════════╝

╔═ Kontak ══════════════╗
║ Email          ⇒ dandyarnaldo65@gmail.com
║ GitHub         ⇒ https://github.com/Doxkuy
╚═══════════════════════╝

╔═ Keahlian ════════════╗
║ - API Penetration Testing
║ - Open Source Intelligence (OSINT)
║ - Bug Bounty Hunting
║ - Web Security Assessment
╚═══════════════════════╝

╔═ Riwayat ═════════════╗
║ Pernah menguji sistem keamanan:
║ Nasa, Traveloka, Microsoft, Google Gemini, 
║ Copilot AI, Bank BCA, Bank Mandiri, Bank BRI, 
║ Kledo, dan Instansi Pemerintahan Indonesia.
╚═══════════════════════╝

╔═ Masa Lalu ═══════════╗
║ Pernah terjun dalam Dunia Blackhat.
║ Sekarang fokus membantu meningkatkan keamanan digital.
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]