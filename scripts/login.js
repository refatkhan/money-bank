document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    console.log(accountNumber);
    const accountPin = document.getElementById('account-pin').value;
    if(accountNumber.length === 11){
        if(parseInt(accountPin) === 1234){
            window.location.href = "./main.html";
        }else{
            alert('wrong pin');
        }
    }else{
        alert('enter valid account number');
    }
});
