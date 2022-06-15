                  // phone click handl

function updateProductNumber(product,price,isIncreasing) {
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
   if (isIncreasing == true) {

    productNumber =  parseInt(productNumber) + 1;
   }
   else if(productNumber > 0){

    productNumber= parseInt(productNumber) - 1;
   }
   productInput.value = productNumber;
// update phone 
const phoneTotal = document.getElementById(product+'-total');
phoneTotal.innerText = productNumber *price;

// totall FileSystemHandle
calculateTotal();
}

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
})

  

  document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
  })
  document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
  })
function getInputValue(product) {
  const productInput = document.getElementById(product + '-number');
  const productNumber =parseInt( productInput.value);
  return productNumber
}
  function calculateTotal(){
const phoneTotall = getInputValue('phone')*1219;
const caseTotall = getInputValue('case')*59;

const subTotall = phoneTotall+caseTotall;
const taxAmount = subTotall / 10 ;
const grandTotal = subTotall + taxAmount;

document.getElementById('sub-total').innerText = subTotall;

document.getElementById('tax-amount').innerText = taxAmount;
document.getElementById('grand-total').innerText =grandTotal;


  }