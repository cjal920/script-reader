let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'High Level Notes',
        tag: 'high-level-notes',
        price: 15,
        inCart: 0
    },
    {
        name: 'Line By Line Notes',
        tag: 'line-by-line-notes',
        price: 30,
        inCart: 0
    },
    {
        name: 'Proofread',
        tag: 'proofread',
        price: 45,
        inCart: 0
    },
    {
        name: 'Synopsis',
        tag: 'synopsis',
        price: 60,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++)    {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product)  {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers)  {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else  {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product)  {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else  {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product 
        }
    }
  
    localStorage.setItem('productsInCart', JSON.stringify
    (cartItems));
}

function totalCost(product) {
    // console.log("the total cost is" , "$" + product.price);
let cartCost = localStorage.getItem('totalCost');
// console.log('My cartCost is', cartCost);
// console.log(typeof cartCost);
// console.log(typeof product.price);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

onLoadCartNumbers();



