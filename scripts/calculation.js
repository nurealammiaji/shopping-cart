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