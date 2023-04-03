const grid = document.querySelector('.grid');

fetch('https://demo8088700.mockable.io/d1-products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;

      const name = document.createElement('h3');
      name.classList.add('product-name');
      name.textContent = product.name;

      const price = document.createElement('p');
      price.classList.add('product-price');
      price.textContent = product.price;

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);

      grid.appendChild(card);
    });
  })
  .catch(error => console.log(error));
