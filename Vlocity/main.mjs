/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";

Sandbox.define('/Blacklist', 'GET', function(req, res){
    // send 'Hello world' response
    // res.send('Hello world');
    
    var failed = [{
        "Blacklist": "Fraud",
        "Outcome": "On Blacklist",
        "Recorded": "08/04/2013"
    }];
    
    var passed = [{
        "Blacklist": "None",
        "Outcome": "No Issues Found",
        "Recorded": "05/05/2020"
    }];
    
    var n = req.query.FirstName;
    
    if (n.includes("John"))
        {
            return res.json(failed);
        } 
    else 
    {
        return res.json(passed);
    }
}) ;


// Using stateful behaviour to simulate creating users
Sandbox.define('/users', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/users', 'GET', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/users/{username}', 'GET', getUserByUsernameHandler);