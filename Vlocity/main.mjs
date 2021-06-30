/**
 * My API Sandbox
 *  
 */

Sandbox.define('/Blacklist', 'GET', function(req, res){
    //  Return information on Blacklisted customers
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    
    var failed = [{
        "Blacklist": "Fraud",
        "Outcome": "On Blacklist",
        "Recorded": "08/03/2021"
    }];
    
    var passed = [{
        "Blacklist": "None",
        "Outcome": "No Issues Found",
        "Recorded": today
    }];
    
    
    var n = req.query.FirstName;
    
    if (n.includes("John")) {
        return res.json(failed);
    } else {
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
    var receipt = Math.floor(Math.random() * 1000000000);
    
    // Other variables
    var paychannel = req.query.PaymentType;
    var payamount = req.query.Amount;
    
    // Response Examples:
    var PaymentConfirmed = [{
        "ResponsePaymentType": req.query.PaymentType,
        "ResponsePaymentDate": today,
        "ResponsePaymentAmount": req.query.Amount,
        "ResponsePaymentStatus": "Confirmed",
        "ResponsePaymentReason": "Ok",
        "ResponsePaymentReceipt": receipt,
        "ResponsePaymentCurrency": req.query.AmountCurrency,
        "ResponsePaymentInstituion": req.query.Institution,
        "ResponsePaymentAccountName": req.query.AccountName
    }];
    var PaymentRejected = [{
        "ResponsePaymentType": req.query.PaymentType,
        "ResponsePaymentDate": today,
        "ResponsePaymentAmount": req.query.Amount,
        "ResponsePaymentStatus": "Sufficient Funds Not Available",
        "ResponsePaymentReason": "Declined",
        "ResponsePaymentReceipt": receipt,
        "ResponsePaymentCurrency": req.query.AmountCurrency,
        "ResponsePaymentInstituion": req.query.Institution,
        "ResponsePaymentAccountName": req.query.AccountName
    
    }];
    
    var PaymentUnsupported = [{
        "ResponsePaymentType": req.query.PaymentType,
        "ResponsePaymentDate": today,
        "ResponsePaymentAmount": req.query.Amount,
        "ResponsePaymentStatus": "Declined",
        "ResponsePaymentReason": "Payment type not supported",
        "ResponsePaymentReceipt": receipt,
        "ResponsePaymentCurrency": req.query.AmountCurrency,
        "ResponsePaymentInstituion": req.query.Institution,
        "ResponsePaymentAccountName": req.query.AccountName
    }];
    
    // Dynamic Response Section
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    if (payamount > 5000) {
        return res.json(PaymentRejected);
    } else {
        if (paychannel.includes("VISA")) {
            return res.json(PaymentConfirmed);
        }
    
        if (paychannel.includes("DEBIT")) {
            return res.json(PaymentConfirmed);
        }
    
        if (paychannel.includes("AMEX")) {
            return res.json(PaymentUnsupported);
        }
    
        if ((!paychannel.includes("AMEX")) && (!paychannel.includes("AMEX")) && (!paychannel.includes("DEBIT"))) {
            return res.json(PaymentUnsupported);
        }
    }
});



Sandbox.define('/SGLocate','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/PolicyAdminGetCustomerRecord','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    var n = req.query.AccountId;
    var PASaccount = [{
        "PASAccountNo": req.query.AccountId,
        "PASAccountName": "Rachel",
        "PASStatus": "In Force",
        "PASAccountCity": "Bangalore",
        "PASBilling": "Current"
    }];
    var PASaccount2 = [{
        "PASAccountNo": req.query.AccountId,
        "PASAccountName": "GAIL",
        "PASStatus": "In Force",
        "PASAccountCity": "Bangalore",
        "PASBilling": "Current"
    }];
    
    if (n.includes("0014x00000EqoanAAB")) {
        return res.json(PASaccount);
    } else {
        return res.json(PASaccount2);
    }
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})