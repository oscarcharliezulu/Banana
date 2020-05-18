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

});



// --------------------------------------------------------------------------------------------------------------------
Sandbox.define('/OneTimePayment','GET', function(req, res){
    // This API returns a confirmation of a one-time-online payment by a customer.
    // Expected parameters:
    // PaymentType = VISA, AMEX, DEBIT, any others will return unsupported payment type
    // Payment amount simply returns the same value passed
        
    // PaymentDate = todays date
        var today = new Date();

    // Generate a random Receipt Number:
        var receipt =  Math.floor(Math.random() * 1000000000);
    
    // Other variables
        var paychannel = req.query.PaymentType;
        var payamount = req.query.Amount;

    // Response Examples:
        var PaymentConfirmed = [{
            "ResponsePaymentType": req.query.PaymentType,
            "ResponsePaymentDate": today,
            "ResponsePaymentAmount": req.query.Amount,
            "ResponsePaymentStatus" : "Confirmed",
            "ResponsePaymentReason" : "Ok",
            "ResponsePaymentReceipt" : receipt,
            "ResponsePaymentCurrency" : req.query.AmountCurrency,
            "PayAmount" : payamount
        }];
        var PaymentRejected = [{
            "ResponsePaymentType": req.query.PaymentType,
            "ResponsePaymentDate": today,
            "ResponsePaymentAmount": req.query.Amount,
            "ResponsePaymentStatus" : "Sufficient Funds Not Available",
            "ResponsePaymentReason" : "Declined",
            "ResponsePaymentReceipt" : receipt,
            "ResponsePaymentCurrency" : req.query.AmountCurrency 
        }];
        
        var PaymentUnsupported = [{
            "ResponsePaymentType": req.query.PaymentType,
            "ResponsePaymentDate": today,
            "ResponsePaymentAmount": req.query.Amount,
            "ResponsePaymentStatus" : "Declined",
            "ResponsePaymentReason" : "Payment type not supported",
            "ResponsePaymentReceipt" : receipt,
            "ResponsePaymentCurrency" : req.query.AmountCurrency 
        }];
    
    // Dynamic Response Section
    
    if (payamount > 5000)
            {
                return res.json(PaymentRejected);
            }
            
    else
    {
    if (paychannel.includes("VISA"))
            {
                return res.json(PaymentConfirmed);           
            }
            
    if (paychannel.includes("DEBIT"))
            {
                return res.json(PaymentConfirmed);           
            }
            
    if (paychannel.includes("AMEX"))
            {
                return res.json(PaymentUnsupported);           
            }

    if ( (!paychannel.includes("AMEX")) && (!paychannel.includes("AMEX")) && (!paychannel.includes("DEBIT")) )
            {
                return res.json(PaymentUnsupported);           
            }
}

});