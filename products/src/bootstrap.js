import faker from 'faker';

const mainMount = (root_element_id) => {
    let products = '';

    for (let index = 0; index < 3; index++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    const root_element = document.getElementById(root_element_id);
    if(root_element) root_element.innerHTML = products;
}

/** For isolation microfrontend */
if(process.env.NODE_ENV === 'development'){
    mainMount('products_root');
}

/** Export function for render microfrontend in container whenever you want*/
export { mainMount }