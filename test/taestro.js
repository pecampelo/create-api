class Taestro {
  constructor (language) {
    this.language = language;
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
  
  should(description, expect) {
    // const test = new Test(description, expected, actual);
    console.log(`🔨 Test ------- ${description}: \n`);
    expect()
  }

  test() {
    this.timeTestPackage()
    this.timeTests();
    
    

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
  notToBe: (expected) =>{
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
  Taestro, 
  expect
}