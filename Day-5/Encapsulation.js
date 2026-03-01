class User {
    #password;

    constructor(password) {
        this.setPassword(password);
    }

    setPassword(password) {
        if (password.length >= 6) {
            this.#password = password;
        } else {
            console.log("Password too short");
        }
    }

    getPassword() {
        return "*".repeat(this.#password.length);
    }
}

const u1 = new User("secret123");
console.log(u1.getPassword());