const p1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Async Operation 1")
                        resolve(2)

        }, 3000)
})

const p2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Async Operation 2")
                        reject(new Error("error"))

        }, 3000)
})

Promise.all([p1,p2])
                .then(res => console.log(res))
                .catch(err => console.log(err.message))