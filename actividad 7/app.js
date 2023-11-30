class Producto{
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.price = year;
    }
}

class UI {
    addProducto(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div>
                <div>
                    <strong>Product Name</div>:
                </div>
            </div>
        `
    }

    deleteProducto() {

    }

    showMessage() {

    }
}

// Drom Events
document.getElementById('product-form')
    .addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year);

        e.preventDefault();
    });