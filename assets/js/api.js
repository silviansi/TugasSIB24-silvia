fetch('https://crudcrud.com/api/2e8b1b58e955445b96015177f09b0074/product')
    .then(response => response.json())
    .then(data => {
        // Show data
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
            <h3>Nama: ${product.Nama}</h3>
            <p>Stok: ${product.Stok}</p>
            <p>Harga: ${product.Harga}</p>
            `;
            productList.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching users:', error));