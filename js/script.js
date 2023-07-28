import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => { 
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
    displayInterpretationIMC(result)
    
} // arrow function!

const displayInterpretationIMC = (result) => {

    switch (true) {
        case result <= 18.5:
            const underWeight = `Está abaixo do peso!`
            Modal.interpretationIMC.innerHTML = underWeight
            break;
        case result <= 24.9:
            const idealWeight = `Está no peso ideal`
            Modal.interpretationIMC.innerHTML = idealWeight
            break;
        case result <= 29.9:
            const slightlyOverweight = `Está levemente acima do peso`
            Modal.interpretationIMC.innerHTML = slightlyOverweight
            break;
        case result <= 34.9:
            const degreeObesity = `Obesidade grau I`
            Modal.interpretationIMC.innerHTML = degreeObesity
            break;
        case result <= 39.9:
            const degreeObesityII = `Obesidade grau II(severa)`
            Modal.interpretationIMC.innerHTML = degreeObesityII
            break;
        default:
            const degreeObesityIII = `Obesidade grau III(mórbida)`
            Modal.interpretationIMC.innerHTML = degreeObesityIII
            break;
    }
}

const displayResultMessage = result => {
    const message = `SEU IMC É: ${result}`
    
    Modal.message.innerHTML = message
    
    Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()