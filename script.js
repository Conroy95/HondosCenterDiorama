let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product + " toegevoegd aan winkelwagen!");
}

function loadCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    let total = 0;

    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.product} - €${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = `Totaal: €${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

document.addEventListener('DOMContentLoaded', loadCart);