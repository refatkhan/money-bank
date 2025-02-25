document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amountAdd = document.getElementById('account-ammount').value ;
    const convertedAmount = parseFloat(amountAdd);
    const pin = document.getElementById('account-pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

  if (convertedAmount){
    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        alert('Transaction Success');
    }else{
        alert('Wrong credential')
    }
  }else{
    alert("Enter Amount");
  }
})