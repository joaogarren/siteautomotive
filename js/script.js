// Função para a rolagem suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Exemplo de um array para armazenar os produtos no "carrinho de compras"
  let cart = [];
  
  // Função para adicionar produtos ao carrinho
  function addToCart(productName, productPrice) {
    const product = {
      name: productName,
      price: productPrice
    };
  
    // Adiciona o produto ao array do carrinho
    cart.push(product);
  
    // Atualiza a visualização do carrinho (exemplo simples)
    alert(`${productName} foi adicionado ao carrinho! Total de itens: ${cart.length}`);
    console.log(cart);
  }
  
  // Função para calcular o total do carrinho (pode ser usada no futuro)
  function calculateTotal() {
    return cart.reduce((total, product) => total + product.price, 0);
  }
  
  // Exemplo de uso em produtos (função chamada no clique de um botão)
  document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentElement.querySelector('h2').innerText;
      const productPrice = parseFloat(button.parentElement.querySelector('.price').innerText.replace('R$', '').replace(',', '.'));
  
      addToCart(productName, productPrice);
    });
  });