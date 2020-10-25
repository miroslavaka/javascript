//FOREACH
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(writenumbers);
console.log(txt);

function writenumbers(value) {
    txt = txt + value + "<br>";
}


//MAP
var numbersnew = numbers.map(double);
console.log(numbersnew);

function double(value) {
    return value * 2;
}

//FILTER
var under20 = numbers.filter(below20);
console.log(under20);

function below20(value, index, array) {
    return value < 20;
}
//FILTER - return age over 18
var ages = [32, 33, 16, 40];
var filterage = ages.filter(overeighteen);
console.log("Age over 18 in array [32,33,16,40] is: <b>" + filterage + "</b>");

function overeighteen(age) {
    return age >= 18;
}
//FILTER - return age over 18 - use formular input type number
var minage = document.getElementById('ageToCheck').value;
console.log('Min age is: ' + minage);

var filterages = ages.filter(aboveEighteen);
console.log("Ages over 18 are: " + filterages);

function aboveEighteen(age) {
    return age >= minage;
}

//REDUCE
var sum = numbers.reduce(sum);
console.log("Reduce: " + sum);

function sum(total, value, index, array) {
    return total + value;
}

//DATE
var d = new Date();
console.log(d);

var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);

var d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);

var d = new Date(2018, 11, 24, 10, 33);
console.log(d);

var d = new Date(2018, 11, 24, 10);
console.log(d);

var d = new Date(2018, 11, 24);
console.log(d);

var d = new Date(2018, 11);
console.log(d);

var d = new Date(2018);
console.log(d);

var d = new Date(99, 10, 25);
console.log(d);

var d = new Date(9, 10, 25);
console.log(d);

var d = new Date(1603598988585);
console.log(d);

var d = new Date(0);
console.log(d);

var d = new Date(100000000000);
console.log(d);

var d = new Date(-100000000000);
console.log(d);

var d = new Date(86400000);
console.log(d);

var d = new Date();
console.log(d.toString());

var d = new Date();
console.log(d.toUTCString());

var d = new Date();
console.log(d.toDateString());

var d = new Date();
console.log(d.toISOString());

var d = new Date("2015-03-25");
console.log(d);

var d = new Date("2015-03");
console.log(d);

var d = new Date("2015");
console.log(d);

var d = new Date("2015-03-25T12:00:00Z");
console.log(d);

var d = new Date("2015-03-25T12:00:00-06:30");
console.log(d);

var d = new Date("03/25/2015");
console.log(d);

var d = new Date("Mar 25 2015");
console.log(d);

var d = new Date("March 21, 2012");
var d1 = Date.parse(d);
console.log(d1);

var d = new Date();
console.log(d);
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getMonth());

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log("current month: " + months[d.getMonth()]);

console.log("today day in month: " + d.getDate());
console.log("current minutes: " + d.getMinutes());
console.log("current seconds: " + d.getSeconds());
console.log("current milliseconds: " + d.getMilliseconds());
console.log("current day " + d.getDay());

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("today is: " + days[d.getDay()]);

var d = new Date();

//GET DATE
console.log(d);
console.log(d.getTime());
document.getElementById('time1').innerHTML = d.getTime();
console.log(d.getFullYear());
console.log(d.getMonth());

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log("current month: " + months[d.getMonth()]);
console.log("today day in month: " + d.getDate());
console.log("current minutes: " + d.getMinutes());
console.log("current seconds: " + d.getSeconds());
console.log("current milliseconds: " + d.getMilliseconds());
console.log("current day " + d.getDay());

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("today is: " + days[d.getDay()]);

var dUTC = new Date();
console.log("UTC date: " + dUTC.getUTCDate());
console.log("UTC day: " + dUTC.getUTCDay());
console.log("UTC year: " + dUTC.getUTCFullYear());
console.log("UTC hours: " + dUTC.getUTCHours());
console.log("UTC date: " + dUTC.getUTCDate());
console.log("UTC month: " + dUTC.getUTCMonth());