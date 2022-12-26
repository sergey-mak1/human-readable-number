module.exports = function toReadable(number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr3 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr4 = ['hundred', 'thousand'];
    let res = '';
    let res1 = '';
    let res2 = '';
    let res3 = '';
    let res4 = '';
    str = String(number);
    switch (str.length) {
        case 1:
            for (i = 0; i <= number; i++) {
                if (i == number) {
                    res += arr1[i];
                    return res;
                }
            }
            break;
        case 2:
            if (number >= 10 && number < 20) {
                for (i = 10; i <= number; i++) {
                    if (i == number) {
                        res += arr2[i - 10];
                    }
                }
                return res;
            }
            else {
                for (j = 1; j < 10; j++) {
                    if (j == str[0]) {
                        res1 += arr3[j]
                    }
                    if (j == str[1]) {
                        res2 += arr1[j]
                    }
                    if (str[1] === '0') {
                        res = res1
                    }
                    else { res = res1 + ' ' + res2 }
                }
            }
            return res;
            break;
        case 3:
            for (k = 0; k < 10; k++) {
                if (k == str[0]) {
                    res3 += arr1[k] + ' ' + arr4[0];
                }
            }
            if (Number(str[1] + str[2]) == 0) {
                res = res3;
                return res;
            }
            else if (Number(str[1] == 0)) {
                for (i = 0; i < 10; i++) {
                    if (i == str[2]) {
                        res += res3 + ' ' + arr1[i];
                        return res;
                    }
                }
            } else if (Number(str[1] + str[2]) >= 10 && Number(str[1] + str[2]) < 20) {
                for (i = 10; i < 20; i++) {
                    if (i == Number(str[1] + str[2])) {
                        res4 += arr2[i - 10];
                        res = res3 + ' ' + res4
                        return res
                    }
                }
            }
            else {
                for (j = 1; j < 10; j++) {
                    if (j == str[1]) {
                        res1 += arr3[j]
                    }
                    if (j == str[2]) {
                        res2 += arr1[j]
                    }
                    if (str[2] === '0') {
                        res4 = res1
                    }
                    else {
                        res4 = res1 + ' ' + res2
                    }
                }
            }

            res = res3 + ' ' + res4;
            return res;
            break;
    }
}

