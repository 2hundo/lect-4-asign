let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(number){
    return number + 30;
});
console.log(doubled);

let fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.sort())
console.log(fruits.reverse());

let fruits1 = [2, 1, 9, 7, 100, 40]
console.log(fruits1.sort())


function order(a,b){
    return a-b
}
let num = [40, 100, 1, 5, 25, 10]
console.log(num.sort(order))


let arr = new Array(3);
console.log(arr)
console.log(arr.length)

//set 

let letter = new Set()
console.log(letter)
letter.add(`a`)
letter.add(`b`)
letter.add(`c`)
letter.add(`d`)
console.log(letter)
let arrof = Array.from (letter)
console.log(arrof)


//map
let bacon = new Map([
    ["apple", 500],
    ["banana", 300],
    ["orange", 200]
]);
console.log(bacon)
bacon.set("apple", 400)
console.log(bacon)
bacon.set("grape", 250)
console.log(bacon)
console.log(bacon.get("apple"))