
// seleccionamos las equiquetas de nuestro html dentro de variables para poder trabajar en ellas 
const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

console.log(input.value)
console.log(h1)
//buen metodo para mostrar varias cosas en consola
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})
//innerHTML nos permite modificar la etiqueta que estemos seleccionando
h1.innerHTML = 'Patito <br> feo'

//h1.setAttribute('pantalla','sony')
//console.log(h1.getAttribute('pantalla'))
//mas facil utilizando clases .add agrega .remove elimina
h1.classList.add('rojo')
h1.classList.remove('verde')

//h1.classlist.toggle('verde')
//h1.classlist.contains('verde')
//en los input agregamos un valor por defecto con input.value
input.value = '456'

/*
declaramos una variable para poder crear y agregar una imagen
(o cualquier tipo de etiqueta o elemento dentro de nuestro html)
en este caso img es = a (agregamos el metodo) document.createElement('img)
el set atribute determinara el valor osea lo que contiene tu etiqueta img
mas abajo utilizamos pid.innerText para borrar el texto que contenia 
por eso mismo es igual a una string vacia 
una vez configurada nuestra etiqueda img 
la agregamos a nuestro documento html y listo los usuarios podran ver los cambios
*/

const img = document.createElement('img')
img.setAttribute('src','https://images.pexels.com/photos/12996613/pexels-photo-12996613.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load.png')
console.log(img);
pid.innerText = ('')
pid.append(img)

