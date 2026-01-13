
// create empty arry...
let users = [];

// push 1 user
users.push({name:"vaishnavi" , role:"girl"});
users.push({name:"saniya", role:"student"});


// find users
 function findUser(name){
    return users.find(user => user.name === name);
 }

 console.log(findUser("saniya"));
console.log(findUser("pooja"));
