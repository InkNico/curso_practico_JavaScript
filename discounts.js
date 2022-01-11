/* const precioOriginal = 120;
const descuento = 18; */


function EstimateDiscountPrice(price, discount) {
    const percentagePriceWithDiscount = 100 - discount;
    const discountPrice = (price * percentagePriceWithDiscount) / 100;

    return discountPrice;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const discountPrice = EstimateDiscountPrice(priceValue, discountValue);

    const resultPrice = document.getElementById("Result-price");
    resultPrice.innerText = "The final price after the discount is applied is: $" + discountPrice;
}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */