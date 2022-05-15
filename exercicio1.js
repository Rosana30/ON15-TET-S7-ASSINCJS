function buscarPreco(produto) {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if (produto === "hormonios") {
          return resolve({
            nome: "Hormônios",
            preco: 99.00
          });
        } else if (produto === "unhas gel") {
          return resolve ({
            nome: "Unhas em Gel",
            preco: 190.00
          });
        } else if (produto === "lace"){
          return resolve ({
            nome: "Lace",
            preco: 3900.00
          });
        } else {
          return reject("Produto não encontrado");
        }
    }, 2000)
  })
  }
    
  // função que simula busca num banco que retorna o valor das parcelas:
    
  function calcularParcela(preco) {
    return new Promise((resolve, reject) =>{
    let parcelasDesejadas = 10
    setTimeout(() => {
      return resolve (preco / parcelasDesejadas);
    }, 2000)
  })
  }
  


async function comprasfeitas(produto) {
    try {
        const mercadoria = await buscarPreco(produto);
        const valorParcela = await calcularParcela(mercadoria.preco);
        const quantidadeparcelas = mercadoria.preco / valorParcela;
        return console.log(`Sua ${mercadoria.nome} custa R$${mercadoria.preco.toFixed(2).replace("." ,",")} e você pagará em ${quantidadeparcelas}x de R$${valorParcela.toFixed(2).replace("." ,",")}`)

    }
    catch (error) {
        console.error(error);
    }

}

comprasfeitas("lace");