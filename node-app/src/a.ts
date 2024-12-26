
const x : number = 10;
console.log(x);

function hello(firstname:string) {
    console.log(`hello ${firstname}`);
}

hello("pradeep");

function sum(a:number,b:number):number {
    return a+b
}
const value = sum(2,4);
console.log(value);

function isLegal(age:number):boolean {
    if(age >18){
        return true
    }else {
        return false
    }
}
isLegal(24);

function runAfter1Sec(fn:()=> void) {
    setTimeout(fn,1000);
}
runAfter1Sec(function(){
    console.log("hi there from fn");
})

function isLegal2(User:User){
    if (User.age > 18){
        return true;
    }else{
        return false;
    }
}
const User = {
    firstName:"pradeep",
    lastName:"yadav",
    email:"abc@gmail.com",
    age: 23
}
interface User {
    firstName:string;
    lastName:string;
    email:string;
    age:number;
}

isLegal2(User)