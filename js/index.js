// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const  subtotal = product.querySelector(".subtotal span")
  
  const resultSubtotal =  price.innerHTML * quantity.value

  return subtotal.innerHTML = resultSubtotal

}

function calculateAll() {

  // ITERATION 2
  
  const products = document.getElementsByClassName("product")

  let total = 0

  for (const product of products) {
    const updateTotal = updateSubtotal(product)
    
    total += updateTotal
  }

  // ITERATION 3
  
  const totalProducts = document.querySelector("#total-value span")

  return totalProducts.innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
