// iPhone Calculation

function iPhonePlusMinus(condition) {

    let iphoneQuantity = document.getElementById('iphone-quantity');
    let iphoneQuantityValue = iphoneQuantity.value;
    let iphoneQuantityValueNumeric = parseInt(iphoneQuantityValue);

    let iphonePrice = document.getElementById('iphone-price');
    let iphonePriceString = iphonePrice.innerText;
    let iphonePriceNumeric = parseInt(iphonePriceString);

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

    if(condition === true) {
        let iphoneCaseQuantityPlus = iphoneCaseQuantityValueNumeric + 1;
        iphoneCaseQuantity.value = iphoneCaseQuantityPlus;
    }
    else {
        let iphoneCaseQuantityMinus = iphoneCaseQuantityValueNumeric - 1;
        iphoneCaseQuantity.value = iphoneCaseQuantityMinus;
    }
}

// iPhone Quantity Plus
document.getElementById('iphone-quantity-plus').addEventListener('click', function(){
    iPhonePlusMinus(true);
})

// iPhone Quantity Minus
document.getElementById('iphone-quantity-minus').addEventListener('click', function(){
    iPhonePlusMinus(false);
})

// iPhoneCase Quantity Plus
document.getElementById('iphone-case-quantity-plus').addEventListener('click', function(){
    iPhoneCasePlusMinus(true);
})

// iPhoneCase Quantity Minus
document.getElementById('iphone-case-quantity-minus').addEventListener('click', function(){
    iPhoneCasePlusMinus(false);
})

