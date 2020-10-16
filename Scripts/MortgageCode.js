
//Event that listens if the loan button is clicked
document.getElementById("loan").addEventListener("click", loanResults);

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

    //Show Results
    document.getElementById("mPayments").innerHTML = "$" + monthlyPayment;
    document.getElementById("iRPayments").innerHTML = "$" +  totalInterest;
    document.getElementById("Payments").innerHTML = "$" + totalPayment


    //console.log(amount, months, interest);
    return;
}