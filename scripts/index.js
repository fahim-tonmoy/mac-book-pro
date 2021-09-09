const allButtons = document.querySelectorAll("button");
const bestPrice = document.getElementById("best-price");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost = document.getElementById("delivery-charge");
const promoCode = document.getElementById("promo-code");
const totalPrices = document.getElementsByClassName("total-price");
const successMessage = document.getElementById("success-Message");
const errorMessage = document.getElementById("error-Message");

// console.log(allButtons);
// console.log(bestPrice.innerText);
// console.log(memoryCost.innerText);
// console.log(storageCost.innerText);
// console.log(deliveryCost.innerText);
// console.log(successMessage.innerText);


// Calculate Total Price
function calculateTotalPrice() {
    const totalCost = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    // console.log(deliveryCost);
    // console.log(bestPrice.innerText);
    // console.log(memoryCost.innerText);
    // console.log(storageCost.innerText);
    // console.log(deliveryCost.innerText);

    for (totalPrice of totalPrices) {
        // console.log(totalPrice);
        totalPrice.innerText = totalCost;
        // console.log(totalCost);
    };
    successMessage.innerText= '';
    errorMessage.innerText= '';
};

// Appling Promo Code
function applyPromoCode() {
    for (totalPrice of totalPrices) {
        if (totalPrice.innerText < 0) {
            totalPrice.innerText = 0;
        };

        const previousTotal = parseFloat(totalPrice.innerText);
        // console.log(previousTotal);
        const discount = (previousTotal * 20) / 100;
        // console.log(discount);
        totalPrice.innerText = previousTotal - discount;
        // console.log(totalPrice.innerText);
        promoCode.value = "";
    };
};

// Click Event handling
for (button of allButtons) {
    button.addEventListener("click", function (e) {
        const buttonClicked = e.target.innerText;
        console.log(buttonClicked);

        // Memory options - 8GB
        if (buttonClicked == "8GB unified memory") {
            memoryCost.innerText = 0;
            calculateTotalPrice();
        }
        // Memory options - 16GB
        else if (buttonClicked == "16GB unified memory") {
            memoryCost.innerText = 180;
            // console.log(memoryCost.innerText);
            calculateTotalPrice();
        }

        // Storage options
        else if (buttonClicked == "256GB SSD storage") {
            storageCost.innerText = 0;
            // console.log(storageCost.innerText);
            calculateTotalPrice();
        }

        // Storage options
        else if (buttonClicked == "512GB SSD storage") {
            storageCost.innerText = 100;
            // console.log(storageCost.innerText);
            calculateTotalPrice();
        }

        // Storage options
        else if (buttonClicked == "1TB SSD storage") {
            storageCost.innerText = 180;
            // console.log(storageCost.innerText);
            calculateTotalPrice();
        }

        // Delivery options
        else if (buttonClicked == "Friday, Aug 25 FREE Prime Delivery") {
            deliveryCost.innerText = 0;
            // console.log(deliveryCost.innerText);
            calculateTotalPrice();
        }

        // Delivery options
        else if (buttonClicked == "Friday, Aug 21 Delivery charge $20") {
            deliveryCost.innerText = 20;
            // console.log(deliveryCost.innerText);
            calculateTotalPrice();
        }

        // Promo Code
        else {
            if (promoCode.value === "stevekaku") {
                // console.log(promoCode.value);
                successMessage.innerText= `Successfully applied PromoCode "${promoCode.value}"`;
                // console.log(successMessage.innerText);
                applyPromoCode();
                errorMessage.innerText= '';
            } else if (promoCode.value === "") {
                errorMessage.innerText= `Please enter a PromoCode !!`;
                // console.log(errorMessage.innerText);
                successMessage.innerText= '';
            } else {
                errorMessage.innerText= `Invalid PromoCode "${promoCode.value}"!!`;
                console.log(errorMessage.innerText);
                successMessage.innerText= '';
            }
        };
    });
};

