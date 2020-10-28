// Función que reciba una lista de números, y nos devuelva el mayor
const getMaxFromList = numbers => numbers.length > 0 ? Math.max(...numbers) : null;

// Función para validar si un número es par
const isPair = number => Number.isInteger(number) ? (number % 2 === 0) : null

// Función que valide un password (sólo longitud y que sea alfanumérico)

// Función que reciba una lista de números que pueden ser repetidos pero no consecutivos
const repeatedNotConsecutive = data => {
  let valid = false;
  for (let index = 0; index < data.length; index++) {
    if (index >= 1) {
      if (data[index] === data[index - 1]) {
        valid = true;
        break;
      }
      else {
        valid = false;
      }
    } else {
      valid = false;
    }
  }
  return valid;
}

// Función que haga/simule un fetch y devuelva la data esperada

// Función que reciba un array y valide si todos sus elementos son números 

// Función que divida un string en un array

module.exports = {
  getMaxFromList,
  isPair,
  repeatedNotConsecutive
};