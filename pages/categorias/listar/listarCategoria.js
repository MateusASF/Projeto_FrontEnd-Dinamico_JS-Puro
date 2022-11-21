(() => {
    const scriptStyle = document.createElement('script');
    const scriptStyleCommon = document.createElement('script');
    const scriptBiblioteca = document.createElement('script');

    scriptStyle.setAttribute('src', './listarCategoriaStyle.js');
    scriptStyleCommon.setAttribute('src', '../../common/styleCommon.js');
    scriptBiblioteca.setAttribute('src', '../../common/bibliotecaG.js');

    document.body.appendChild(scriptStyle);
    document.body.appendChild(scriptStyleCommon);
    document.body.appendChild(scriptBiblioteca);

    window.addEventListener('load', () => {

        const main = document.createElement('main');
        document.body.appendChild(main);

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    listCat: '#',
                    cadCat: '../cadastrar/cadastrarCategoria.html',
                    listEst: '#',
                    cadEst: '../../estabelecimentos/estabelecimentosCadastrar.html'
                })
            ])
        )




    })
})();