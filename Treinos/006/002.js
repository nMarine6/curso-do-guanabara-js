var horas = 0

if (horas < 6) {
    console.log('Boa Madrugada')
} else {
    if (horas < 12) {
        console.log('Bom Dia')
    } else {
        if (horas < 18) {
            console.log('Boa Tarde')
        } else {
            console.log('Boa Noite')
        }
    }
}