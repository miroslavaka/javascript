let thisstring = "89123749012783490283847598327459032874590273429085732908457";
let findstring = "2";
let occurrence = thisstring.indexOf(findstring);
console.log("prvy vyskyt je: " + occurrence);
let lastoccurrence = thisstring.lastIndexOf(findstring);
console.log("posledny vyskyt je: " + lastoccurrence);
let iteration = 0;
let arr = [];
arr.push(occurrence);

function findStr() {
    while (lastoccurrence != occurrence) {
        occurrence = thisstring.indexOf(findstring, occurrence + 1);
        console.log("dalsi vyskyt je: " + occurrence);
        arr.push(occurrence);
    }
    console.log(arr);
    document.write("number 2 occurrs on positions: " + arr + " within string 89123749012783490283847598327459032874590273429085732908457");
}
findStr();