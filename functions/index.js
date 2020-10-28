// Función que reciba una lista de números, y nos devuelva el mayor
const getMaxFromList = numbers => numbers.length > 0 ? Math.max(...numbers) : null;

// Función para validar si un número es par
const isPair = number => Number.isInteger(number) ? (number % 2 === 0) : null

// Función que valide un password (sólo longitud y que sea alfanumérico)
const verifyPassword = password => {
  const checkLength = stringPassword => stringPassword.length >= 8 ? true : false;

  const checkAlpha = stringPassword =>
    stringPassword.match(/([a-z]+[0-9])|([0-9]+[a-z])/i) ? true : false;

  if (password && checkAlpha(password) && checkLength(password)) return true;
  else return false;
};

// Función que reciba una lista de números que pueden ser repetidos pero no consecutivos

// Función que haga/simule un fetch y devuelva la data esperada
const axios = require('axios');
const getTodo = () => axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(res=>res.data)

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
  getTodo,
  isPair,
  checkArray,
  verifyPassword,
};
