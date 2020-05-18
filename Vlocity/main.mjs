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
        
// Set the status code of the response.
    res.status(200);
}) ;




Sandbox.define('/OneTimePayment','GET', function(req, res) {
// This API returns a confirmation of a one-time-online payment by a customer.
// Expected parameters:
// PaymentType = VISA, AMEX, DEBIT, any others will return unsupported payment type
// PaymentDate = todays date
    var today = new Date();
// Payment amount simply returns the same value passed
    var payamount = req.query.Amount;


    
// Response Examples:
    var PaymentConfirmed = [{
        "ResponsePaymentType": "VISA",
        "ResponsePaymentDate": today,
        "ResponsePaymentAmount": payamount,
        "ResponsePaymentStatus" : "Confirmed",
        "ResponsePaymentReason" : "Ok"
    }];
    
        var PaymentRejected = [{
        "ResponsePaymentType": "AMEX",
        "ResponsePaymentDate": today,
        "ResponsePaymentAmount": payamount,
        "ResponsePaymentStatus" : "Sufficient Funds Not Available",
        "ResponsePaymentReason" : "Declined"
    }];
    
        var PaymentDirectDebitConfirmed = [{
        "ResponsePaymentType": "DEBIT",
        "ResponsePaymentDate": today,
        "ResponsePaymentAmount": payamount,
        "ResponsePaymentStatus" : "Confirmed",
        "ResponsePaymentReason" : "Ok"
    }];
    
        var PaymentDirectDebitUnsupported = [{
        "ResponsePaymentType": n.query.PaymentType,
        "ResponsePaymentDate": today,
        "ResponsePaymentAmount": payamount,
        "ResponsePaymentStatus" : "Payment type not available",
        "ResponsePaymentReason" : "Declined"
    }];

    var m = req.query.PaymentType;
    
// Dynamic Response Section
    if (m.includes("VISA"));
        {
            return res.json(PaymentConfirmed);
        } 
    elseif  (m.includes("AMEX"));
        {
            return res.json(PaymentRejected);
        }
    elseif (m.includes("Debit"));
        {
            return res.json(PaymentDirectDebitConfirmed);
        }
    endif
        {
            return res.json(PaymentDirectDebitConfirmed);
        }
    // Send the response body.
    res.json({
        "status": "ok"
    });
})