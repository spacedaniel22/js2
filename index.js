later();

console.log("First");

console.log("Second");

function later() {
    setTimeout(() => console.log("Third???"), 1000);
}

console.log("I'M THIRD!");

const promisefn = () => new Promise((resolve, reject) => {
    if ((Math.random() * 10).toFixed() > 5 ) {
        reject("BAJ VAN");
    }
    setTimeout(() => resolve(22), 1000);
});

promisefn()
    .then((result) => {
        console.log(result);
        return result;
    })
    .then(result2 => console.log(result2 + 1))
    .catch((error) => console.log(error));

const aaa = async () => {
    try {
        const bbb = await promisefn();
        return bbb + 11;
    } catch(error) {
        // throw new Error(error);
        throw "Micimackó";
    }
}


aaa()
    .then((result) => {
        console.log(result);
        document.querySelector("body").innerHTML = result;
    })
    .catch((error) => {
        document.title = error;
        console.log(error);
    });