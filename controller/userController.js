// logic //

import {v1} from "uuid";
import {users} from "../manager/manager.js"
export class UserController { 
    createUser (req, res) { 
        const {name, surname} = req.body;
        const id = v1();
        const books = [];
        const newUser = {name, surname, id, books};
        users.push(newUser); 
        res.send(newUser);
    };
    
    getUsers (req, res) { 
        res.send(users)
    };

    getUserById (req, res) { 
        const id = req.params.userId;
        const user = users.find((user) => user.id === id);
        res.send(user)
    };
    updateUser (req, res) { 
        const id = req.params.userId;
        const user = users.find((user) => user.id === id);
        const {name, surname} = req.body;
        user.name = name;
        user.surname = surname; // Satenikin harcnel !!!!
        res.send(user)
    }
    deleteUser (req, res) { 
        const id = req.params.userId;
        const userIndex = users.findIndex((user) => user.id === id);
        const deletedUser = users.splice(userIndex, 1)[0];
        res.send(deletedUser);
    };

    userValidate (req, res, next) { 
        const {name, surname} = req.body;
        if ( typeof name !== 'string' || typeof surname !== 'string' ) { 
            res.status(404).send('invalid type of data')
        } else { 
            next()
        }
    }
}







