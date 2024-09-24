
// Noakhali-Float
document.getElementById('noakhali-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const noakhaliInputNumber = getInputValueById('noakhali-input');
    console.log(noakhaliInputNumber)
    
    if(typeof noakhaliInputNumber === 'number' && noakhaliInputNumber > 0){
        const myBalance = getTextValueById('my-balance')
        const substraction = myBalance - noakhaliInputNumber ;
        document.getElementById('my-balance').innerText = substraction;
        if(substraction < 0){
            alert('Your Balance is 0 tk')
        }
        const noakhaliDonationBalance = getTextValueById('noakhali-amount');
        const newDonationOfNoakhali = noakhaliDonationBalance + noakhaliInputNumber;
    
        document.getElementById('noakhali-amount').innerText = newDonationOfNoakhali;
        console.log(newDonationOfNoakhali)

         
    }
    else{
        alert('Please Try again !')
    }
})

// Feni-Float
document.getElementById('feni-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const feniInputNumber = getInputValueById('feni-input');
    console.log(feniInputNumber)
    
    if(typeof feniInputNumber === 'number' && feniInputNumber > 0){
        const myBalance = getTextValueById('my-balance')
        const substraction = myBalance - feniInputNumber ;
        document.getElementById('my-balance').innerText = substraction;
        if(substraction < 0){
            alert('Your Balance is 0 tk')
        };
        const feniDonationBalance = getTextValueById('feni-amount');
        const newDonationOfFeni = feniDonationBalance + feniInputNumber;
    
        document.getElementById('feni-amount').innerText = newDonationOfFeni;
        console.log(newDonationOfFeni)

      

    }
    else{
        alert('Please Try again !')
    }
})
// Student-Aldolon
document.getElementById('quota-movement-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const quotaInputNumber = getInputValueById('quota-input');
    console.log(quotaInputNumber)
    
    if(typeof quotaInputNumber === 'number' && quotaInputNumber > 0){
        const myBalance = getTextValueById('my-balance')
        const substraction = myBalance - quotaInputNumber ;
        document.getElementById('my-balance').innerText = substraction;
        if(substraction < 0){
            alert('Your Balance is 0 tk')
        }
        const quotaDonationBalance = getTextValueById('quota-donation-amount');
        const newDonationOfQuotaMovement = quotaDonationBalance + quotaInputNumber;
    
        document.getElementById('quota-donation-amount').innerText = newDonationOfQuotaMovement;
        console.log(newDonationOfQuotaMovement)
    }
    else{
        alert('Please Try again !')
    }
})