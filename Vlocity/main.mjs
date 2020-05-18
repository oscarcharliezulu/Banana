/**
 * My API Sandbox
 * 
 */

Sandbox.define('/Blacklist', 'GET', function(req, res){
//  Return information on Blacklisted customers
    
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


