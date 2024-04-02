const buttonF = document.getElementById('submitp');
const formT = document.getElementById('toppings');
const inputT = document.getElementById('phone');

buttonF.addEventListener('click', ()=>{
    if(inputT.value.length === 10){
        formT.submit();
    }
    alert("Enter a phone number");
})
