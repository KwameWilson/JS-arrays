// Q1 Write a function calculateSum that takes an array of numbers as a parameter and returns the sum of all the elements in the array.
const numArr = [1, 2, -5, -4, 2, 3, 5];
const calculateSum = numArr.reduce((accumulator, currentVal) => accumulator + currentVal)
console.log(calculateSum);


// Q2
// Write a function findMax that takes an array of numbers as a parameter and returns the maximum value in the array.

let max = 0
const findMax = a => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
        console.log(max)
    }
}
findMax(numArr)


// Q3 Write a function reverseArray that takes an array as a parameter and returns a new array with the elements reversed. Do not modify the original array.
const numbersArr = [1, 3, 6, 9, 5]
const reverseArray = a => {
    for (let i = a.length - 1; i >= 0; i--) {
        console.log(a[i]);
    }
}
reverseArray(numbersArr);

// Q4
const newNumbers = [8, 19, 5, 6, 14, 9, 13];
const filterOdd = newNumbers.filter(numbers => numbers % 2 === 1)
console.log(filterOdd)



// Q5 Write a function calculateAverage that takes an array of numbers as a parameter and returns the average (mean) of the numbers.
let numbers = [1, 2, 2, 3, 6, 9, 8, 5, 4, 9]

const findAverage = a => {
    let summation = a.reduce((a, b) => a + b)
    return summation / a.length
}

findAverage(numbers)





// Q7
const indices = ['evaporate', 7, 3, 'bethesda', true];
const findIndex = indices.findIndex(target => target === 'bethesda')
console.log(findIndex)


// Q8
const num = [1, 2, -5, -4, 2, 3, 5];
const multiplyArray = num.map(int => {
    let factor = 2;
    return int * factor;
})
console.log(multiplyArray);



// Q9
const isPalindrome = a => {
    for (let i = 0; i < a.length / 2; i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            return false
        } else {
            return true
        }
    }
}

isPalindrome('rotor')



// Q11
const stringArr = ['evaporate', 'sublime', 'code', 'bethesda', 'ape'];
const threshold = stringArr.filter(str => str.length >= 5);
console.log(threshold);


// Q12
const integers = [1, 2, 5, -4, -2, 3, 5];
const positiveInt = integers.filter(integer => integer > 0);
console.log(positiveInt);
const sumPositive = positiveInt.reduce((acc, currentVal) => acc + currentVal)
console.log(sumPositive);


// Q13
// Write a function findCommonElements that takes two arrays as parameters and returns a new array containing the common elements between the two arrays.
const firstArr = ['evaporate', 7, 3, 'bethesda', true];
const secondArr = ['evaporate', 7, 2, 'Ali', true];
const findCommonElements = (first, second) => {
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j]) {
                console.log(secondArr[j]);
            }
        }

    }
}
const commons = findCommonElements(firstArr, secondArr)
// console.log(commons);



//Q14
// Write a function *countVowels* that takes a string as a parameter and returns the count of vowels (a, e, i, o, u) in the string.

let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let word = 'miaoued'

const countVowels = string => {
    let count = 0

    for (let i = 0; i < vowelArr.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (vowelArr[i] === string[j]) {
                count++
            };
        }
    }
    return count
}

countVowels(word);


// Q15
const array1 = [3, 8, 1];
const array2 = [5, 2, 7];

const mergeArrays = (array1, array2) => {
    const mergedArray = array1.concat(array2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    return sortedArray;
}

const result = mergeArrays(array1, array2);
console.log(result);