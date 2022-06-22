module.exports = function toReadable(number) {
    let readableNumber = ''
    let num = number;
    let firstSliced = num.toString().slice(0, 1);
    let middleSliced = num.toString().slice(1, 2);
    let lastSliced = num.toString().slice(2, num.length)
    let middleAndLast = Number(middleSliced + lastSliced)


    let toNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let toNinety = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num == 0) {
        readableNumber = 'zero'
    } else if (num >= 1 && num < 20) {
        readableNumber = toNineteen[num]
    } else if (num >= 20 && num < 100) {
        (middleSliced == 0) ? readableNumber = toNinety[firstSliced - 1] : readableNumber = toNinety[firstSliced - 1] + ' ' + toNineteen[middleSliced];
    } else if (num >= 100 && num <= 999) {
        if (middleSliced == 0) {
            readableNumber = toNineteen[firstSliced] + ' hundred ' + toNineteen[lastSliced]
        } else if (middleSliced == 1 && (lastSliced >= 0 && lastSliced <= 9)) {
            readableNumber = toNineteen[firstSliced] + ' hundred ' + toNineteen[middleAndLast]
        } else if (lastSliced == 0 && middleSliced >= 2) {
            readableNumber = toNineteen[firstSliced] + ' hundred ' + toNinety[middleSliced - 1]
        } else {
            readableNumber = toNineteen[firstSliced] + ' hundred ' + toNinety[middleSliced - 1] + ' ' + toNineteen[lastSliced]
        }

        if (middleSliced == 0 && lastSliced == 0) {
            readableNumber = toNineteen[firstSliced] + ' hundred'
        }
    }

    return readableNumber
}

