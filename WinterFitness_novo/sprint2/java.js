document.getElementById('metodo-pagamento').addEventListener('change', function() {
    var cartaoInfo = document.getElementById('cartao-info');
    var pixInfo = document.getElementById('pix-info');
    
    if (this.value === 'cartao') {
      cartaoInfo.style.display = 'block';
      pixInfo.style.display = 'none';
    } else if (this.value === 'pix') {
      cartaoInfo.style.display = 'none';
      pixInfo.style.display = 'block';
    } else {
      cartaoInfo.style.display = 'none';
      pixInfo.style.display = 'none';
    }
  });

  
  