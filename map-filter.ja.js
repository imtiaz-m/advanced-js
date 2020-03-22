 const numbers =[3,4,5,9,6,8,7];
 
// const output=[];

// for(let i =0;i<numbers.length;i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
//}

// 
// 2
// const result = numbers.map(x=> x * x);
// console.log(result);
const bigger = numbers.filter(x=> x<5);
const isThere=numbers.find(x=> x>5);
console.log(bigger);
console.log(isThere);