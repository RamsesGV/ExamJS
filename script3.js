//declaramos nuestras eqtiquetas para poder manejarlas
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const button = document.querySelector('#btncalcular')
const resultado1 = document.querySelector('#resultado')
const form = document.querySelector('#form')


//esta funcion guarda el resultado de los 2 inputs en una constante, una vez hecho este calculo, agregaremos a nuestro HTML el resultado de los 2 inputs
//esto solo sucedera al momento en el que el usuario le de click al boton. 
const sumarInputsValues = (event) => {console.log({event}); event.preventDefault() ;const sumaInputs = parseInt(input1.value) + parseInt(input2.value); resultado1.innerText = 'Resultado :' + sumaInputs}

form.addEventListener('submit',sumarInputsValues);