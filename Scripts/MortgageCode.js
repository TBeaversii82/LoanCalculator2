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

    
    var intRate = 0;
    let balance = principal;
    //create new array 
    let array = new Array();
    for (i = 0; i < months && balance > 0; i++) {
        intRate += parseFloat(balance * (monthly));
        array[i] = new Array();
        array[i][0] = (i + 1).toFixed(0);//makes the array start from 1 to the length of the array. set to 0 so that the months are "1" instead of "1.0" etc
        array[i][1] = parseFloat(monthlyPayment).toFixed(2);
        array[i][2] = parseFloat(monthlyPayment - (balance * (monthly))).toFixed(2);
        array[i][3] = parseFloat(balance * (monthly)).toFixed(2);
        array[i][4] = parseFloat(intRate).toFixed(2);
        array[i][5] = parseFloat(balance - monthlyPayment).toFixed(2);
        if (monthlyPayment > balance) {
            array[i][1] = array[i - 1][5];
            array[i][2] = array[i][1] - array[i][3];
            array[i][5] = 0.00;
        }
        balance -= parseFloat(monthlyPayment).toFixed(2);


    }
    //takes the id and creates a new row in the table
    var table = document.getElementById("results").getElementsByTagName("tbody")[0];
    for (let j = 0; table.rows.length > 0; j++) {
        table.deleteRow(-1);//deletes the last roww in the table
    }
    //
    for (let i = 0; i < months; i++) {
        let newRow = table.insertRow();
        var myTable = `<td>${(array[i][0])}</td><td>${(array[i][1])}</td><td>${(array[i][2])}</td><td>${(array[i][3])}</td><td>${(array[i][4])}</td><td>${(array[i][5])}</td>`;
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