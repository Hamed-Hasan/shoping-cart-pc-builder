clickId('eightGB', 'best-price', 200)
clickId('sixteenGB', 'memory-cost', 200)
clickId('ssd1', 'storage-cost', 200)
clickId('free-delivery', 'delivery-cost', 0)
clickId('paid-delivery', 'delivery-cost', 500)

function clickId(itemId, productId, price) {
    document.getElementById(itemId).addEventListener('click', function () {
        updatePrice(productId, price)
    })
}

function updatePrice(itemId, price) {
    const productInput = document.getElementById(itemId)
    productInput.innerText = price
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice)
    const total = document.getElementById('total-price')
    total.innerText = totalPrice

}
const fakeCode = "pHero";
document.getElementById("apply-btn").addEventListener("click", function(){
    const code = document.getElementById("promo-input").value;
    const apply = document.getElementById('applied-text');
    const another = document.getElementById('another');
    apply.classList.add('d-none');
    another.classList.add('d-none')
    if(code === fakeCode){
        const total = document.getElementById('total-price');
        let totalPrice = parseInt(total.innerText);
        const discount = (totalPrice * 50) / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice
        apply.classList.remove('d-none')
    } else{
        another.classList.remove('d-none');
        // apply.classList.remove('d-none')
    }

})
const myTimeout = setTimeout(setTimeOut, 1000);
function setTimeOut(){
        another.classList.add('d-none')
        apply.classList.add('d-none')
}


// clickId('eightGB','best-price',100);
// clickId('sixteenGB','memory-cost',200)

// function clickId(productId,updateId,price){
//     document.getElementById(productId).addEventListener('click',function(){
//         updatePrice(updateId,price);
//     })
// }
// function updatePrice(itemId,price){
//     const memoryCost = document.getElementById(itemId);
//     memoryCost.innerText = price;
//     const bestPrice = document.getElementById('best-price').innerText;
//     const memoryPrice = document.getElementById('memory-cost').innerText;
//     const storagePrice = document.getElementById('storage-cost').innerText;
//     const deliveryPrice = document.getElementById('delivery-cost').innerText;

//     const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
//     const total = document.getElementById('total-price');
//     total.innerText = totalPrice
// }
// const fakeCode = "pHero";
// document.getElementById("apply-btn").addEventListener("click", function(){
//     const code = document.getElementById("promo-input").value;
//     const apply = document.getElementById('applied-text');
//     const another = document.getElementById('another');
//     apply.classList.add('d-none');
//     another.classList.add('d-none')
//     if(code === fakeCode){
//         const total = document.getElementById('total-price');
//         let totalPrice = parseInt(total.innerText);
//         const discount = (totalPrice * 50) / 100;
//         totalPrice = totalPrice - discount;
//         total.innerText = totalPrice
//         apply.classList.remove('d-none')
//     } else{
//         another.classList.remove('d-none');
//         // apply.classList.remove('d-none')
//     }

// })
// const myTimeout = setTimeout(setTimeOut, 1000);
// function setTimeOut(){
//         another.classList.add('d-none')
//         apply.classList.add('d-none')
// }


// document.getElementById("sixteenGB").addEventListener("click", function () {
//     const memoryCost = document.getElementById("memory-cost");
//     memoryCost.innerText = 200;

//     const bestPrice = document.getElementById("best-price").innerText;
//     const memoryPrice = document.getElementById("memory-cost").innerText;
//     const storagePrice = document.getElementById("storage-cost").innerText;
//     const deliveryPrice = document.getElementById("delivery-cost").innerText;

//     const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

//     const total = document.getElementById("total-price");
//     total.innerText = totalPrice;
//     updatePrice("memory-cost", 300);
// });

// document.getElementById("eightGB").addEventListener("click", function () {
//     updatePrice("memory-cost", 0);
// });

// document.getElementById("ssd3").addEventListener("click", function () {
//     updatePrice("storage-cost", 500);
// });

// document.getElementById("paid-delivery").addEventListener("click", function () {
//     updatePrice("delivery-cost", 20);
// });

// function onClick(clickId, updateId, price) {
//     document.getElementById(clickId).addEventListener("click", function () {
//         updatePrice(updateId, price);
//         document.getElementById(clickId).style.backgroundColor = "cornflowerblue"
//     });
// }