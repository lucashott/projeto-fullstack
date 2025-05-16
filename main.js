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

  carrinho.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} (x${item.quantidade}) - ${formatarPreco(item.preco * item.quantidade)}`;
    itensCarrinho.appendChild(li);
    totalPreco += item.preco * item.quantidade;
  });

  totalCarrinho.textContent = `Total: ${formatarPreco(totalPreco)}`;
};

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const nome = botao.getAttribute('data-nome');
    const preco = parseFloat(botao.getAttribute('data-preco'));

    // Verifica se item já existe no carrinho
    const itemExistente = carrinho.find((item) => item.nome === nome);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();

    // Alerta leve visual (opcional)
    alert(`${nome} adicionado ao carrinho.`);
  });
});
