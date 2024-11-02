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

    async function main(){
        const a = parseInt (await askUser("Podaj pierwsza liczbe"))
        const b = parseInt (await askUser("Podaj druga liczbe"))
        const operation = await askUser("Chcesz wykonac dodawanie czy mnozenie?")
        const method = await askUser("chcesz uzyc metody callback czy moze promise?")

        if(method == "callback"){
            asyncOperation(a, b, operation, (error, result) => {
                if(error) {
                    console.error(error)
                }
                else {
                    console.log (`Wynik (callback) ${result}`)
                }
            })
            rl.close()
        }

        else if (method == "promise") {
            promiseOperation(a, b, operation)
                .then(result => console.log(`Wynik (promise) ${result}`))
            
        }







    }
