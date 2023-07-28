// object literals 
export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title .resultIMC'),
    interpretationIMC: document.querySelector('.modal .title .interpretation'),
    buttonClose: document.querySelector('.modal button.close'),

    // function
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    },
}

Modal.buttonClose.onclick = () => Modal.close() // arrow function!

window.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        Modal.close()
    }
})