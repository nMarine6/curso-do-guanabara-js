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
        res.innerHTML = `<p>${age}</p>`
    }
}