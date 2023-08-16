
// money count page
// money count page

// step 1---- add a click event on the deposit button
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    // step 2 ---- get the input value from the deposit input!!
   const depositMoney = document.getElementById('deposit-money');
   const depositMoneyValue = parseFloat(depositMoney.value);

   

    //step 3 -- get the innertext from the deposit added!!
    const depositAdded = document.getElementById('deposit-added');
    const depositAddedValue = parseFloat(depositAdded.innerText);
 
    // step 4--- added total deposit = depsit amount + previous deposit
    depositAdded.innerText = depositAddedValue + depositMoneyValue ;

    // step 5 -- also added the deposit value to the total balance
    const totalBalance = document.getElementById('balance');
    const totalBalanceValue = parseFloat(totalBalance.innerText);

    totalBalance.innerText = totalBalanceValue + depositMoneyValue;


    // -- clear the deposit input value when it added to the deposit balance

    depositMoney.value = '';
    

});



// step 1 -- add addeventlisner to the withdraw button 
const withdrawBtn = document.getElementById('withdraw-btn');

withdrawBtn.addEventListener('click', function(){

    // step 2 -- get the withdraw input value
    const withdrawMoney = document.getElementById('withdraw-money');
    const withdrawMoneyValue = parseFloat(withdrawMoney.value);


    // step 3 -- get the withdraw total value
    const withdrawAdded = document.getElementById('withdraw-added');
    const withdrawAddedValue = parseFloat(withdrawAdded.innerText);

    // step 4 add withdraw total = input value + previous withdraw value

    withdrawAdded.innerText = withdrawAddedValue + withdrawMoneyValue;

    // step 5 -- also increase the withdraw value to the total balance
    const totalBalance = document.getElementById('balance');
    const totalBalanceValue = parseFloat(totalBalance.innerText);
    
    totalBalance.innerText = totalBalanceValue - withdrawMoneyValue;




    
    // -- clear the withdraw input value when it added to the deposit balance

    withdrawMoney.value = '';



    
    
})

