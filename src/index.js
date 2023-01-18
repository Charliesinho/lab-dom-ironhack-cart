// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')
  let subTotal = product.querySelector('.subtotal span')
  priceValue = price.innerHTML;
  quantityValue = quantity.value;  
  totalPrice = priceValue * quantityValue;
  subTotal.innerText = totalPrice
  
 
console.log(subTotal.innerText)
  return +totalPrice;
  
  
}

function calculateAll() { 
  // ITERATION 2
  let elemArr = document.getElementsByClassName('product') 
  let total = 0;
  
  for ( let i = 0; i < elemArr.length; i++) {
    total += updateSubtotal(elemArr[i])
  }

  

  // ITERATION 3
  
  let price = document.querySelector('#total-value span');  
  price.innerText = total;  
  console.log(total)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;  
  
    console.log('The target in remove is:', target.parentNode.parentNode);

    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)

    calculateAll()
  }

// ITERATION 5

function createProduct() {
  let name = document.querySelector('.create-product input').value
  let input = document.querySelector('.create-product [type="number"]').value
  let newProd = document.createElement('tr')

  newProd.innerHTML = `
  <td class="name">
  <span>${name}</span>
  </td>
  <td class="price">$<span>${input}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  `
  newProd.classList.add('product');

  document.querySelector('tbody').appendChild(newProd);

  let rem  = document.querySelectorAll('.btn-remove')
  rem.forEach((elem) => {
  elem.addEventListener('click', removeProduct) 
 })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //let rem = document.querySelectorAll('.btn-remove')
  //rem.forEach((elem) => {
  //elem.addEventListener('click', removeProduct) 
  //})
 
 const createBut = document.querySelector('#create')
 createBut.addEventListener('click', createProduct)
 
 
});
