function gebi(id){
    return document.getElementById(id)
}


function multiplicar() {
    for (let i = 1; i <= 6; i++) {
        let valorN1 = parseInt(gebi(`n${i}`).value);
        let valorN2 = parseInt(gebi(`n${i + 6}`).value);
        gebi(`resultado${i}`).value = valorN1 * valorN2;
    }
}
