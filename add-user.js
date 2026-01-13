
// create empty user..

let users = [];

// function to add users
function addUser(name, role){
    users.push({
        name:name,
        role:role
    });
}

// function to  find users
function findUser(name){
    return users.find(user => user.name === name);
}

// add users..
addUser("vaishnavi","student");
addUser("nikita","admin");
addUser("nikita","student");


console.log(users);
console.log("Total users:" ,users.length); 