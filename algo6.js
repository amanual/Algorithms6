// Find Average
var array2 = [1, 2, 3, 4, 7, 9, 3];
var sum = 0;
var ave = 0;
for (var i = 0; i < array2.length; i++) {
    sum += array2[i]
    ave = sum / array2.length;
}
console.log("average: " + ave);