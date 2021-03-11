module.exports = function toReadable(number) {
    const digits = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 10) {
        return digits[number];
    } else if (number < 20) {
        return tens[number - 10];
    } else if (number < 100) {
        return (
            dozens[Math.floor(number / 10) - 2] +
            (number % 10 === 0 ? "" : " " + digits[number % 10])
        );
    } else if (number < 1000) {
        return (
            digits[Math.floor(number / 100)] +
            " " +
            "hundred" +
            (number % 100 < 10 ? "" :
            number % 100 < 20 ? " " + tens[Math.floor((number % 100) - 10)] :
            number % 100 < 100 ? " " + dozens[Math.floor((number % 100) / 10) - 2] : "") +
            (number % 10 === 0 || (number % 100 > 10 && number % 100 < 20) ? "" : " " + digits[number % 10])
        );
    }
};
