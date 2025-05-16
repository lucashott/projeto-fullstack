
const botoes = document.querySelectorAll('.add-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById("total");

let totalPreco = 0;

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const nome = botao.getAttribute('data-nome');
        const preco = parseFloat(botao.getAttribute('data-preco'));

        // Cria item da lista
        const li = document.createElement('li');
        li.textContent = `${nome} - R$ ${preco.toFixed(2).replace('.', ',')}`;
        itensCarrinho.appendChild(li);

        // Atualiza o total
        totalPreco += preco;
        totalCarrinho.textContent = `Total: R$ ${totalPreco.toFixed(2).replace('.', ',')}`;
    });
});
