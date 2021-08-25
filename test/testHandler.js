const assert = require('assert').strict;

class Test {
  constructor (name, expected, actual) {
    this.name = name;
    this.expected = expected;
    this.actual = actual;
  }
 
  success() { 
    return {
        "question": `Is ${this.expected} === ${this.actual}?`,
        "outcome": `✅ Test was successful`
    }
  }
  
  fail(error)  { 
    return { 
        "question" : `Is ${this.expected} === ${this.actual}?`,
        "outcome":  `❌ Test has failed. `,
        "message": `${this.expected} !== ${this.actual}`,
    }
  }

  continue() { return `\n ...\n`}

  test() {

    // TODO  countTestDone()

      try {
      console.log(`🔨 Test ------------ ${this.name}: \n`);
      assert.strictEqual(this.expected, this.actual)
      console.log(this.success())
      console.log(this.continue())
    } catch (e) {
      console.log(this.fail(e))
      console.log(this.continue())
      }
    }
  
  testQuickly() {

    try {
      assert.strictEqual(this.expected, this.actual)
      console.log(`✅ Test ${this.name} was successful`);
    } catch (e) {
      console.log(`❌ Test ${this.name} has failed`);
      console.log('\n' + e.message);
    }
  }
}


// TODO  QUEUE
// TODO  RUN QUEUE

module.exports = {
  Test
}