function veri(){
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector('input#fyear')
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert('DEU ERRO, TU É BURRO?')
    } else {
        var fgen = document.getElementsByName('radgen')
        var age = year - Number(fyear.value)
        var img = document.createElement(img)
        img.setAttribute('id', 'foto')
        
        res.innerHTML = `<p>${age}</p>`

        var gender = ''

        if (fgen[0].checked) {
            gender = 'Homem'
            if (age < 31) {
                img.setAttribute('src', 'masc20y.png')
            } else if (age < 41) {
                img.setAttribute('src', 'masc30y.png')
            } else if (age < 51) {
                img.setAttribute('src', 'masc40y.png')
            } else if (age < 61) {
                img.setAttribute('src', 'masc50y.png')
            } else if (age < 71) {
                img.setAttribute('src', 'masc60y.png')
            } else {
                img.setAttribute('src', 'masc70y.png')
            }
        } else if (fgen[1].checked) {
            gender = 'Mulher'
            if (age < 31) {

            } else if (age < 41) {

            } else if (age < 51) {

            } else if (age < 61) {

            } else if (age < 71) {

            } else {

            }
        }
        res.innerHTML = `Achamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}