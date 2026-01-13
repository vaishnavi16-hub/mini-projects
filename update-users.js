let users = [];
 function addUser(name,role){
    users.push({
        name :name,
        role:role
    });
 }

//  add some user...

addUser("vaishnavi","student");
addUser("saniya","admin");
addUser("ankita","student");


// update user..
 function updateUser(name,newRole){
    const user = users.find(user => user.name === name);

   if (user){
    user.role = newRole;
    console.log("User updated");
   } else {
    console.log("user not found")

   }

 }

 updateUser("pooja","admin");

 console.log(users);