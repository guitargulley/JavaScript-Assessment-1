//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

var sum = num10 + parseInt(string8) + one
console.log(num10 + parseInt(string8) + one)
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function divideByThree() {
    var num = [];
    for (var i = 20; i <= 100; i++) {
        if (i % 3 == 0) {
            num.push(i)
        }
    } return num
} console.log(divideByThree())

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

function average(arr) {
    sum = 0

    for (var i = 0; i < arr.length; i++) {
        var score = arr[i];
        sum += score

    }
    return sum / scores.length
}
console.log(average(scores))