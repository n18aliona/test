const productsWine =
    `[
    {
        "id" : "1",
        "image" : "pinot-noir.jpg",
        "href" :  "pinot.html"
        "title" : "Pinot Noir",
        "price" : "$12,00USD"
    },
    {
        "id" : "2",
        "image" : "riesling.jpg",
        "href" :  "riesling.html"
        "title" : "Riesling",
        "price" : "$16,00USD"
    },
    {
        "id" : "3",
        "image" : "zifandel.jpg",
        "href" :  "zifandel.html"
        "title" : "Zifandel",
        "price" : "$19,00USD"
    },
    {
        "id" : "4",
        "image" : "soave.jpg",
        "href" :  "soave.html"
        "title" : "Soave",
        "price" : "$14,00USD"
    },
]
`;

function renderProducts(products) {
    const productwContainer = document.querySelector('.product-content');
    let html = '';
    for (const product of products) {
        html += `
                <section class="card-text">
                    <img src="img/${product.image}" alt="${product.title}">
                    <a href="wine/${product.href}">${product.title}"</a>
                    <p>${product.price}</p>
                    <button class="button">Shop Now</button>
                </section>
           
`
    }
    productwContainer.innerHTML = html;
}
renderProducts(JSON.parse(productsWine));