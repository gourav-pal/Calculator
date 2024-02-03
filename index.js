const toggle=document.getElementById('toggle');
const body=document.body;
toggle.addEventListener('click',()=>{
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    themeImage.src = isDarkMode ? '/assets/light.png' : '/assets/dark.png';
})




const inputOne=document.getElementById('input-one')
const inputTwo=document.getElementById('input-two')
const operator=document.getElementById('operator')
const equalBtn=document.getElementById('equal-btn')
const ans=document.getElementById('answer')
const history=document.getElementById('history')


equalBtn.addEventListener('click',()=>{
    const inputOneVal=parseInt(inputOne.value);
    const inputTwoVal=parseInt(inputTwo.value);

    let result=0;

    switch(operator.value) {
        case '+': 
            result = inputOneVal + inputTwoVal;
            break;
        case '-': 
            result = inputOneVal - inputTwoVal;
            break;
        case '*': 
            result = inputOneVal * inputTwoVal;
            break;
        case '/': 
            result = inputOneVal / inputTwoVal;
            break;
        default:
            result = "Select valid operator";
    }
    console.log(result);
    ans.innerText="Ans"+"="+result;


    const historyString= inputOne.value+' '+ operator.value+' '+inputTwo.value+'='+result;
    const listItem=document.createElement('li')
    listItem.innerText = historyString;
    listItem.style.listStyleType='none';
    history.appendChild(listItem);
    inputOne.value=null;
    inputTwo.value=null;    

})