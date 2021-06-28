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

  const targetRow = target.parentNode.parentNode
  const tBody = targetRow.parentNode

  tBody.removeChild(targetRow)

  calculateAll()
}

// ITERATION 5

function createProduct(event) {

  const tr = event.currentTarget.parentNode.parentNode;

  //agarrar name, price

  const name = tr.querySelector(".create-product input").value;
  const price = tr.querySelector("input[type=number]").value;

  console.log(name, price);

  const newElement = document.createElement("tr");
  newElement.className = "product";

  let newInnerHTML = `<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${Number(price).toFixed(2)}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

newElement.innerHTML = newInnerHTML;
newElement
  .getElementsByClassName("btn-remove")[0]
  .addEventListener("click", removeProduct)

const body = document.getElementsByTagName("tbody");
body[0].appendChild(newElement);

clearNewProduct();

}

function clearNewProduct() {
  
  const createProduct = document.getElementsByTagName("tfoot")[0];
  const inputs = createProduct.getElementsByTagName("input");
  
  inputs[0].value = null;
  inputs[1].value = 0;
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  const removeBtns = document.getElementsByClassName("btn btn-remove");
  for (const btn of removeBtns) {
    btn.addEventListener("click", removeProduct);
  }

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);

});
