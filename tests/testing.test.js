test("Test 1", call_back_function);
function call_back_function() {
  console.log("essa linha ta sendo chamada?");
}

test("Test 2", function () {
  console.log("será que funciona?");
});

test("Test 3", () => console.log("isso deve funcionar"));

test("espero que 1 seja 1", () => {
  expect(1).toBe(1);
});
