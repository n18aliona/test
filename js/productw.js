const productsJson =
    `[
    {
        "id": "1",
        "title": "Pinot Noir",
        "image": "img/pinot-noir.jpg",
        "description": "Pinot Noir",
        "price": 12.00
    },
    {
        "id": "2",
        "title": "Pinot Noir",
        "image": "img/pinot-noir.jpg",
        "description": "Pinot Noir",
        "price": 49.99
    },
    {
        "id": "3",
        "title": "Pinot Noir",
        "image": "img/pinot-noir.jpg",
        "description": "Pinot Noir",
        "price": 49.99
    },
    {
        "id": "4",
        "title": "Pinot Noir",
        "image": "img/pinot-noir.jpg",
        "description": "Pinot Noir",
        "price": 49.99
    }
    
]`;

function renderProducts(products, sortOrder) {
    const sortedProducts = [...products]
        .sort((a, b) => sortOrder === 'ascending'
            ? a.price - b.price
            : b.price - a.price);
    const productsContainer = document.querySelector('.product-content');
    let html = '';
    for (const product of sortedProducts) {
        html += `<article class="product">
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                      <p>${product.price}</p>
                      <button class="button">Shop Now</button>
                                    </article>`;
    }
    productsContainer.innerHTML = html;
}

renderProducts(JSON.parse(productsJson), 'ascending');

const buttonSortAscending = document.querySelector('.sort-ascending');
const buttonSortDescending = document.querySelector('.sort-descending');

buttonSortAscending.addEventListener('click', sortAscending);
buttonSortDescending.addEventListener('click', sortDescending);

function sortAscending() {
    renderProducts(JSON.parse(productsJson), 'ascending');
}

function sortDescending() {
    renderProducts(JSON.parse(productsJson), 'descending');
}