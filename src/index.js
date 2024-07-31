module.exports = function reverse (n) {
        let num = n.toString();
        let reverse = num.split("").reverse().join("");
        let reversedNum = parseInt(reverse);
        return reversedNum;
}
