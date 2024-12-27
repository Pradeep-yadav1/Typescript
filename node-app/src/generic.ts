
function identity<T>(arg : T) : T {
    return arg;
}
let output1 = identity<string>("mystring");
let output2 = identity<number>(244);

output1.toUpperCase();

function getFirstElement<T>(arg: T[]) :T{
    return arg[0];
}

interface User23 {
    name:string;
}
let e1 = getFirstElement<string>(["pradeep","yadav"]);
let e2 = getFirstElement<User23>([{name:"pradeep"}]);