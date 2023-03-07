const MOBILE = document.getElementById('count_mobile');
const TAB = document.getElementById('count_tab');
const LAPTOP = document.getElementById('count_laptop');

const MOBILE_BUTTON = document.getElementById('button-1');
const TAB_BUTTON = document.getElementById('button-2');
const LAPTOP_BUTTON = document.getElementById('button-3');

const MOBILE_RESULT = document.getElementById('mobile_result');
const TAB_RESULT = document.getElementById('tab_result');
const LAPTOP_RESULT = document.getElementById('laptop_result');



  



const myFunction = (item_count , price ,tax) => {
    let result = item_count * tax * price
        return result.toFixed(2)};

function getValue (item){
    return item.value;

}

function getResult(result,mobile,price ,tax){
    result.innerHTML = myFunction(getValue(mobile),price,tax);
}


    MOBILE_BUTTON.addEventListener("click",function(){
        getResult(MOBILE_RESULT,MOBILE,400,1.10);
    })
    TAB_BUTTON.addEventListener("click",function(){
        getResult(TAB_RESULT,TAB,500,1.15);
    })
    LAPTOP_BUTTON.addEventListener("click",function(){
        getResult(LAPTOP_RESULT,LAPTOP,600,1.20);
    })

