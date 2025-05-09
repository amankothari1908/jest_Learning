//setups and cleaning methods
// 2 --> In test suit, "beforeEach()" statements, this will run before each test runs in describe and
// "afterEach()" vice versa.
// 2 --> In test suit, "beforeAll()"" statements, this will run only once before test in describe and
// "afterAll()" vice versa.

const mathOperations = require("../calculator");

describe("Calculator tests", () => {
  var input1 = 0;
  var input2 = 2;

  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  test("Adding", () => {
    expect(mathOperations.sum(input1, input2)).toBe(2);
  });

  test("diff", () => {
    expect(mathOperations.diff(input1, input2)).toBe(-2);
  });
});
