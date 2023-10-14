
//INCOME BUTTON CLICK AND OPEN FIELD
let incomeButtonOpenVariable
function incomeButton(){
   incomeButtonOpenVariable= document.querySelector(".incomeButtonOpen")
   incomeButtonOpenVariable.style.display="block"
   
}
//INCOME CLOSING BUTTON
document.querySelector("#leftClose").addEventListener("click",function(){incomeButtonOpenVariable.style.display="none"
errorIncomeDescription.innerHTML=" " //ERROR TEXT CLEAR AFTER CLOSE AND OPEN
    errorIncomeAmount.innerHTML=""  
})


//INCOME BUTTON OPEN FILED OR AREA

var incomeSubmitButton=document.querySelector("#incomeSubmit");//submit button make to varaible
var incomeTable=document.querySelector("#incomeTable") // HTML'S TABLE ASSIGHNED TO VARIABLE


var totalRow= incomeTable.insertRow();//FINAL ROW CREATED TO PRINT SUM OUTSIDE FUNCTION AVOID LOOP
totalRow.addEventListener("mouseenter",function(){
  totalRow.style.backgroundColor="green"
})

totalRow.addEventListener("mouseleave",function(){
  totalRow.style.backgroundColor="white"
})


var toatalcolumn1=totalRow.insertCell(0) //ONLY 2 COLM NEDDED TOTAL AND SUM OF IT
var toatalcolumn2=totalRow.insertCell(1) //THIS COLMN WILL SHOW THE SUM ,NEED TO WRITE FUNCTION 
var incomeRowNumberCount=0; //INITIALIZED TO JUST PRINT THE SERIAL NUMBER

toatalcolumn1.colSpan="2" //SPAN THE 1ST AND 2NS COLMN
toatalcolumn1.style.width="20%" //OTHER WISE TOOK HIGH WIDTH
toatalcolumn1.innerHTML="TOTAL"
toatalcolumn2.innerHTML="" //THIS WILL CHANGE AFTER VARIABLE COMES


let initialSum=0; //TO CALCULATE TOTAL INCOME SUM
var balance; //TO ASSIGN BALANCE AMOUNT
let errorIncomeDescription=document.querySelector("#errorIncomeDescription")
let errorIncomeAmount=document.querySelector("#errorIncomeAmount")


incomeSubmitButton.addEventListener("click",function(){
   let incomeDescriptionFieldValue =document.querySelector("#incomeDescriptionField").value;
   incomeDescriptionFieldValue=incomeDescriptionFieldValue.toUpperCase(); //CONVERTED TO CAPITAL LETTER
   let incomeAmountFieldValue=parseFloat(document.querySelector("#incomeAmountField").value)//SOMETIMES VALUE CANT RECOGNIZE SO IF A NUMBER VALUE COMES ALWSY USE PARSEFLOAT OR PARSEINT
   
   if(incomeDescriptionFieldValue=== "" || incomeDescriptionFieldValue.length <2 || /\d/.test(incomeDescriptionFieldValue) || /[@?]{2,}/.test(incomeDescriptionFieldValue)){
      var errorIncomeDescriptionIndicator=1;
   }
    if(incomeAmountFieldValue==="" || isNaN(incomeAmountFieldValue) ||incomeAmountFieldValue<0 ){
      var errorIncomeAmountIndicator=2
    }
    if(errorIncomeDescriptionIndicator===1 && errorIncomeAmountIndicator===2){
      errorIncomeDescription.innerHTML="Not To Be Empty / Atleast 3 Letters Needed / Cannot Contain Number & Characters"
      errorIncomeAmount.innerHTML="Not To Be Empty / Allowed Numbers Only"
      return;
    }
    else if(errorIncomeDescriptionIndicator===1){
      errorIncomeAmount.innerHTML=""
      errorIncomeDescription.innerHTML="Not To Be Empty / Atleast 3 Letters Needed / Cannot Contain Number & Characters"
      return;
    }
    else if(errorIncomeAmountIndicator===2){
      errorIncomeDescription.innerHTML=" "
      errorIncomeAmount.innerHTML="Not To Be Empty / Allowed Numbers Only"
      return;
    }
    errorIncomeDescription.innerHTML=" "
    errorIncomeAmount.innerHTML=""  

   
   document.querySelector("#incomeTableContainer").style.display="block" //WRITE AFTER IF CONDITION TO AVOID OPEN DETAILS EEVEN ERROR
   document.querySelector("#chartContainer").style.display="block" 
  
   var newRowCreated = incomeTable.insertRow(totalRow.rowIndex);//INBUILD FUNCTION () PROVIDE API,ADD NEW ROW UNDER EXISTING TABLE IF WE(totalRow.rowIndex) WRITE LIKE THIS IT WILL ADD ROW ABOVE OF IT
   var column1 =newRowCreated.insertCell(0); //INBUILD FUNCTION TO CREATE COLUMN WITH INDEX
   var column2 =newRowCreated.insertCell(1); 
   var column3 =newRowCreated.insertCell(2);  

    column1.style.width="15%"//SERIAL NO WIDH REDUCED TO 10%
    column1.innerHTML = ++incomeRowNumberCount;
    column2.innerHTML = incomeDescriptionFieldValue;
    column3.innerHTML = incomeAmountFieldValue;

     //TOTAL SUM CALCULATING
    // initialSum=initialSum+incomeAmountFieldValue; //OR WE CAN WRITE THIS IN BLOVE
    initialSum +=incomeAmountFieldValue;
    toatalcolumn2.innerHTML=initialSum

    calculateBalance();//CALLING OUTSIDE FUNCTION TO GIVE THIS initialSum VALUE AND PRINT REMAINING BALANCE
    chartAdd()


     //INPUT CLEARING
     document.querySelector("#incomeDescriptionField").value="" //WE CANT CLEAR THE FIELD BY VARIABLE,BCZ WE NEED TO CHANGE THE COMING PATH MEMORY LOCATION(HTML"S WEB API MEMMORY)
     document.querySelector("#incomeAmountField").value=""
     
})


function calculateBalance(){
  balance=initialSum-initialSumExpense
  document.querySelector("#Balance").innerHTML=`Remaining Balance is ${balance}`;
}


//EXPENSE BUTTON CLICK AND OPEN FIELD
let expenseButtonOpenVariable
function expenseButton(){
   expenseButtonOpenVariable= document.querySelector(".expenseButtonOpen")
   expenseButtonOpenVariable.style.display="block" 
}
//EXPENSE CLOSING BUTTON
document.querySelector("#rightClose").addEventListener("click",function(){ expenseButtonOpenVariable.style.display="none"
errorExpenseDescription.innerHTML=" " //ERROR TEXT CLEAR AFTER CLOSE AND OPEN
errorExpenseAmount.innerHTML=""
})



//EXPENSE BUTTON OPEN FILED OR AREA

let expenseSubmitButton=document.querySelector("#expenseSubmit");//SUBMIT BUTTON MALE TO VARIABLE
let expenseTable=document.querySelector("#expenseTable") // HTML'S TABLE ASSIGHNED TO VARIABLE

let totalRowExpense= expenseTable.insertRow();//FINAL ROW CREATED TO PRINT SUM OUTSIDE FUNCTION AVOID LOOP

totalRowExpense.addEventListener("mouseenter",function(){
  totalRowExpense.style.backgroundColor="red"
})

totalRowExpense.addEventListener("mouseleave",function(){
  totalRowExpense.style.backgroundColor="white"
})



let toatalcolumn1Expense=totalRowExpense.insertCell(0) //ONLY 2 COLM NEDDED TOTAL AND SUM OF IT
let toatalcolumn2Expense=totalRowExpense.insertCell(1) //THIS COLMN WILL SHOW THE SUM ,NEED TO WRITE FUNCTION 
let ExpenseRowNumberCount=0; //INITIALIZED TO JUST PRINT THE SERIAL NUMBER

toatalcolumn1Expense.colSpan="2" //SPAN THE 1ST AND 2NS COLMN
toatalcolumn1Expense.style.width="20%" //OTHER WISE TOOK HIGH WIDTH
toatalcolumn1Expense.innerHTML="TOTAL"
toatalcolumn2Expense.innerHTML="" //THIS WILL CHANGE AFTER VARIABLE COMES


let initialSumExpense=0; //TO CALCULATE TOTAL SUM AND ALSO BALANCE
let errorExpenseDescription=document.querySelector("#errorExpenseDescription") //SMALL CONTENT TO PUSH ERROR TEXT
let errorExpenseAmount=document.querySelector("#errorExpenseAmount")


expenseSubmitButton.addEventListener("click",function(){
   let expenseDescriptionFieldValue = document.querySelector("#expenseDescriptionField").value;
   expenseDescriptionFieldValue=expenseDescriptionFieldValue.toUpperCase(); //CONVERTED TO CAPITAL LETTER
   let expenseAmountFieldValue=parseFloat(document.querySelector("#expenseAmountField").value)//SOMETIMES VALUE CANT RECOGNIZE SO IF A NUMBER VALUE COMES ALWSY USE PARSEFLOAT OR PARSEINT
   
   if(expenseDescriptionFieldValue=== "" || expenseDescriptionFieldValue.length <2 || /\d/.test(expenseDescriptionFieldValue)|| /[@?]{2,}/.test(expenseDescriptionFieldValue)){
      var errorExpenseDescriptionIndicator=1;
   }
    if(expenseAmountFieldValue==="" || isNaN(expenseAmountFieldValue) || expenseAmountFieldValue<0){
      var errorExpenseAmountIndicator=2
    }
    if( errorExpenseDescriptionIndicator===1 && errorExpenseAmountIndicator===2){
      errorExpenseDescription.innerHTML="Not To Be Empty / Atleast 3 Letters Needed / Cannot Contain Number & Characters"
      errorExpenseAmount.innerHTML="Not To Be Empty / Allowed Numbers Only"
      return;
    }
    else if(errorExpenseDescriptionIndicator===1){
      errorExpenseAmount.innerHTML=""
      errorExpenseDescription.innerHTML="Not To Be Empty / Atleast 3 Letters Needed / Cannot Contain Number & Characters"
      return;
    }
    else if(errorExpenseAmountIndicator===2){
      errorExpenseDescription.innerHTML=" "
      errorExpenseAmount.innerHTML="Not To Be Empty / Allowed Numbers Only"
      return;
    }
    errorExpenseDescription.innerHTML=" "
    errorExpenseAmount.innerHTML=""

   
   document.querySelector("#expenseTableContainer").style.display="block" //WRITE AFTER IF CONDITION TO AVOID OPEN DETAILS EEVEN ERROR
   document.querySelector("#chartContainer").style.display="block" 
  
   let newRowCreated = expenseTable.insertRow(totalRowExpense.rowIndex);//INBUILD FUNCTION () PROVIDE API,ADD NEW ROW UNDER EXISTING TABLE IF WE(totalRow.rowIndex) WRITE LIKE THIS IT WILL ADD ROW ABOVE OF IT
   let column1 =newRowCreated.insertCell(0); //INBUILD FUNCTION TO CREATE COLUMN WITH INDEX
   let column2 =newRowCreated.insertCell(1); 
   let column3 =newRowCreated.insertCell(2);  

    column1.style.width="15%"//SERIAL NO WIDH REDUCED TO 10%
    column1.innerHTML = ++ExpenseRowNumberCount;
    column2.innerHTML = expenseDescriptionFieldValue;
    column3.innerHTML = expenseAmountFieldValue;

     //TOTAL SUM CALCULATING
    initialSumExpense=initialSumExpense+ expenseAmountFieldValue;
    toatalcolumn2Expense.innerHTML=initialSumExpense

    calculateBalance(); //CALLING OUTSIDE FUNCTION TO GIVE THIS initialSum VALUE AND PRINT REMAINING BALANCE
    chartAdd()

     //INPUT CLEARING
     document.querySelector("#expenseDescriptionField").value="" //WE CANT CLEAR THE FIELD BY VARIABLE,BCZ WE NEED TO CHANGE THE COMING PATH MEMORY LOCATION(HTML"S WEB API MEMMORY)
     document.querySelector("#expenseAmountField").value=""
    
})





// CHART AREA 
function chartAdd () {
  var xValues = ["INCOME","BALANCE","EXPENSE"];
  var i = "pppp"
  var yValues = [initialSum, balance,initialSumExpense];
  var barColors = [
    "green",
    "blue",
    "red",
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: ""
      }
    }
  });
}