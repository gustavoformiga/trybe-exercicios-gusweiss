function ex(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      reject(new Error('Informe apenas números'))
    } else {
      const resultado = ((a+b) * c);
      if (resultado < 50) {
        reject(new Error('valor muito baixo'));
      }
      resolve(resultado);
    }
  })
  return promise;
};

console.log(ex(10,10,10));
console.log(ex(1,1,1));