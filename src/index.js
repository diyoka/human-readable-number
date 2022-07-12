var nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
module.exports = function toReadable (number) {
    
        var digit = number % 10;
        if (number < 20) {
            return nums[number];
        }
        else if (number < 100) {
            return tens[~~(number/10)-2] + (digit? " " + nums[digit]: "");
        }
        else {
            return nums[~~(number/100)] +" hundred" + (number%100 === 0? "": " " + toReadable(number%100));
        }
    
}
