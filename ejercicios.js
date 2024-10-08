console.log("We era conected my bro")

let exercise_number = parseInt(prompt("ingresa el numero de ejercicio a probar"))

// counterHello()

// 1.  Hacer un programa que reciba 2 números del usuario y los sume.

if (exercise_number === 1) {
  let first_num = 0
  let second_num = 0
  let result = 0

  first_num = prompt("Ingresa el primer numero")
  second_num = prompt("Ingresa el segundo numero")

  result = parseInt(first_num) + parseInt(second_num)

  alert("El reslutado de " + first_num + " + " + second_num + " es " + result)
}



//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'

if (exercise_number === 2) {
  let user_name = "";

  user_name = prompt("Ingresa tu nombre")

  user_name !== "" ? alert("Hola " + user_name) : alert("Hola")
}


//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.

if (exercise_number === 3) {
  // Pedimos al usuario que ingrese un número
  let numero = prompt("Ingrese un número entero:");


  numero = parseInt(numero);

  if (numero) {
    for (let i = 0; i < numero; i++) {3
      alert(i);
    }
  } else {
    alert("Por favor, ingrese un número entero válido.");
  }
}


//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.

if (exercise_number === 4) {
  let texto;

  do {
    texto = prompt("Por favor, ingresa un texto:");
  } while (texto === null || texto.trim() === "");

  alert("¡Gracias por ingresar el texto! " + texto);
}


//5. Hacer un programa que muestre los días de la semana.

if (exercise_number === 5) {
  let arrayDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]

  arrayDays.forEach((day) => {
    alert("Día " + day)
  })
}

//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.
if (exercise_number === 6) {
  
  let numero1 = prompt("Ingrese el primer número:");

  numero1 = parseInt(numero1);

  let numero2 = prompt("Ingrese el segundo número:");

  numero2 = parseInt(numero2);

  // Calculamos la suma y la resta
  let suma = numero1 + numero2;
  let resta = numero1 - numero2;

  // Mostramos los resultados por consola
  alert("La suma entre " + numero1 + " y " + numero2 + " es: " + suma);
  alert("La resta entre " + numero1 + " y " + numero2 + " es: " + resta);

}

//7. Hacer una función que reciba un nombre, si existe nombre saludar por nombre de otra manera saludar 'Hola, desconocido'.

if (exercise_number === 7) {
  let nombre_ingresado = prompt("Ingresa tu Nombre")

  let lista_de_nombres = ["Jesus", "Maria", "Catalina", "Andres", "Paola"]

  function saludar() {
    if (lista_de_nombres.includes(nombre_ingresado)) {
      alert("¡Hola, " + nombre_ingresado + "!");7
    } else {
      alert("Hola, desconocido.");
    }
  }

  saludar()
}