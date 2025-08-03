(function() {
  const productsControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
  const productsControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
  const productAddBtns = Array.from(document.querySelectorAll('.product__add'));
  const cartProducts = document.querySelector('.cart__products'); 

  productsControlDec.forEach(productControlDec => {
    productControlDec.addEventListener('click', event => {
      event.preventDefault();
      const value = productControlDec.parentElement.querySelector('.product__quantity-value');
      if(value.textContent > 1) {
        value.textContent--;
      }
    })
  })

  productsControlInc.forEach(productControlInc => {
    productControlInc.addEventListener('click', event => {
      event.preventDefault();
      const value = productControlInc.parentElement.querySelector('.product__quantity-value');
      value.textContent++;
    })
  })

  const render = (productId, productImg, productValue) => {
    const cartProductList = Array.from(document.querySelectorAll('.cart__product'));
    const cartProductFound = cartProductList.find(cartProductItem => {
      return cartProductItem.dataset.id === productId;
    })
    if (cartProductFound) {
      cartProductFound.querySelector('.cart__product-count').textContent = parseInt(cartProductFound.querySelector('.cart__product-count').textContent) + parseInt(productValue);
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = productId;

      const cartProductImg = document.createElement('img');
      cartProductImg.classList.add('cart__product-image');
      cartProductImg.src = productImg;
      cartProduct.appendChild(cartProductImg);
      
      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = productValue;
      cartProduct.appendChild(cartProductCount);
      
      cartProducts.appendChild(cartProduct);
    }
  }

  productAddBtns.forEach(productAddBtn => {
    productAddBtn.addEventListener('click', event => {
      event.preventDefault();
      const productIdElem = productAddBtn.closest('.product');
      const productId = productIdElem.dataset.id;
      const productImg = productIdElem.querySelector('.product__image').src;
      const productValue = productIdElem.querySelector('.product__quantity-value').textContent;
      
      render(productId, productImg, productValue);
      
    })
  })



  
  
})()