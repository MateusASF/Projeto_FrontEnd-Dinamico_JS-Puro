
(() => {
    for (const file of [
        'biblioteca.js',
        'styles.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `./${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener('load', ()=> {

        const main = document.createElement('main');

        document.body.appendChild(main);

        main.appendChild(
            biblioteca.footer([
                biblioteca.elementoFooter({
                    nomeCategoria: 'teste',
                    quantidadeCategoria: 5,
                    linkA: '../index.html'
                }),
                biblioteca.elementoFooter({
                    nomeCategoria: 'teste',
                    quantidadeCategoria: 5,
                    linkA: '../index.html'
                })
            ]))
    });
})();

// 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/_openapi'