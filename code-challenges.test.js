// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Jest template
// describe ("functionNameHere", () => {
//   it ("description of what the test function does/expected to do", () => {
//     expect(functionNameHere(functionArgument)).toEqual(expected output here)
//   })
// })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


// a) Create a test with an expect statement using the variable provided.
describe("hitchhikersGuide", () => {
  it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(hitchhikersGuide(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: hitchhikersGuide is not defined

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Declare new function hitchhikersGuide that takes in arrays
const hitchhikersGuide = (arr) => {
  // .Map over the array to access the object.
  return arr.map(
    // Object.name to access the name within the object, use split to create an array from the name string.
    (object) => `${object.name.split(" ").map((name) => 
    // Use slice to cut the first char of the first and last night and toUpperCase to capitalize the first char. Then use join to bring the string back together and display through string interpolation the name and sentence about them returned.
    name.slice(0, 1).toUpperCase() + name.slice(1)).join(" ")} is ${object.occupation}.`
  );
};

// Test Pass! This was definitely the hardest of the three to do. Running map and then mapping again on the object was the biggest blocker for me I'd say.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remOf3", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remOf3(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(remOf3(hodgepodge2)).toEqual([2, 1, -1])
  })
})


// b) Create the function that makes the test pass.

// Declare function remOf3 that takes an array
const remOf3 = (array) => {
  // use .filter to identify the numbers and use .map to then return only the remainders of the numbers when divided by three
  return array.filter((value) => typeof value === "number").map((value) => value % 3)
}
// console.log(remOf3(hodgepodge1))
// console.log(remOf3(hodgepodge2))

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumOfNumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(sumOfNumCubed(cubeAndSum1)).toEqual(99)
    expect(sumOfNumCubed(cubeAndSum2)).toEqual(1125)
  })
})
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Declare new function sumOfNumCubed that takes in an array
const sumOfNumCubed = (array) => {
  // Use .map to cube the values of all nums within the array
  // Use .reduce to take all of the values within the array and returns a single value
  return array.map((value) => value ** 3).reduce((value, nextValue) => value + nextValue)
}
