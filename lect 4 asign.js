//1
function removeEven(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            result.push(array[i])
        }
    }
    return result;
}

console.log(removeEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))




//2
function rmdupe(arr) {
    return [...new Set(arr)];
}
let arr = [1, 2, 4, 4, 3, 3, 5, 5];
let finito = rmdupe(arr);
console.log(finito);


//3
function checkNum(array, num) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return true;

        }
    }
    return false;
}
console.log(checkNum([1, 2, 3, 4, 5,], 3))

//4
function numObj(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let obj = {};
        obj[arr[i].toString()] = String.fromCharCode(arr[i]);
        result.push(obj)
    }
    return result
 
}
let arr1 = [67, 79,76, 69];
console.log(numObj(arr1))



