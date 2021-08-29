function describe(testName, test) {
  console.log(`🔨 Test ------- ${testName}: \n`);
  test()
}

const should = (description, expect) => {
  console.log(`----------- It should ${description} ---- \n`)
  expect()
}

const expect = (actual) => ({
    toBe: (expected) => {
      if (actual === expected) {
        console.log({
          "outcome": `✅ Test was successful`,
          "message": `${actual} === ${expected}`
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

module.exports = { 
  describe,
  should,
  expect
};