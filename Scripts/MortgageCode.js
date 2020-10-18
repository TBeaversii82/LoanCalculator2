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

    let table = document.getElementById("results");
    let row = table.insertRow(9);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = monthlyPayment;
    cell2.innerHTML = totalInterest;
    cell3.innerHTML = totalPayment
    cell4.innerHTML = rBalance;
    cell5.innerHTML = prinPayment;
    //cell6.innerHTML = ;
    
    //console.log(amount, months, interest);
    return;
}

function table() {





    //console.log(amount, months, interest);
}

   


function summary() {

    let amount = document.getElementById("amountLoan").value;
    let months = document.getElementById("monthsLoan").value;
    let interest = document.getElementById("rateLoan").value;

    console.log(amount, months, interest);
}

function reset() {
    document.getElementById("amountLoan").value = "";
    document.getElementById("monthsLoan").value = "";
    document.getElementById("rateLoan").value = "";
}