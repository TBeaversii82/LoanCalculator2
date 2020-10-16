# Mortgage Loan Calculator
![](//Images/CoderTeamReadme1.png)

### Dragon - Star Coder Team 1 
* Orlando Olmo - Project Manager
* Jonathan Green - Lead Developer                       
* Tony Beavers - Lead Designer

#### Project Description:
This coding challenge was designed to test our coding skills as well as our remote collaboration skills. Our team is distributed across the East coast of the United States from Florida to Maryland.

#### The application requirements include three input parameters: 
1. The amount of money loaned in USD (balance). 
2. The time over which the loan will be repaid in months (term).
3. The percentage rate at which interest will accrue on the loan (rate).


#### The application should provide the following information as output: 
1. The monthly payment schedule from first to last for the life of the loan. 
2. The payment amount. 
3. The amount of principal paid each month. 
4. The interest paid each month. 
5. The total interest paid to date. 
6. The remaining loan balance at the end of each month.


#### Financial formulas to be used for this exercise are:
* Total monthly payment = (loan amount (rate/1200) / (1 - (1 + rate/1200)exp.(-number of months). 
* Remaining Balance = before the very first month equals the loan amount. 
* Interest Payment = previous remaining balance * rate/1200. 
* Principal Payment = total monthly payment - interest payment. 
* At the end each month = Remaining Balance = Previous Remaining balance - principal payments.


#### Specific Software Criteria: 
1. Built with Javascript, HTML, CSS, and Bootstrap. 
2. Code must reside in a Github repository. 
3. Github has all team members as contributors. 
4. App must be published to Netlify. 
5. JS Plugins and other JS libraries can be used.


JuiceDev20