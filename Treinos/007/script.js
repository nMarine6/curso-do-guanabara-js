var systime = new Date()
var hours = systime.getHours()

var compli = document.getElementsByTagName("div")[0]

var tips = document.getElementsByTagName("div")[1]

if (hours < 6) {
    compli.innerHTML = `<h2>Boa Madrugada!</h2>`

    tips.innerHTML = `<h3>VAI DORMIR CARALHO!</h3>`
} else {
    if (hours < 12) {
        compli.innerHTML = `<h2>Bom Dia!</h2>`

        tips.htmlHTML = `<h3>Boa hora para começar a estudar... Fora da escola.</h3>`
    } else {
        if (hours < 18) {
            compli.innerHTML = `<h2>Boa Tarde!</h2>`

            tips.innerHTML = `<h3>Momento mais paia do dia...</h3>`
        } else {
            compli.innerHTML = `<h2>Boa Noite!</h2>`

            tips.innerHTMl = `<h3>Você não vai virar a madrugada... Vai?</h3>`
        }
    }
}