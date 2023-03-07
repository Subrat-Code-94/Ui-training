const MEMBER = document.getElementById('member_count');
const TOTAL_EXPENSE = document.getElementById('total_expense');
const SUBMIT_BUTTON = document.querySelector('button');

SUBMIT_BUTTON.addEventListener("click",function(e){
    e.preventDefault;
    let member_count = Number(getValue(MEMBER));
    let expense_amt =  Number(getValue(TOTAL_EXPENSE));
    let balance_amt= expense_amt * 1.10 / member_count;
    let new_balance = balance_amt.toFixed(2);

    const Message = getMessage(new_balance);
    const result = document.getElementById('result');
    //const form = document.querySelector('form');
   result.innerHTML=Message;
   //form.innerHTML=Message;

})


function getValue (item){
    return item.value;

}


function getMessage(balance){
    return  `Thank you providing the inputs.The share per  person calculated is : ${balance}`
}