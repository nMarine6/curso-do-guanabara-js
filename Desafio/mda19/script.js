var systime = new Date()
var hours = systime.getHours()
var compli = document.getElementsByTagName("div")[0]
var tips = document.getElementsByTagName("div")[1]
var img = document.querySelector('img#img')

if (hours < 6) {
    compli.innerHTML = `<h2>Boa Madrugada!</h2>`
    tips.innerHTML = `<h3>São ${hours} horas agora.</h3>`

    img.src = 'images/madrugada.png'
    document.body.style.background = '#261F25'
} else {
    if (hours < 12) {
        compli.innerHTML = `<h2>Bom Dia!</h2>`
        tips.htmlHTML = `<h3>São ${hours} horas agora.</h3>`

        img.scr = 'images/manhã.png'
        document.body.style.background = '#F2B988'
    } else {
        if (hours < 18) {
            compli.innerHTML = `<h2>Boa Tarde!</h2>`
            tips.innerHTML = `<h3>São ${hours} horas agora.</h3>`

            img.src = 'images/tarde.png'
            document.body.style.background = '#D98C5F'
            
        } else {
            compli.innerHTML = `<h2>Boa Noite!</h2>`
            tips.innerHTMl = `<h3>São ${hours} horas agora.</h3>`

            img.src = 'images/noite.png'
            document.body.style.background = '#0B2626'
        }
    }
}