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

    //Balance
    let rBalance = (amount - monthlyPayment).toFixed(2);

    //Show Results
    document.getElementById("mPayments").innerHTML = "$" + monthlyPayment;
    document.getElementById("iRPayments").innerHTML = "$" + totalInterest;
    document.getElementById("Payments").innerHTML = "$" + totalPayment
    document.getElementById("remainBalance").innerHTML = "$" + rBalance;
    document.getElementById("princialPayment").innerHTML = "$" + prinPayment;

    //let table = document.getElementById("results");
    ////inserts row at the end of the table 
    //let row = table.insertRow(9);
    ////inserts the cell in the row
    //let cell1 = row.insertCell(0);
    //let cell2 = row.insertCell(1);
    //let cell3 = row.insertCell(2);
    //let cell4 = row.insertCell(3);
    //let cell5 = row.insertCell(4);
    //let cell6 = row.insertCell(5);
    
    ////outputs in the row
    ////cell1.innerHTML = ;
    //cell2.innerHTML = monthlyPayment;
    //cell3.innerHTML = prinPayment;
    //cell4.innerHTML = totalInterest
    //cell5.innerHTML = totalPayment;
    //cell6.innerHTML = rBalance;
    var intRate = 0;
    let balance = principal;
    //create new array 
    let array = new Array();
    for (i = 0; i < months && balance > 0; i++) {
        intRate += parseFloat(balance * (monthly));
        array[i] = new Array();
        array[i][0] = (i + 1).toFixed(0);
        array[i][1] = parseFloat(x).toFixed(2);
        array[i][2] = parseFloat(x - (balance * (monthly))).toFixed(2);
        array[i][3] = parseFloat(balance * (monthly)).toFixed(2);
        array[i][4] = parseFloat(intRate).toFixed(2);
        array[i][5] = parseFloat(balance - x).toFixed(2);
        if (x > balance) {
            arr[i][1] = arr[i - 1][5];
            arr[i][2] = arr[i][1] - arr[i][3];
            arr[i][5] = 0.00;
        }
        balance -= parseFloat(x).toFixed(2);


    }

    var table = document.getElementById("results").getElementsByTagName("tbody")[0];
    for (let j = 0; table.rows.length > 0; j++) {
        table.deleteRow(-1);
    }
    for (let k = 0; k < months; k++) {
        let newRow = table.insertRow();
        var myTable = `<td>${(array[k][0])}</td><td>${(array[k][1])}</td><td>${(array[k][2])}</td><td>${(array[k][3])}</td><td>${(array[k][4])}</td><td>${(array[k][5])}</td>`;
        newRow.innerHTML = myTable;
    }
    return;
}



    
    //console.log(amount, months, interest);
    //return;









//function summary() {

//    let amount = document.getElementById("amountLoan").value;
//    let months = document.getElementById("monthsLoan").value;
//    let interest = document.getElementById("rateLoan").value;

//    console.log(amount, months, interest);
//}

function reset() {
    document.getElementById("amountLoan").value = "";
    document.getElementById("monthsLoan").value = "";
    document.getElementById("rateLoan").value = "";
}