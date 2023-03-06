

const tipAmount = document.getElementById("amount");
const teclas = document.querySelectorAll(".tecla__tecla");
const inputValue = document.getElementById("input__number");
const customInput = document.getElementById("tecla__number");
const people = document.getElementById("people__number");
const totalPeople = document.getElementById("total");
const numberZero = document.getElementById("number__zero");


teclas[0].addEventListener("click", ()=>{
    tipAmount.innerHTML =   parseFloat((inputValue.value/100 ) * 5).toFixed(2);
})

teclas[1].addEventListener("click", ()=>{
    tipAmount.innerHTML =   parseFloat((inputValue.value/100 ) * 10).toFixed(2);
})

teclas[2].addEventListener("click", ()=>{
    tipAmount.innerHTML =   parseFloat((inputValue.value/100 ) * 15).toFixed(2);
})

teclas[3].addEventListener("click", ()=>{
    tipAmount.innerHTML =   parseFloat((inputValue.value/100 ) * 25).toFixed(2);
})

teclas[4].addEventListener("click", ()=>{
    tipAmount.innerHTML =   parseFloat((inputValue.value/100 ) * 50).toFixed(2);
})

customInput.addEventListener("keyup", ()=>{
    tipAmount.innerHTML =   parseFloat((inputValue.value/100 ) * customInput.value).toFixed(2);
})



    numberZero.innerHTML = " Inclua um valor diferente de zero";
    totalPeople.innerHTML = "R$ 0.00";


people.addEventListener("keyup", ()=>{
    totalPeople.innerHTML =   parseFloat(tipAmount.innerText / people.value).toFixed(2);
    numberZero.innerHTML = "";
})





   



function resetTip(){
    window.location.reload();
}