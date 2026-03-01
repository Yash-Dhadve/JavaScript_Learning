/*
Create class User:
static property totalUsers

increase it inside constructor

create 3 users

print totalUsers
*/


class User{
    static totalUsers = 0;

    constructor(name){
        this.name = name;
        User.totalUsers++;
    }
}

const u1 = new User("Yash");
const u2 = new User("Lara");
const u3 = new User("Anuj");

console.log(`Total Users: ${User.totalUsers}`);