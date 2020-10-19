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
    let monthlyPayment = monthly.toFixed(2);
    
    //Compute Interest
    let totalInterest = (monthly * calculatePayments - principal).toFixed(2);

    //Compute Total Payment
    let totalPayment = (monthly * calculatePayments).toFixed(2);

    //Compute Principal Payment
    let prinPayment = (totalPayment - monthlyPayment).toFixed(2);

    //Show Summary Results
    document.getElementById("mPayments").innerHTML = "$" + monthlyPayment;
    document.getElementById("iRPayments").innerHTML = "$" + totalInterest;
    document.getElementById("Payments").innerHTML = "$" + totalPayment;
    document.getElementById("princialPayment").innerHTML = "$" + prinPayment;
    
    //New array created 
    let intRate = 0;
    let loanBalance = totalPayment;
    let newPrincipal = principal;
    let newInterestAmount = 0;
    //Iterates and stores the array 
    let array = new Array();
    for (let i = 0; i < months && totalPayment > 0; i++) {
        newInterestAmount = calculateInterest * newPrincipal;
        newPrincipal = newPrincipal - (monthlyPayment - newInterestAmount);
        loanBalance -= monthly;
        intRate += newInterestAmount;
        array[i] = new Array();
        array[i][0] = (i + 1).toFixed(0);//Months
        array[i][1] = parseFloat(monthly).toFixed(2);//Monthly payment
        array[i][2] = i == months - 1 ? 0.00 : newPrincipal.toFixed(2);//Principal balance
        array[i][3] = i == months - 1 ? 0.00 : newInterestAmount.toFixed(2);//Interest
        array[i][4] = parseFloat(intRate).toFixed(2);//Accrued interest
        array[i][5] = i == months - 1 ? 0.00 : parseFloat(loanBalance).toFixed(2);//Total balance
    }
    //Table
    let table = document.getElementById("results").getElementsByTagName("tbody")[0];
    for (let j = 0; table.rows.length > 0; j++) {
        table.deleteRow(-1);//Deletes the last row in the table
    }
    //Outputs table to HTML
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