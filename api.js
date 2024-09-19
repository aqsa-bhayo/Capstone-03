document.getElementById('loadProducts').addEventListener('click', function () {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(products => {
        const productList = document.getElementById('productList');
        productList.innerHTML = ''; // Clear the list
        products.forEach(product => {
          const li = document.createElement('li');
          li.classList.add('list-group-item');
          li.textContent = product.title;
          productList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error:', error);
        // Display error message to the user
        const productList = document.getElementById('productList');
        productList.innerHTML = '<li class="list-group-item text-danger">Failed to load products</li>';
      });
});
