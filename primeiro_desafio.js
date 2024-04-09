const precoCombustivel = 5.79;
const GastoMedioKML = 10;
const distanciaKM = 100;

const Litrosconsumidos = distanciaKM / GastoMedioKML;
const valorgasto = Litrosconsumidos * precoCombustivel;
console.log(valorgasto);


