const mathOperations = require("../calculator");

// describe --> its a collections similar tests
describe("calculation tests", () => {
  test("adding 1 + 3 should give 4", () => {
    //expect() --> actual output
    //toBe() --> expected output
    expect(mathOperations.sum(1, 3)).toBe(4);
  });
  test("adding 1 + 3 should not give 5", () => {
    expect(mathOperations.sum(1, 3)).not.toBe(5);
  });
});
