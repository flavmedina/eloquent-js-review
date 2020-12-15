//01.
let reverse = (nb) => {
    return nb.toString().split('').reverse().join('');
}

console.log('01.', reverse(32243));

//02.

let palindromeCheck = (str) => {
    return reverse(str) === str;
}

console.log('02.', palindromeCheck('madam'));

//03.

let combinator = (str) => {
    stringArr = [];
    for (let i = 0; i < str.length; i++) {
        for (let y = i+1; y < str.length+1; y++) {
           stringArr.push(str.slice(i,y) );
        }
    }
    return stringArr;
}
console.log('03.', combinator('dog'));

//04.

let alphabetSort = (str) => {
    return str.split('').sort().join('');
}

console.log('04.', alphabetSort('webmaster'));

//05.

let upperWord = (str) => {
     return str.split(' ').map( str =>str.charAt(0).toUpperCase() + str.slice(1)).join(' ')
}

console.log('05.', upperWord('the quick brown fox'));

//06.

// let longestWord = (str) => {
//     let k = '';
//     let tab = str.split(' ');
//     for (let i = 0; i < tab.length; i++) {
//         if (tab[i].length > k.length) {
//             k = tab[i]
//         }
//     }
//     return k;
// }

let longestWord = (str) => {
    return str.split(' ').sort( (a,b) => b.length - a.length)[0]
}


console.log('06.', longestWord('Web Development Tutorial'));

//07.

// let vowelCount = (str) => {
//     const vowelList = ['a','e','i','o','u','y'];
//     str.toLowerCase().trim().split('');
//     let k = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(vowelList.includes(str[i])){
//             k++
//         }
//     }
//     return k;
// }

let vowelCount = (str) => {
    let vowelList = 'aeiouy';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowelList.indexOf(str[i] !== -1)) {
            count += 1;
        }
    }
    return count;
}

    // const countVowel = str => Array.from(str)
    // .filter(letter => ('aeiouy').includes(letter)).length;
     
console.log('07.', vowelCount("The quick brown fox"));

//08.

let primeCheck = (nb) => {
    if (nb < 2) {
        return false;
    }
    for (let i = 2; i < nb; i++) {
        if(nb%i === 0){
            return false
        }
        else{
            return true;
        }
    }
}

console.log('08.', primeCheck(6));

//09.

let whatType = (arg) => {
    return typeof arg;
}

console.log('09.', whatType(1));

//010.

let matrix = (nb) => {
    for (let i = 0; i < nb; i++) {
        for (let y = 0; y < nb; y++) {
            if (i === y) {
                console.log('1');
            }
            else {
                console.log('0');
            }
        }        
        console.log('-------');
    }
}
console.log('010.');
matrix(4);