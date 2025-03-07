const calculadora = require("../models/calculadora.js");

test("somar 1 + 1 deve ser 2", () => {
  const resultado = calculadora.somar(1, 1);
  console.log("soma correta");
  expect(resultado).toBe(2);
});

test("somar com type !== 'number'", () => {
  const resultado = calculadora.somar("1", 1);
  console.log("Valor não numerico informado");
  expect(resultado).toBe("Erro");
});
