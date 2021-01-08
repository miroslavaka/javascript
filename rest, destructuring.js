//rest parameter
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

//destructuring assignment
//1
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today: highToday } = HIGH_TEMPERATURES;
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//2
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday } } = LOCAL_FORECAST;
const { today: { high: highToday } } = LOCAL_FORECAST;

//3
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);