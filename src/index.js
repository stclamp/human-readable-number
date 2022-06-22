module.exports = function toReadable(number) {
    let readableNumber = ''

    let firstSlisedNumber = number.toString().slice(0, 1);
    let middleSlisedNumber = number.toString().slice(1, 2)
    let lastSlisedNumber = number.toString().slice(2, number.length);


    if (number <= 19 && number >= 1) {
        readableNumber = numbersFromOneToFifteen(number);
    } else if (number == 0) {
        readableNumber = 'zero';
    }
    if (number >= 20 && number < 100) {
        if (middleSlisedNumber == 0) {
            readableNumber = numbersFromTwentyToNinety(Number(firstSlisedNumber)) + numbersFromOneToFifteen(Number(middleSlisedNumber))
        } else if (middleSlisedNumber != 0) {
            readableNumber = numbersFromTwentyToNinety(Number(firstSlisedNumber)) + ' ' + numbersFromOneToFifteen(Number(middleSlisedNumber))
        }

    }

    if (number >= 100 && number <= 999) {
        if (middleSlisedNumber == 0) {
            readableNumber = numbersFromOneToFifteen(Number(firstSlisedNumber)) + ' hundred ' + numbersFromOneToFifteen(Number(lastSlisedNumber));
        }
        else if (lastSlisedNumber == 0) {
            readableNumber = numbersFromOneToFifteen(Number(firstSlisedNumber)) + ' hundred ' + numbersFromTwentyToNinety(Number(middleSlisedNumber)) + numbersFromOneToFifteen(Number(lastSlisedNumber))
        } else if (middleSlisedNumber == 1 && (lastSlisedNumber >= 0 && lastSlisedNumber <= 9)) {
            readableNumber = numbersFromOneToFifteen(Number(firstSlisedNumber)) + ' hundred ' + numbersFromOneToFifteen(Number(number.toString().slice(1, number.length)))
        } else if (lastSlisedNumber != 0) {
            readableNumber = numbersFromOneToFifteen(Number(firstSlisedNumber)) + ' hundred ' + numbersFromTwentyToNinety(Number(middleSlisedNumber)) + ' ' + numbersFromOneToFifteen(Number(lastSlisedNumber))
        }
        if (middleSlisedNumber == 0 && lastSlisedNumber == 0) {
            readableNumber = numbersFromOneToFifteen(Number(firstSlisedNumber)) + ' hundred'
        }
        if (middleSlisedNumber == 1 && lastSlisedNumber == 0) {
            readableNumber = numbersFromOneToFifteen(Number(firstSlisedNumber)) + ' hundred ten'
        }
    }
    return readableNumber;
}

function numbersFromOneToFifteen(number) {
    let readableNumber = ''
    switch (number) {
        case 1:
            readableNumber = 'one'
            break;
        case 2:
            readableNumber = 'two'
            break;
        case 3:
            readableNumber = 'three'
            break;
        case 4:
            readableNumber = 'four'
            break;
        case 5:
            readableNumber = 'five'
            break;
        case 6:
            readableNumber = 'six'
            break;
        case 7:
            readableNumber = 'seven'
            break;
        case 8:
            readableNumber = 'eight'
            break;
        case 9:
            readableNumber = 'nine'
            break
        case 10:
            readableNumber = 'ten'
            break
        case 11:
            readableNumber = 'eleven'
            break
        case 12:
            readableNumber = 'twelve'
            break
        case 13:
            readableNumber = 'thirteen'
            break
        case 14:
            readableNumber = 'fourteen'
            break
        case 15:
            readableNumber = 'fifteen'
            break
        case 16:
            readableNumber = 'sixteen'
            break
        case 17:
            readableNumber = 'seventeen'
            break
        case 18:
            readableNumber = 'eighteen'
            break
        case 19:
            readableNumber = 'nineteen'
            break
    }
    return readableNumber;
}

function numbersFromTwentyToNinety(number) {
    let readableNumber = ''
    switch (number) {
        case 2:
            readableNumber = 'twenty'
            break;
        case 3:
            readableNumber = 'thirty'
            break;
        case 4:
            readableNumber = 'forty'
            break;
        case 5:
            readableNumber = 'fifty'
            break;
        case 6:
            readableNumber = 'sixty'
            break;
        case 7:
            readableNumber = 'seventy'
            break;
        case 8:
            readableNumber = 'eighty'
            break;
        case 9:
            readableNumber = 'ninety'
            break;
    }
    return readableNumber;
}
