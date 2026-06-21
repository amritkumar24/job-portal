export default class UserModel {
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getUser(){
        return users;
    }

    static addUser(user){
        users.push(user);
    }

    static getUserByEmail(email){
        return users.find((user) => user.email === email);
    }
}

const users = [];