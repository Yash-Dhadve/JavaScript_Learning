class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.setPassword(password);
    }

    setPassword(password) {
        if (password.length >= 6) {
            this.#password = password;
            console.log("Password set successfully.");
        } else {
            console.log("Password must be at least 6 characters.");
        }
    }

    getPassword() {
        return "*".repeat(this.#password.length);
    }
}

const user1 = new User("john", "secret123");
console.log(user1.getPassword());