const assert = require('assert')

function describe(testName, should) {
  console.log(`🔨 Test ------- ${testName}: \n`);
  should()
}

function should(description, expect) {
  console.log(`----------- It should ${description} ---- \n`);
  expect()
}

const expect = (actual) => ({
  toBe: (expected) => {
    if (actual === expected) {
      console.log({
        "outcome": `✅ Test was successful`
      }, `\n\n`)
    } else {
      console.log({
        "outcome": `❌ Test has failed.`,
        "message": `${actual} !== ${expected}`
      }, `\n\n`)
    }
  },
  notToBe: (expected) => {
    if (actual !== expected) {
      console.log({
        "outcome": `✅ Test was successful`
      }, `\n\n`)
    } else {
      console.log({
        "outcome": `❌ Test has failed.`,
        "message": `${actual} !== ${expected}`
      }, `\n\n`)
    }
  }
})

// let myTests = [];

// function myTest(name, func) {
//     myTests.push({name, func})
// }

// function run() {  
//   // runs all tests in test array.
//   myTests.forEach(t => {
//   // for each test, we will try to execute a said function.
//     try {
//       t.func(); 
//         console.log('✅', t.name)
//       } catch (err) {
//         console.log('❌', t.name);
//         console.log(err.stack);
//       }
//   })
// }

// const files = process.argv.slice(2);

// // global.test = test;

// files.forEach(file => {
//   require(file);
// });

// run();

class Test {
  constructor (should, actual, expected) {
    this.should = should;
    this.actual = actual;
    this.expected = expected;
  }

  success() { 
    return {
        "question": `Is ${this.actual} === ${this.expected}?`,
        "result": `✅ Test was successful`
    }
  }

  fail(e)  { 
    return {
        "question" : `Is ${this.actual} === ${this.expected}?`,
        "result":  `❌ Test has failed. `,
        "error": e.message
    }
  }

  continue() { return `...\n`}

  test() {

    // TODO  countTestDone()

      try {
      console.log(`Test ------------ ${this.name}: \n`);
      assert.strictEqual(this.actual, this.expected)
      console.log(this.success())
      console.log(this.continue())
    } catch (e) {
      console.log(this.fail(e))
      console.log(this.continue())
      }
    }
}

module.exports = { 
  Test,
  describe,
  should,
  expect
}