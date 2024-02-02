// login page js
function login (){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email=='1234@gmail.com' && password=='1234'){
        window.location.href='bank.html';
    } else {
        alert('please provide valid email and password')
    }
}

let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw"); 
let totalBalance = document.getElementById("totalbalance");
let depositInput = document.getElementById("depositInput");
let withdrawInput = document.getElementById("withdrawInput");

function depositButton(){
    let depositInput1 = parseFloat(depositInput.value)
    deposit.innerText = depositInput1 +  parseFloat (deposit.innerText)
    totalBalance.innerText = depositInput1 + parseFloat(totalBalance.innerText) 
    depositInput.value='0'
}
function withdrawButton(){
    let withdrawInput1 = parseFloat(withdrawInput.value);
    withdraw.innerText = withdrawInput1 + parseFloat(withdraw.innerText);
    totalBalance.innerText = parseFloat(totalBalance.innerText) - withdrawInput1;
    withdrawInput.value = '0';
} 
