// iPhone Calculation
function iPhonePlusMinus(condition) {
    let iphoneQuantity = document.getElementById('iphone-quantity');
    let iphoneQuantityValue = iphoneQuantity.value;
    let iphoneQuantityValueNumeric = parseInt(iphoneQuantityValue);
    if(condition === true) {
        let iphoneQuantityPlus = iphoneQuantityValueNumeric + 1;
        iphoneQuantity.value = iphoneQuantityPlus;
    }
    else {
        let iphoneQuantityMinus = iphoneQuantityValueNumeric - 1;
        iphoneQuantity.value = iphoneQuantityMinus;
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