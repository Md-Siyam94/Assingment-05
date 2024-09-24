
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
})

// Feni-Float
document.getElementById('').addEventListener('click',function(event){
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
})
// Student-Aldolon
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
})