function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        //return obj.checkProp;
        console.log(obj[checkProp]);
    } else {
        //return "Not Found";
        console.log("Not Found");
    }
}
checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "gift")