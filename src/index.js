module.exports = function toReadable (number) {

    const ones = {
        0 : "zero",
        1: "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine", 
        10 : "ten",
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen"
    }

    const decimals = {
        2 : "twenty",
        3 : "thirty",
        4 : "forty",
        5 : "fifty",
        6 : "sixty",
        7 : "seventy",
        8 : "eighty",
        9 : "ninety", 
    }


    const str = String(number);

    if (number < 20) return ones[number];

    if( number < 100) {
        if(str[1] == 0) return decimals[str[0]];
        else return `${decimals[str[0]]} ${ones[str[1]]}`;
    } 

    const hundred = `${ones[str[0]]} hundred`;
    const decimal = `${decimals[str[1]]}`;
    const one = `${ones[str[2]]}`;

    if(str[2] == 0 && str[1] == 0 ) {
        return hundred;
    }

    if( str[1] == 1 && str[2] == 0  ) {
        return `${hundred} ten`;
    }

    if( str[2] == 0 ) {
        return `${hundred} ${decimal}`;
    }

    if( str[1] == 0 ) {
        return `${hundred} ${one}`;
    }

    if( str[1] == 1 ) {
        let teen  = str.slice(1);
        return `${hundred} ${ones[teen]}`;
    }

    return `${hundred} ${decimal} ${one}`;
  
}
