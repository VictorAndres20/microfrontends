import faker from 'faker';

let products = '';

for (let index = 0; index < 3; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

document.getElementById('products_root').innerHTML = products;