function loanResults() {
    
    //Where the input is stored
    let amount = document.getElementById("amountLoan").value;
    let months = document.getElementById("monthsLoan").value;
    let interest = document.getElementById("rateLoan").value;

    //Calculate and converts to decimal
    let principal = parseFloat(amount);
    let calculateInterest = parseFloat(interest) / 100 / 12;
    let calculatePayments = parseFloat(months)

    //Compute monthly Payment
    let x = Math.pow(1 + calculateInterest, calculatePayments);
    let monthly = (principal * x * calculateInterest) / (x - 1);
  
    let monthlyPayment = monthly.toFixed(2);//tofixed is to set the decimal place two places


    
    //Compute Interest
    let totalInterest = (monthly * calculatePayments - principal).toFixed(2);

    //Compute Total Payment
    let totalPayment = (monthly * calculatePayments).toFixed(2);

    //Compute Principal Payment
    let prinPayment = (totalPayment - monthlyPayment).toFixed(2);

    //////Balance
    //let rBalance = (amount - monthlyPayment).toFixed(2);

    //Show Summary Results
    document.getElementById("mPayments").innerHTML = "$" + monthlyPayment;
    document.getElementById("iRPayments").innerHTML = "$" + totalInterest;
    document.getElementById("Payments").innerHTML = "$" + totalPayment;
    //document.getElementById("remainBalance").innerHTML = "$" + rBalance;
    document.getElementById("princialPayment").innerHTML = "$" + prinPayment;
    
    //new array created 
    let intRate = 0;
    let loanBalance = totalPayment;
    let newPrincipal = principal;//princial ballance will change 
    let newInterestAmount = 0;
    //iterates through the array that is set
    let array = new Array();//stores new array length
    for (let i = 0; i < months && totalPayment > 0; i++) {
        newInterestAmount = calculateInterest * newPrincipal;
        newPrincipal = newPrincipal - (monthlyPayment - newInterestAmount);
        //intRate += parseFloat(loanBalance * monthlyPayment).toFixed(2);//adds interest to the result of the right side
        loanBalance -= monthly;
        intRate += newInterestAmount;//adds interest to the result of the right side
        array[i] = new Array();
        array[i][0] = (i + 1).toFixed(0);
        array[i][1] = parseFloat(monthly).toFixed(2);//monthly payment
        
        array[i][2] = i == months - 1 ? 0.00 : newPrincipal.toFixed(2);//has balance and monthly values
       
        array[i][3] = i == months - 1 ? 0.00 : newInterestAmount.toFixed(2);//interset rate
        array[i][4] = parseFloat(intRate).toFixed(2);// total interset rate
        array[i][5] = i == months - 1 ? 0.00 : parseFloat(loanBalance).toFixed(2);//balance
        


    }
    
    //takes the id and creates a new row in the table
    let table = document.getElementById("results").getElementsByTagName("tbody")[0];
    for (let j = 0; table.rows.length > 0; j++) {
        table.deleteRow(-1);//deletes the last row in the table
    }
    //total months and output that need to be in the table
    for (let i = 0; i < months; i++) {
        let row = table.insertRow();
        var loanTable = `<td>${(array[i][0])}</td><td>${(array[i][1])}</td><td>${(array[i][2])}</td><td>${(array[i][3])}</td><td>${(array[i][4])}</td><td>${(array[i][5])}</td>`;
        row.innerHTML = loanTable;

        
    }
    return;
    
}
//Clear button function
function reset() {
    document.getElementById("amountLoan").value = "";
    document.getElementById("monthsLoan").value = "";
    document.getElementById("rateLoan").value = "";
}



