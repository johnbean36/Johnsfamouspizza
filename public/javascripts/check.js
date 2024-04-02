const formT = document.getElementById('toppings');
const inputT = document.getElementById('phone');
formT.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(inputT.value.length === 10){
        formT.submit();
    }
    else{
        alert("Select a customer");
    }

})
