
function updatePrice (costId, extraCost) {
    const extraCostText = document.getElementById(costId).innerText = extraCost
    const newPriceText = document.getElementById('total-price')
    const newPrice = parseInt (newPriceText.innerText) + extraCost
    newPriceText.innerText = newPrice
    document.getElementById('bottom-total').innerText = newPrice
}


document.getElementById('memory-price-1').addEventListener ('click', function () {
    const extraCost = 0
    const newPrice = updatePrice ('memory-cost', extraCost)
    
})

document.getElementById('memory-price-2').addEventListener ('click', function (e) {
     const extraCost = 180;
     const newPrice = updatePrice ('memory-cost', extraCost)
})
document.getElementById('storage-price-1').addEventListener ('click', function () {
  const extraCost = 0;
  const newPrice = updatePrice("storage-cost", extraCost);
})
document.getElementById('storage-price-2').addEventListener ('click', function () {
  const extraCost = 100;
  const newPrice = updatePrice("storage-cost", extraCost);
})
document.getElementById('storage-price-3').addEventListener ('click', function () {
  const extraCost = 180;
  const newPrice = updatePrice("storage-cost", extraCost);
})
document.getElementById('delivery-cost-1').addEventListener ('click', function () {
  const extraCost = 0;
  const newPrice = updatePrice("delivery-cost", extraCost);
})
document.getElementById('delivery-cost-2').addEventListener ('click', function () {
  const extraCost = 20;
  const newPrice = updatePrice("delivery-cost", extraCost);
})

document.getElementById('promo-code').addEventListener ('click', function() {
    const promoCode = document.getElementById('promo-type').value
    const fixedCode = 'stevekaku'
    if (promoCode == fixedCode) {
       const totalPriceText = document.getElementById('total-price')
       const totalPrice = parseInt (totalPriceText.innerText)
       const discount = totalPrice*.2
      const total = totalPriceText.innerText = totalPrice - discount
      document.getElementById('bottom-total').innerText = total
    }
})