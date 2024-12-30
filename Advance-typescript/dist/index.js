"use strict";
function updateUser(user) {
    console.log(`name : ${user.name} , password:${user.password}`);
}
updateUser({ name: "pradeep", password: "hello" });
const Config = {
    api: "wworjfj",
    key: "wrefefe",
};
const Players = {
    "id": { age: 12, name: "pradeep" },
    "id2": { age: 14, name: "deep" },
};
const usersMap = new Map();
usersMap.set("abc123", { id: "abc123", age: 23 });
usersMap.set("xyz123", { id: "xyz123", age: 21 });
console.log(usersMap.get("abc123"));
usersMap.delete("xyz123");
const handleEvent = (event) => {
    console.log(`handling event ${event}`);
};
handleEvent("click");
