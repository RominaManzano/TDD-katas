// Función que reciba una lista de números, y nos devuelva el mayor
const getMaxFromList = numbers => numbers.length > 0 ? Math.max(...numbers) : null;

// Función para validar si un número es par
const isPair = number => Number.isInteger(number) ? (number % 2 === 0) : null

// Función que valide un password (sólo longitud y que sea alfanumérico)

// Función que reciba una lista de números que pueden ser repetidos pero no consecutivos

// Función que haga/simule un fetch y devuelva la data esperada

// Función que reciba un array y valide si todos sus elementos son números 
const checkArray = exampleArray => {
  const regex = /^[0-9\b]+$/;
  let result = '';

  exampleArray.forEach(
    exampleAr => {
      if (regex.test(exampleAr)) {
        result = 'yes'
      } else {
        result = 'no'
      }
    }
  );

  return result ? result : null;
};

// Función que divida un string en un array

module.exports = {
  getMaxFromList,
  isPair,
  checkArray,
};