class TestPackage {
  constructor (...tests) {
    this.name = 'taestro'
    this.tests = tests
  }
  
  timeTestPackage() {
    console.time('TestPackage');
  }

  timeTests() {
    console.time('Tests');
  }

  timeTestPackageEnd() {
    console.time('TestPackage');
  }

  timeTestsEnd() {
    console.time('Tests');
  }
  
  test() {
    this.timeTestPackage()
    this.timeTests();
    
    this.tests()

    this.timeTestsEnd()
    this.timeTestPackageEnded();

    // TO DO - Format information;
  }
}

// class Test {
//   constructor(description, actual, expected) {
//     this.description = description;
//     this.actual = actual;
//     this.expected = expected;
//   }

// }

class Test {
  constructor () {
    
  }
}

const expect = (actual) => ({
  
  toBe: (expected) => {
    if (actual === expected) {
      console.log({
        "question": `Is ${actual} === ${expected}?`,
        "outcome": `✅ Test was successful`
      }, `\n\n ... \n`)
    } else {
      console.log({
        "question": `Is ${actual} === ${expected}?`,
        "outcome": `❌ Test has failed.`,
        "message": `${actual} !== ${expected}`
      }, `\n\n ... \n`)
    }
  }, 
  notToBe: (expected) =>{
    if (actual !== expected) {
      console.log({
        "question": `Is ${actual} === ${expected}?`,
        "outcome": `✅ Test was successful`
      }, `\n\n ... \n`)
    } else {
      console.log({
        "question": `Is ${actual} === ${expected}?`,
        "outcome": `❌ Test has failed.`,
        "message": `${actual} !== ${expected}`
      }, `\n\n ... \n`)
    }
  }
})

const it = (description, expectation) => {
  // const test = new Test(description, expected, actual);
  console.log(`🔨 Test ------- ${description}: \n`);
  expectation();
}

// function success() { 
//   return {
//       "question": `Is ${this.expected} === ${this.actual}?`,
//       "outcome": `✅ Test was successful`
//   }
// }
  
// function fail()  { 
//   return { 
//       "question" : `Is ${this.expected} === ${this.actual}?`,
//       "outcome":  `❌ Test has failed. `,
//       "message": `${this.expected} !== ${this.actual}`,
//   }
// }

module.exports = {
  it,
  expect,
  TestPackage
}