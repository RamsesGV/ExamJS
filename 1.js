// Responde las siguientes preguntas en la sección de comentarios:
//¿Qué es una variable y para qué sirve?
//Para almacenar un dato en la memoria ram, es practicamente una caja almacenadora

//¿Cuál es la diferencia entre declarar e inicializar una variable?
// cuando la declaras es var ramses;
//inicializar es darle valor var ramses = 1

//¿Cuál es la diferencia entre sumar números y concatenar strings?
//sumar numeros es lo que es una simple suma 
//concatenar strings es para juntar 2 strings en una sola linea de texto

//¿Cuál operador me permite sumar o concatenar?
// "+"

let Nombre = 'Ramses'
let Apellido = 'Garay'
let NombredeusuarioenPlatzi = 'lordSith'
let Edad = 24
let Correoelectrónico = 'senkustone15@gmail.com'
let Mayordeedad = true
let Dineroahorrado = 10000
let Deudas = 5000

const nombreCompleto = (a) => console.log(`${Nombre} ${Apellido}`);

const DineroReal = () => console.log(Dineroahorrado - Deudas)

/*
 Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
una funcion es un metodo que se utiliza para automatizar tareas
o hacer cosas que se repiten de manera mas rapida y no repetitiva

¿Cuándo me sirve usar una función en mi código?
normalmente siempre te va servir cuando tengas que hacer una operacion 
matematica o en alguna pagina wweb que tengas que dar el nombre y el apellido
de cada usuario es mas facil invocar una funcion que hacer el codigo 
por cada usuario 

¿Cuál es la diferencia entre parámetros y argumentos de una función?


*/

/*
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");




*/

const NombreCompletito = (n,a,nic) => console.log( `Mi nombre es ${n} ${a} pero prefiero que me digas ${nic}`)

/* 

Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
son los conocidos if swith while ayudan en nuestro codigo a realizar una tarea dependiendo de lo que pase 

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if swith while  
"if": La estructura "if" se utiliza para ejecutar un bloque de código si se cumple una condición determinada. 

"switch": La estructura "switch" se utiliza para ejecutar diferentes bloques de código según el valor de una expresión.

while": La estructura "while" se utiliza para ejecutar un bloque de código mientras se cumple una condición determinada.
¿Puedo combinar funciones y condicionales?



*/

/* 

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;

}

*/
const tipoDeSuscripcion = 'Basic'
const mensaje = tipoDeSuscripcion === 'Free' ? 'Solo Puedes Tomar los curso gratis' : 
                tipoDeSuscripcion === 'Basic' ? "Puedes tomar casi todos los cursos de Platzi durante un mes":
                tipoDeSuscripcion === 'Expert' ? 'Puedes tomar casi todos los curso de platzi durante un anio': 
                tipoDeSuscripcion === 'ExpertPlus'? '"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"':
                console.log(mensaje)
                   

    




const tipodesuscripcion  =  { 
    free:'Solo Puedes Tomar los curso gratis',
    basic:'puedes tomar casi todos 1 mes',
    expert:'tomar casi todos 1 anio',
    expertplus: 'tu y alguien mas 1 anio'

}

tipodesuscripcion.hasOwnProperty('basic') ? console.log('puedes tomar casi todos 1 mes'): console.log('tu suscripcion no fue reconocida')

/* 

Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
un ciclo permite recorrer arrays obejtos, ademas de que podemos repetir una tarea infinitas veces o la veces que determinemos 

¿Qué tipos de ciclos existen en JavaScript?
for 
while
 y do while


¿Qué es un ciclo infinito y por qué es un problema?
puede dar un error incluso parar tu pc, truncarias el programa. 

¿Puedo mezclar ciclos y condicionales?
por supuesto que si 

*/

/*
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


*/



while (i<5) { 
    console.log('el valor de i es ' + i)
    i++
}
let i = 2
while(i >=2 ) { 
    console.log('el valor de i es ' + i)
    i--
}

const  SumaPregunta = () =>  { 
   const respuestaUsuario = prompt('cuanto es 2 mas 2') 
    const respuestaCorrecta = '4'
   const respuesta =  respuestaUsuario === respuestaCorrecta ? 'correcto' : 'incorrecto'
    console.log(respuesta)
}


