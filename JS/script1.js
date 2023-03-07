const INCOME = document.getElementById('income_amt');
const EXPENSE = document.getElementById('expense_amt');
const SUBMIT_BUTTON = document.querySelector('button');

SUBMIT_BUTTON.addEventListener("click",function(e){
    e.preventDefault;
    let income_amt = Number(getValue(INCOME));
    let expense_amt =  Number(getValue(EXPENSE));
    let balance_amt =(income_amt - expense_amt) ;

    const Message = getMessage(income_amt,expense_amt,balance_amt);
    const result = document.getElementById('result');
   // const form = document.querySelector('form');
    result.innerHTML=Message;
   //form.innerHTML=Message;

})


function getValue (item){
    return item.value;

}


function getMessage(income , expense,balance){
    return  `Thank you providing the inputs. Income : ${income} and  expense: ${expense} . Your balance : ${balance}`
}