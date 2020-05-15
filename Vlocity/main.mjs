/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";

// A basic route returning a canned response
Sandbox.define('/Blacklist', 'GET', function(req, res){
    // send 'Hello world' response
    // res.send('Hello world');
    
    var failed = [{
        "Blacklist": "Fraud",
        "Outcome": "On Blacklist",
        "Recorded": " {{today}} "
    }]
    
    var passed = [{
        "Blacklist": "Fraud",
        "Outcome": "On Blacklist",
        "Recorded": " {{today}} "
    }]
    
    if (req.query.FirstName == "John") {
        return res.json(failed)
    } else {
        return res.json(passed)
    }
});

// Using stateful behaviour to simulate creating users
Sandbox.define('/users', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/users', 'GET', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/users/{username}', 'GET', getUserByUsernameHandler);