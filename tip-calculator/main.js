const formEl = document.querySelector('.form')
const billInput = formEl.children.bill;
const tipInput = formEl.children.tip;
const totalEl = document.querySelector('.total')

formEl.addEventListener('submit', formHandler)
function formHandler(evt){
    evt.preventDefault()
    const total = calculateTotal()
    console.log(total)
    totalEl.textContent = `Total: ${total}`;
}

function calculateTotal(){
    const billAmount = Number(billInput.value);
    const tipPercentage = Number(tipInput.value);
    if(billAmount <= 0 || tipPercentage <= 0) alert('The numbers must be bigger than 0.')
    return (billAmount + (billAmount * tipPercentage / 100)).toFixed(2)
}