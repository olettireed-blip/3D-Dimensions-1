fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.querySelector('.product-list');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" width="150">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading products:", err));