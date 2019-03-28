later();

console.log("First");

console.log("Second");

function later() {
    setTimeout(() => console.log("Third???"), 3000);
}

console.log("I'M THIRD!");

// const promisefn = () => new Promise((resolve, reject) => {
//     setTimeout(() => resolve(22), 5000);
// });

// promisefn().then((result) => console.log(result));

// const aaa = async () => {
//     const bbb = await promisefn();
//     return bbb+11;
// }

// aaa().then((result) => console.log(result));