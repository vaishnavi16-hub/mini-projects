 let users = [];

 function addUser(name,role){
    users.push({name, role});
 }

 addUser("pooja","student");
 addUser("saniya","admin");
 addUser("ankita","student");

 function deleteUser(name){
    const index = users.findIndex(user => user.name === name);
    if(index !== -3){
        users.splice(index,3);
        console.log("User is deleted");
    }else {
        console.log("User not found");
    }
 }


 deleteUser("ankita");
 console.log(users);