//Event that listens if the loan button is clicked
document.getElementById("loan", "results", "summary").addEventListener("click", loanResults, table);
function loanResults() {
    ////Add to table
    //let table = document.createElement("table");
    //let row = table.insertRow();
    //let cell = row.insertCell();
    //cell.textContent = "NewCell!";

    //document.body.appendChild(table);

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

    //Balance
    let rBalance = (amount - monthlyPayment).toFixed(2);

    //Show Results
    document.getElementById("mPayments").innerHTML = "$" + monthlyPayment;
    document.getElementById("iRPayments").innerHTML = "$" + totalInterest;
    document.getElementById("Payments").innerHTML = "$" + totalPayment
    document.getElementById("remainBalance").innerHTML = "$" + rBalance;
    document.getElementById("princialPayment").innerHTML = "$" + prinPayment;


    
    //console.log(amount, months, interest);
    return;
}

function table() {
    var table = document.getElementById("results");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = " ";
    cell2.innerHTML = " ";
    
    //console.log(amount, months, interest);
}

//function summary() {
//   
//    console.log(amount, months, interest);
//}

function reset() {
    document.getElementById("amountLoan").value = "";
    document.getElementById("monthsLoan").value = "";
    document.getElementById("rateLoan").value = "";
}