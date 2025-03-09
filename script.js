// Eenvoudige zoekfunctie voor producten (kan worden uitgebreid)
function searchProducts() {
    let input = document.getElementById('search').value.toLowerCase();
    let cards = document.getElementsByClassName('product-card');
    
    for (let i = 0; i < cards.length; i++) {
        let productName = cards[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
        if (productName.includes(input)) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}