window.biblioteca = {
    footer: (children) => {
        const footer = document.createElement('footer');
        for (const child of children) {
            footer.appendChild(child);
        }
        return footer;
    },
    elementoFooter: ({nomeCategoria, quantidadeCategoria, linkA}) => {
        const divFooter = document.createElement('div');
        divFooter.classList.add('cardCategoria')

        const spanCategoria = document.createElement('span');
        const link = document.createElement('a');
        link.setAttribute('href', linkA);
        spanCategoria.appendChild(link);

        const pCount = document.createElement('p');
        link.textContent = nomeCategoria;
        pCount.textContent = quantidadeCategoria;
        divFooter.appendChild(spanCategoria);
        divFooter.appendChild(pCount);
        return divFooter;
    }
}