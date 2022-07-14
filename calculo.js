let esfericoEsquerdo = document.querySelector('#esfericoEsquerdo')
let esfericoDireito = document.querySelector('#esfericoDireito')
let cilindricoEsquerdo = document.querySelector('#cilindricoEsquerdo')
let cilindricoDireito = document.querySelector('#cilindricoDireito')
let buttonCalcular = document.querySelector('#buttonCalcular')
let inputs = document.querySelectorAll('.input')
let result = document.querySelector('#result')
let random = document.querySelector('#random')

function Verificador() {
    let control = true
    inputs.forEach(item => {
        if (item.value == '') {
            control = false
        }
    })
    return control
}

function Calculo() {
    let esferico = esfericoDireito.valueAsNumber + esfericoEsquerdo.valueAsNumber
    let cilindrico = cilindricoDireito.valueAsNumber + cilindricoEsquerdo.valueAsNumber
    console.log(esferico, cilindrico)
    if ((esferico + cilindrico) == 0) {
        return `Parabens, sua visão está ótima`
    }
    if (cilindrico == 0) {
        if (esferico <= -3 && esfericoDireito.valueAsNumber >= -12 && esfericoEsquerdo.valueAsNumber >= -12) {
            return 'Suas lentes são a Prime'
        }
    }else if (cilindrico <= -0.25 && (cilindricoDireito.valueAsNumber >= -2 && cilindricoEsquerdo.valueAsNumber >= -2)) {
        if (esferico <= -3 && esfericoDireito.valueAsNumber >= -10 && esfericoEsquerdo.valueAsNumber >= -10) {
            return 'Suas lentes são a Prime'
        }
    }
    if (cilindricoDireito.valueAsNumber >= -5 && cilindricoEsquerdo.valueAsNumber >= -5) {
        return 'Suas lentes são a Vision'
    }
    return 'Sem lentes para você'

}

inputs.forEach(item => {
    item.onchange = () => {
        if (Verificador()) {
            buttonCalcular.removeAttribute('disabled')
        } else {
            buttonCalcular.setAttribute('disabled', 'disabled')
        }
    }
})

buttonCalcular.onclick = () => {
    result.innerHTML = Calculo()
}

random.onclick = () => {
    esfericoDireito.value = Math.floor(Math.random() * -15)
    esfericoEsquerdo.value = Math.floor(Math.random() * -15)
    cilindricoDireito.value = Math.floor(Math.random() * -6)
    cilindricoEsquerdo.value = Math.floor(Math.random() * -6)

    buttonCalcular.removeAttribute('disabled')
}