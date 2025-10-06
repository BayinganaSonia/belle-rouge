document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    buttons.forEach(function(button) {
        button.addEventListener('click', function(){
            const productName = button.parentElement.querySelector('h3').textContent;
            count++;
            cartCount.textContent = 'Cart: ' + count;
            alert(productName + ' Added to cart!');
        });
    });
});