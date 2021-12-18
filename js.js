let $ = document
let locationKey = document.querySelector('#location')
let titleKey = document.querySelector('.title')
let keyCodeElem = $.getElementById('keyCode')
let keyElem = $.getElementById('key')
let whichElem = $.getElementById('which')
let codeElem = $.getElementById('code')
let locationElem = $.getElementById('location')





document.body.addEventListener('keydown', function(event){
    event.preventDefault()

    starter.style.display = 'none'
    ascii.style.display = 'flex'
    heading.style.display = 'flex'
    infos.style.display = 'flex'

    let eventKeyCode = event.keyCode
    let eventKey = event.key
    let eventWhich = event.which
    let eventCode = event.code
    let eventLocation = event.location

    keyCodeElem.innerHTML = eventKeyCode
    keyElem.innerHTML = eventKey
    whichElem.innerHTML = eventWhich
    codeElem.innerHTML = eventCode
    locationElem.innerHTML = eventLocation

})


