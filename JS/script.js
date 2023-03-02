const ITEM_NAME = document.getElementById('item_name');
const ITEM_VAL = document.getElementById('item_val');
const SUBMIT_BUTTON = document.querySelector('button');


SUBMIT_BUTTON.addEventListener("click",function(e){
    e.preventDefault;
    let item_name = getValue(ITEM_NAME).toUpperCase();
    let item_val =  getItemValue(ITEM_VAL,10)

    const Message = getMessage(item_name,item_val);
    const form = document.querySelector('form');
    form.innerHTML=Message;
})


function getValue (item){
    return item.value;

}

function getItemValue(itemSize , itemAdd){
    return Number(getValue(itemSize)) + itemAdd;
}

function getMessage(messageName , messageVal){
    return  `Thank you submiting the form. Item name : ${messageName} and  Item value: ${messageVal}`
}