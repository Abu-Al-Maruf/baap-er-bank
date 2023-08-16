
// log in page 
// log in page 

// step 1 -- add a click function to the submit button
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    // step 2 -- get the email input value when clicked the button
    const email = document.getElementById('user-email');
    const emailValue = email.value;


    // step 3 -- get the password input value when clicked the button
    const password = document.getElementById('user-password');
    const passwordValue = password.value;


    // step 4 -- check wheather the email and password right or wrong
    if(emailValue === 'maruf@gmail.com' && passwordValue === '111111'){
        window.location.href = 'bank.html';
    } else{
        alert('Wrong Password!!')
    }

   
})



