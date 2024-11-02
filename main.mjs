import readline from 'readline'

    const rl = readline.createInterface ({
        input: process.stdin,
        output: process.stdout
    })

    function askUser(question) {
        return new Promise (resolve => {
            rl.question(question, answer => {
                resolve (answer)
            })
        })
    }

    function asyncOperation (a, b, operation, callback) {
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== "number" || (operation !== "dodawanie" && operation !== "mnozenie")){
                callback(new Error("Dane zostały zle wprowadzone"), null)
                return
            }

            if (operation == "dodawanie"){
                callback(null, a + b)
            }

            if(operation == "mnozenie"){
                callback(null, a * b)
            }
        }, 1000)
    }