// const Tospread = "apple"
// const spreadOp = [...Tospread]
// // used to spread the operands of a variable into individual elements
// // it can be used to copy arrays, merge arrays and copying operands into a function
// // mergying arrays:
// const array1 = [1,2,3,4]
// const array2 = [5,6,7,8]
// array1.push(10)

// const mergedArray = [...array1,...array2]
// console.log(mergedArray)

// // copying operands into a function
//  const numbers = [1,2,3,4,5]
// sum(...numbers)
// function sum(a,b,c,d,e){
//      let summation = a+b+c+d+e
//     console.log(summation)   
// }
// // rest operator; used to collect remaining arguments in an array
// data(1,2,4,6,7)
// function data(first,second, ...rest){
//     console.log(first)
//     console.log(second)
//     const restOne = rest.toString()
//     console.log(restOne)

// }

// // find and filter methods; find is used to get the first element of an array that satisfies a condition 
// // while filter gets all the element of the array that satisfies a condition
// const Arrayavail = [1,2,3,4,5]
// let even = Arrayavail.find((num)=>
//  num% 2 == 0

// )
// console.log(even)
// // let Odd = [1,2,3,4,5]
// // let findodd = Odd.filter((num)=>
// //     num % 2 === 1
// // )
// // console.log(findodd)
// // splice method is used to add remove or replace elements in an array
// // array1.splice(start, deletecount, items-to-be-added)
// let arrays =[1,2,3,5]
// let arraySplice =  arrays.splice(0,1,12)
// console.log(arrays)
//  function checkCount(str){
//     let vowels = ['a','e','i','o','u']
//     let count = 0

//   for (var i = 0; i< str.length ; i++){
//   for(var j = 0 ; j< vowels.length; j++){
//     if( str[i] == vowels[j]){
//         count++
//     }
//   }
//   }
//     return count
//  }
//  let result = checkCount(['a','b','e','f','d'])
//  console.log(result)
//  check if a number is divisible by x and y
//  function divisible(num, x,y){
//     if(num % x === 0 && num % y === 0){
//         return true
//     }
//     else {
//         return false
//     }
//  }
//  const result1 = divisible(60,2,3)
//  console.log(result1)
//  check if a number is negative and make it negative
//  function checkNegativity(num){
//     if(num >= 1  ){
//         - num
//     }
//     else{
//         return num
//     }
//     return negative
//  }
//  let value = checkNegativity(-10)
//  console.log(value)
//  find the smallest integer in an array
// function checkSMall(num){
//     let largest = num[0]
//     let smallest = num[0]
//     for (let i = 0; i< num.length; i++ ){
//         if( num[i] <smallest){
//             smallest = num[i]
//         }if( num[i] > largest){
//             largest = num[i]
//         }
//     }
//     return [smallest,largest]
// }
// let result = checkSMall([10,2,1,42,52])
//  console.log(result)
// //  summation
//  function sumation(value){
//     let sum = 0
 
//     for(let i = 0; i< value.length; i++ ){
//         sum += value[i]
//     }
//     return sum
//  }
//  let value = sumation([1,2,4,2,4,2])
//  console.log(value)
// //  get the mean of an array
// function getMean(num){
//     let mean = 0
//     for(let i= 0; i < num.length ; i++){
//         mean += num[i] 
//     }
//    mean = Math.floor(mean/ num.length)
//     return mean
//  }
// let meanResult = getMean([12,4,3,12,4,2,3,44])
// console.log(meanResult)
function RockPaperScissors(value1,value2){
    if((value1 === 'rock' && value2 === 'paper') ||( value1 === 'rock' && value2 === 'scissors') || (value1 === 'paper' && value2 === 'rock') || (value1 === 'scissors' && value2 === 'paper')   ){
        return 'player1 wins'
    }
    else if ((value1 === 'scissors' && value2 === 'rock') || (value1 === 'paper' && value2 === 'rock') || (value1 === 'paper' && value2 === 'scissors') ){
        return 'player2 wins'
    }
    else{
        return 'it is a tie'
    }
}
let val = RockPaperScissors('rock','scissors')
let val2 = RockPaperScissors('paper','scissors')
let val3 = RockPaperScissors('rock','paper')
let val4 = RockPaperScissors('scissors','scissors')
let val5 = RockPaperScissors('paper','rock')
console.log(val)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)

function RemoveFirstAndLast(str){
    let strings = str.split('')
    strings.shift()
    strings.pop()
    return strings.join("")
}
let valu1 = RemoveFirstAndLast("valuew")
console.log(valu1)
function ReturnPositiveSums(num){
    let sum =0
   for(let i = 0; i<num.length; i++){
    if(num[i] >0){
         sum += num[i]
    }
   }
   return sum
}
let positivevalue = ReturnPositiveSums([10,23,-10,-3,-20,2,33,10])
console.log(positivevalue)
console.log(("r"+4))

 


const arrayA = { 'A':1,
"B":2}
console.log(arrayA['A'])
