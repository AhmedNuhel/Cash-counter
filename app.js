const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#input-cash");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-msg");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");
checkButton.addEventListener("click", validateBillAndCashAmount);
function validateBillAndCashAmount(){
    hideMessage();
    if(Number(billAmount.value) > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The cash provided should be atleast equal to the bill amount");
        }
    } else {
        showMessage("Invalid input");
    }
}
function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
    
function hideMessage() {
    errorMessage.style.display = "none";
}
    
function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}
