/*
Create a class User with:
username
email

Add method displayInfo()
*/ 

class User{

    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    displayInfo(){
        console.log(`Name: ${this.username}, Email: ${this.email}`) 
    }
}

const user1 = new User("Yash", "yash@gmail.com");
user1.displayInfo();