type User2 = {
    firstname:string;
    lastName:string;
    age:number;
}

//unions 
type greetArg = number | string;

function greet(id : greetArg){
    console.log(`ID: ${id}`)
}
greet(101);
greet("200");

type employee = {
    name:string;
    startDate: Date;
}
type manager = {
    name:string;
    department:string;
}
type techLead = employee & manager;
const techemployee :techLead = {
    name:"pradeep",
    startDate: new Date(),
    department:"software department"
}

type NumberArr = number[];
function maxArr(arr:NumberArr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(maxArr([1,2,3]))
