class User{
    #password; // Private variable

    constructor(username, password){
        this.username = username;
        this.#password = password; // Initialize private variable
    }

    checkPassword(){
        console.log(`Password for ${this.username} is ${this.#password}`);
    }
}

const u1 = new User("Yash", "mySecretPassword");
u1.checkPassword();