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


//search word "man" in string str
var str = "A good man will want you to shine. He wants you to be yourself." +
    "A good man loves to show off his happy,intelligent, powerful woman";
var patt = /man/g;
var result = str.replace(patt, "person");
console.log(result);

//seach character "e"
var str1 = "work hard in silence. let success be your noise";
var patt1 = /e/g;
var res1 = str1.replace(patt1, "");
console.log(res1);

//do global search for "all":
var str2 = "What is the definition of all? What is the meaning of all? " +
    "How do you use all in a sentence? What are synonyms for all?";
var patt2 = /all/g;
var res2 = str2.match(patt2);
console.log(res2);

//while loop
var i = 1;
var answer = 0;

while (i < 21) {
    answer = i
    i++;
    document.write("answer = " + answer + "<BR>");
}

//substring
function myFunction() {
    var str = "Mozilla/5.0(iPad; CPU OS 5_0_1 like Mac OS X)";
    var str1 = str.indexOf("iPad");
    var str2 = str.indexOf("Mac OS");
    document.write(str2);
    if (str1 == -1) {
        document.write("does not contain iPad");
    } else {
        var str1 = str.substr(str1, 4);
    }
    if (str2 == -1) {
        document.write("does not contain Mac OS");
    } else {
        var str2 = str.substr(str2, 6);
    }
    document.write(str1 + "<BR>" + str2);
}