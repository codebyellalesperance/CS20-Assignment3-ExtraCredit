// Associative array for item names and prices
const prices = {
    "Hotdogs": 4.65,
    "Fries": 3.75,
    "Sodas": 1.89
};

// Function to round and format numbers to 2 decimal places
function showMoney(amount) {
    let rounded = Math.round(amount * 100) / 100;
    let decimalPart = (rounded - Math.floor(rounded)).toFixed(2).substring(2);
    return Math.floor(rounded) + "." + decimalPart;
}

// Function to calculate and display the order
function placeOrder() {
    // Associative array for the item names and quantities
    let quantities = {
        "Hotdogs": 0,
        "Fries": 0,
        "Sodas": 0
    };

    // Loop to get the item #s from the user
    for (let item in quantities) {
        quantities[item] = parseInt(prompt(`How many ${item.toLowerCase()} do you want?`), 10);
    }

    // Calculate the subtotal using a loop
    let subtotal = 0;
    for (let item in quantities) {
        subtotal += quantities[item] * prices[item];
    }
    let originalSubtotal = subtotal; // To show before discount

    // Calculate discount
    let discount = 0;
    if (subtotal >= 25) {
        discount = 0.1 * subtotal;
        subtotal -= discount;
    }

    // Add tax
    const tax = 0.0625 * subtotal;
    const total = subtotal + tax;

    // Order summary
    let summaryHtml = '';
    for (let item in quantities) {
        summaryHtml += `<p>${item} Ordered: ${quantities[item]} (Total: $${showMoney(quantities[item] * prices[item])})</p>`;
    }
    summaryHtml += `
        <p>Subtotal (Before Discount): $${showMoney(originalSubtotal)}</p>
        <p>Discount: $${showMoney(discount)}</p>
        <p>Subtotal (After Discount): $${showMoney(subtotal)}</p>
        <p>Tax (6.25%): $${showMoney(tax)}</p>
        <p>Final Total: $${showMoney(total)}</p>
    `;
    
    document.getElementById('orderSummary').innerHTML = summaryHtml;
}
