const botoes = document.querySelectorAll('.add-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total');

let carrinho = [];
let totalPreco = 0;

const formatarPreco = (valor) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};

const atualizarCarrinho = () => {
  itensCarrinho.innerHTML = '';
  totalPreco = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      ${item.nome} (x${item.quantidade}) - ${formatarPreco(item.preco * item.quantidade)}
      <button class="remover-item" data-index="${index}">Remover</button>
    `;

    itensCarrinho.appendChild(li);
    totalPreco += item.preco * item.quantidade;
  });

  totalCarrinho.textContent = `Total: ${formatarPreco(totalPreco)}`;

  // Ativar os botões de remover
  const botoesRemover = document.querySelectorAll('.remover-item');
  botoesRemover.forEach((botao) => {
    botao.addEventListener('click', () => {
      const index = parseInt(botao.getAttribute('data-index'));

      // Reduz quantidade ou remove completamente
      if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1;
      } else {
        carrinho.splice(index, 1);
      }

      atualizarCarrinho();
    });
  });
};

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const nome = botao.getAttribute('data-nome');
    const preco = parseFloat(botao.getAttribute('data-preco'));

    const itemExistente = carrinho.find((item) => item.nome === nome);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();
  });
});
