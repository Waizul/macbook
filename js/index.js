function updateExtra(costId, cost) {
  document.getElementById(costId).innerText = cost;
}

function updatePrice(costId) {
  const memoryCostText = document.getElementById('memory-cost').innerText
  const memoryCost = parseInt(memoryCostText)

  let price1 = memoryCost
  console.log(price1)
  const storageCostText = document.getElementById("storage-cost").innerText;
  const storageCost = parseInt(storageCostText);
  let price2 = storageCost
  console.log(price2);
  const deliverCostText = document.getElementById('delivery-cost').innerText 
  const deliveryCost = parseInt(deliverCostText)
  let price3 = deliveryCost
  console.log(price3);
  let totalCost = 1299 + price1 + price2 + price3
  console.log(totalCost);
  document.getElementById('total-price').innerText = totalCost
  document.getElementById('bottom-total').innerText = totalCost
}

document.getElementById("memory-price-1").addEventListener("click", function () {
    updateExtra("memory-cost", 0);
    updatePrice('memory-cost');
  });
document.getElementById("memory-price-2").addEventListener("click", function () {
    updateExtra("memory-cost", 180);
    updatePrice('memory-cost');
  })
document.getElementById("storage-price-1").addEventListener("click", function () {
    updateExtra("storage-cost", 0);
    updatePrice('storage-cost');
  });
document.getElementById("storage-price-2").addEventListener("click", function () {
    updateExtra("storage-cost", 100);
    updatePrice('storage-cost');
  });
document.getElementById("storage-price-3").addEventListener("click", function () {
    updateExtra("storage-cost", 180);
    updatePrice("storage-cost");
  });
document.getElementById("delivery-cost-1").addEventListener("click", function () {
    updateExtra("delivery-cost", 0);
    updatePrice("delivery-cost");
  });
document.getElementById("delivery-cost-2").addEventListener("click", function () {
    updateExtra("delivery-cost", 20);
    updatePrice("delivery-cost");
  });

document.getElementById("promo-code").addEventListener("click", function () {
  const promoCode = document.getElementById("promo-type").value.toLowerCase();
  const fixedCode = "stevekaku";
  if (promoCode == fixedCode) {
    const totalPriceText = document.getElementById("total-price");
    const totalPrice = parseInt(totalPriceText.innerText);
    const discount = totalPrice * 0.2;
    const discountedPrice = totalPrice- discount
    document.getElementById("bottom-total").innerText = discountedPrice;
    document.getElementById("promo-type").value = "";
  }
  if (promoCode != fixedCode) {
    document.getElementById("promo-type").value = "Invalid Promo code !"
  }
})
