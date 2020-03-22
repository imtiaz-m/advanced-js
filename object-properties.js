const students =[
    {id:20,name:"Salman"},
    {id:25,name:"ranbir"},
    {id:30,name:"Amir"},
    {id:35,name:"Sonum"},
];
const names=students.map(n=>n.name);
const ids = students.map(i=>i.id);
const bigger= students.filter(s=>s.id>20);

const biggerOne= students.find(s=>s.id>20);

console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerOne);