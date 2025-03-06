let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}

function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    
    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
        cartContainer.appendChild(itemElement);
        total += item.price;
    });

    totalAmount.textContent = total;
}

function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    displayCartItems();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        displayCartItems();
    }
});
