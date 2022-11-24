(() => {
    for (const file of [
        'bibliotecaG.js',
        'styleCommon.js',
        'api.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `./common/${file}`);
        document.body.appendChild(script);
    }


    window.addEventListener('load', () => {
        const main = document.createElement('main');
        document.body.appendChild(main);

        biblioteca.headConfig('Home - Barões da APIzinha')

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '#',
                    sobre: './pages/sobre/sobre.html',
                    listCat: './pages/categorias/listar/listarCategoria.html',
                    cadCat: './pages/categorias/cadastrar/cadastrarCategoria.html',
                    listEst: './pages/estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: './pages/estabelecimentos/cadastrar/estabelecimentosCadastrar.html'
                })
            ])
        )

        main.appendChild(biblioteca.createBanner())

        biblioteca.footer2("./pages/estabelecimentos/listar/estabelecimentoListar.html")
    });
})();
