let tests = [];

function test(name, func) {
    tests.push({name, func})
}

function run() {  
    // runs all tests in test array.
    tests.forEach(t => {
        // for each test, we will try to execute a said function.
        try {
            t.func(); 

            console.log('✅', t.name)

        } catch (err) {
            console.log('❌', t.name);
            console.log(err.stack);
        }
    })
}

const files = process.argv.slice(2);

global.test = test;

files.forEach(file => {
        require(file);
});

run();


