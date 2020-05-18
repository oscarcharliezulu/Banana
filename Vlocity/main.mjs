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
        
// Default status code of the response is res.status(200);

}) ;



// --------------------------------------------------------------------------------------------------------------------
Sandbox.define('/OneTimePayment','GET', function(req, res) {
// This API returns a confirmation of a one-time-online payment by a customer.
// Expected parameters:
// PaymentType = VISA, AMEX, DEBIT, any others will return unsupported payment type
// PaymentDate = todays date
    var today = new Date();
// Payment amount simply returns the same value passed
    var payamount = req.query.Amount;

    return res.json(req.query.PaymentType);
});