const billAmount=document.getElementById('billAmount')
const tipPercentage=document.getElementById('tipPercentage')
const numOfPeople=document.getElementById('numPeople')
const calculateButton=document.getElementById('calculateButton')
const totalTip=document.getElementById('totalTip')
const tipPerPerson=document.getElementById('tipPerPerson')


calculateButton.addEventListener('click',calculateTip)



function calculateTip(){
    totalBill=parseFloat(billAmount.value)
    totalTipGiven=parseFloat(tipPercentage.value)
    totalPerson=parseInt(numOfPeople.value)

    //Validation

    if((Number.isNaN(totalBill)) ||
    (Number.isNaN(totalTipGiven)) ||
    (Number.isNaN(totalPerson)) ||
    totalPerson<0)
    {
        alert("Please give the valid input")
    }

    const tipCalculation=((totalTipGiven/100)*totalBill)
    totalTip.textContent=`Total Tip : ${tipCalculation.toFixed(2)}`

    tipPerPerson.textContent=`Tip Per Person : ${(tipCalculation/totalPerson).toFixed(2)}`

   
    billAmount.value = '';
    tipPercentage.value = '';
    numOfPeople.value = '';

    
   


}