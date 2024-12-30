
interface User {
    name : string,
    age: number,
    email:string,
    password: string
}

type updateProps = Pick<User, 'name' | 'age' | 'password'>
type updateAndPartially = Partial<updateProps>

function updateUser (user : updateAndPartially){
    console.log(`name : ${user.name} , password:${user.password}`)
}

updateUser({name:"pradeep",password:"hello"});


interface config {
    readonly api:string;
    readonly key:string;
}

const Config : Readonly<config> = {
    api:"wworjfj",
    key:"wrefefe",
}

//Record and map
type players = Record<string,{age:number,name:string}>

const Players : players ={
    "id": {age:12, name:"pradeep"},
    "id2": {age:14, name:"deep"},
}

interface team {
    id:string;
    age:number
}
const usersMap = new Map<string,team>();
usersMap.set("abc123",{id:"abc123",age:23});
usersMap.set("xyz123",{id:"xyz123",age:21});
console.log(usersMap.get("abc123"));
usersMap.delete("xyz123");

//exclude
type eventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude<eventType,'scroll'>;

const handleEvent = (event:ExcludeEvent) => {
    console.log(`handling event ${event}`)
}
handleEvent("click");