// Función que reciba una lista de números, y nos devuelva el mayor
const getMaxFromList = numbers => numbers.length === 0 ? null : Math.max(...numbers);

// Función para validar si un número es par

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

// Función que reciba un array y valide si todos sus elementos son números 

// Función que divida un string en un array

module.exports = {
  getMaxFromList,
  verifyPassword,
};