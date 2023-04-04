// Subtotal Calculation
function subTotalCalculation() {

    let iphonePrice = document.getElementById('iphone-price');
    let iphonePriceString = iphonePrice.innerText;
    let iphonePriceNumeric = parseInt(iphonePriceString);

    let iphoneCasePrice = document.getElementById('iphone-case-price');
    let iphoneCasePriceString = iphoneCasePrice.innerText;
    let iphoneCasePriceNumeric = parseInt(iphoneCasePriceString);

    let subTotalPrice = iphonePriceNumeric + iphoneCasePriceNumeric;

    let subTotal = document.getElementById('sub-total');
    subTotal.innerText = subTotalPrice;

}

// iPhone Calculation

function iPhonePlusMinus(condition) {

    let iphoneQuantity = document.getElementById('iphone-quantity');
    let iphoneQuantityValue = iphoneQuantity.value;
    let iphoneQuantityValueNumeric = parseInt(iphoneQuantityValue);

    let iphonePrice = document.getElementById('iphone-price');

    if(condition === true) {
        let iphoneQuantityPlus = iphoneQuantityValueNumeric + 1;
        iphoneQuantity.value = iphoneQuantityPlus;

        let iphonePricePlus = 1219 * iphoneQuantityPlus;
        iphonePrice.innerText = iphonePricePlus;

    }
    else {
        let iphoneQuantityMinus = iphoneQuantityValueNumeric - 1;
        iphoneQuantity.value = iphoneQuantityMinus;

        let iphonePriceMinus = 1219 * iphoneQuantityMinus;
        iphonePrice.innerText = iphonePriceMinus;
    }
}


// iPhoneCase Calculation

function iPhoneCasePlusMinus(condition) {

    let iphoneCaseQuantity = document.getElementById('iphone-case-quantity');
    let iphoneCaseQuantityValue = iphoneCaseQuantity.value;
    let iphoneCaseQuantityValueNumeric = parseInt(iphoneCaseQuantityValue);

    let iphoneCasePrice = document.getElementById('iphone-case-price');

    if(condition === true) {
        let iphoneCaseQuantityPlus = iphoneCaseQuantityValueNumeric + 1;
        iphoneCaseQuantity.value = iphoneCaseQuantityPlus;

        let iphoneCasePricePlus = 59 * iphoneCaseQuantityPlus;
        iphoneCasePrice.innerText= iphoneCasePricePlus;
    }
    else {
        let iphoneCaseQuantityMinus = iphoneCaseQuantityValueNumeric - 1;
        iphoneCaseQuantity.value = iphoneCaseQuantityMinus;

        let iphoneCasePriceMinus = 59 * iphoneCaseQuantityMinus;
        iphoneCasePrice.innerText= iphoneCasePriceMinus;
    }
}


// iPhone Quantity Plus
document.getElementById('iphone-quantity-plus').addEventListener('click', function(){
    iPhonePlusMinus(true);
    subTotalCalculation();
})

// iPhone Quantity Minus
document.getElementById('iphone-quantity-minus').addEventListener('click', function(){
    iPhonePlusMinus(false);
    subTotalCalculation();
})

// iPhoneCase Quantity Plus
document.getElementById('iphone-case-quantity-plus').addEventListener('click', function(){
    iPhoneCasePlusMinus(true);
    subTotalCalculation();
})

// iPhoneCase Quantity Minus
document.getElementById('iphone-case-quantity-minus').addEventListener('click', function(){
    iPhoneCasePlusMinus(false);
    subTotalCalculation();
})

