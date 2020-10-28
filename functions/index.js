// Función que reciba una lista de números, y nos devuelva el mayor
const getMaxFromList = numbers => numbers.length === 0 ? null : Math.max(...numbers);

// Función para validar si un número es par

// Función que valide un password (sólo longitud y que sea alfanumérico)

// Función que reciba una lista de números que pueden ser repetidos pero no consecutivos

// Función que haga/simule un fetch y devuelva la data esperada
const axios = require('axios');
const getTodo = () => axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(res=>res.data)

// Función que reciba un array y valide si todos sus elementos son números 

// Función que divida un string en un array

module.exports = {
  getMaxFromList,
  getTodo
};
