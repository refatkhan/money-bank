document.getElementById('cashout-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('cashout-ammount').value ;
    const convertedAmount = parseFloat(cashOutAmount);
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(convertedPin === 1234){
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        
    }else{
        alert('Wrong credential')
    }
  
})