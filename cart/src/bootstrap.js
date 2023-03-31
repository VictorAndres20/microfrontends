const mainMount = (root_element_id) => {
    const root_element = document.getElementById(root_element_id);
    
    if(root_element) root_element.innerHTML = `Tienes 25 elementos en tu carrito de compras`;
}

if(process.env.NODE_ENV === 'development'){
    mainMount('cart_root');
}

export { mainMount };