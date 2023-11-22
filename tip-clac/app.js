
function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    var tipAmount = billAmount * (tipPercentage / 100);
    var totalBill = billAmount + tipAmount;

    document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
    document.getElementById("totalBill").innerText = totalBill.toFixed(2);
}