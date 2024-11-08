const selectProducto = document.getElementById('product-select');
const inputCantidad = document.getElementById('cantidad');
const listaProductos = document.querySelector('.product-list');
const totalElement = document.getElementById('total-amount');

function obtenerPrecio(opcionSeleccionada) {
    return opcionSeleccionada.value;
}

function agregarProducto() {
    const productoSeleccionado = selectProducto.value;
    const cantidad = parseInt(inputCantidad.value);
    const precio = obtenerPrecio(selectProducto.options[selectProducto.selectedIndex]);

    if (productoSeleccionado !== 'producto1' && !isNaN(cantidad) && cantidad > 0) {
        const nuevoItemLista = document.createElement('li');
        nuevoItemLista.textContent = `${productoSeleccionado} x ${cantidad} = $${formatearPrecio(precio * cantidad)}`;
        listaProductos.appendChild(nuevoItemLista);

        const nuevoItemFactura = document.createElement('li');
        nuevoItemFactura.classList.add('factura-item');
        nuevoItemFactura.textContent = `${productoSeleccionado} - ${cantidad} unidades - $${formatearPrecio(precio * cantidad)}`;
        document.querySelector('.factura-list').appendChild(nuevoItemFactura);

        calcularTotal();
    } else {
        alert('Por favor, selecciona un producto y ingresa una cantidad válida.');
    }

    const nuevoItem = {
        producto: productoSeleccionado,
        cantidad: cantidad,
        precio: precio
    };

    productos.push(nuevoItem); 

    const nuevoItemLista = document.createElement('li');
    nuevoItemLista.dataset.productoId = productos.length - 1; 
    nuevoItemLista.textContent = `${productoSeleccionado} x ${cantidad} = $${formatearPrecio(precio * cantidad)}`;
    l
}

function formatearPrecio(precio) {
    return precio.toLocaleString('es-ES', { style: 'currency', currency: 'COP' });
}


function calcularTotal() {
    const itemsFactura = document.querySelectorAll('.factura-item');
    let totalCompra = 0;

    itemsFactura.forEach(item => {
    const precio = parseFloat(item.textContent.match(/\$\d+\.\d+/)[0].slice(1));
    totalCompra += precio;
    });

    document.getElementById('total').textContent = formatearPrecio(totalCompra);
    const currentTotal = parseFloat(totalToPay.textContent.replace(/[^0-9]/g, '')) || 0;
    const newTotal = currentTotal + total;
    totalToPay.textContent = '0';
}

selectProducto.addEventListener('change', () => {
    const productoSeleccionado = selectProducto.options[selectProducto.selectedIndex].text;
    document.getElementById('producto').value = productoSeleccionado;
});

const formulario = document.querySelector('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    agregarProducto();
});
