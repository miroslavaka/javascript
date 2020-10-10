console.log('mira');
let myVariable = false;
if (myVariable === false) {
    console.log('the condition has been evaluated to true');
}

let a = 4;
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2);
}

let bookCount = 10;
for (let i = 0; i < bookCount; i++) {
    //here comes code which moves books
    //this block wiil be repeated bookcount times
    console.log(i);
}


let count = 10;
for (let x = 1; x < count + 1; x++) {
    console.log(x);
}
let even = 20;
for (let i = 0; i < even + 1; i++) {
    if (i % 2 === 0) {
        console.log(`even numbers: ${i}`);
    }
}

let payBill = (amount, beneficiary) => {
    //transfer amount money to beneficiary
}
let add = (a, b) => {
    return a + b; //this retun keword will give you back the result
}
console.log(add(1, 2))

let print = (x) => {
    for (let i = 0; i < x + 1; i++) {
        console.log(`print until 20: ${i}`);
    }
}
print(20)

let printTill = (y) => {
    for (let i = 0; i < y; i++) {
        console.log(`print until 15: ${i}`);
    }
}
printTill(15);

let greetings = (name) => {
    console.log(`hello ${name}`);
}
greetings('Monika')

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printValues([0, 3, 6, 7, 9])


let itterateArray = [10, 20, 30, 50, 12];
itterateArray.forEach(number => {
    console.log(number);
});

let printValuess = (array) => {
    array.forEach(num => {
        console.log(num);
    });
}
printValuess([0, 3, 6, 7, 9])