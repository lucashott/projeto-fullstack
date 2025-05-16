
const botoes = document.querySelectorAll('.Add-carrinho');
const itensCarrinho = document.getElementById('.itens-carrinho');
const totalCarrinho = document.getElementById("total");

let totalPreço = 0;

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const produto = botao.parentElement;
        const nomeProduto = produto.querySelector('.nome-produto').textContent;
        const precoProduto = parseFloat(produto.querySelector('.preco-produto').textContent.replace('R$', '').replace(',', '.'));

        // Adiciona o item ao carrinho
        const itemCarrinho = document.createElement('div');
        itemCarrinho.classList.add('item-carrinho');
        itemCarrinho.innerHTML = `
            <span>${nomeProduto}</span>
            <span>R$ ${precoProduto.toFixed(2).replace('.', ',')}</span>
        `;
        itensCarrinho.appendChild(itemCarrinho);

        // Atualiza o total do carrinho
        totalPreço += precoProduto;
        totalCarrinho.textContent = `Total: R$ ${totalPreço.toFixed(2).replace('.', ',')}`;
    });
}