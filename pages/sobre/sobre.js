(() => {
    const scriptStyle = document.createElement('script');
    const scriptStyleCommon = document.createElement('script');
    const scriptBiblioteca = document.createElement('script');
    const scriptApi = document.createElement('script');

    scriptStyle.setAttribute('src', './style.js');
    scriptStyleCommon.setAttribute('src', '../../common/styleCommon.js');
    scriptBiblioteca.setAttribute('src', '../../common/bibliotecaG.js');
    scriptApi.setAttribute('src', '../../common/api.js');

    document.body.appendChild(scriptStyle);
    document.body.appendChild(scriptStyleCommon);
    document.body.appendChild(scriptBiblioteca);
    document.body.appendChild(scriptApi);


    window.addEventListener('load', () => {

        const main = document.createElement('main');
        document.body.appendChild(main);

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../index.html',
                    sobre: '#',
                    listCat: '../categorias/listar/listarCategoria.html',
                    listEst: '../estabelecimentos/listar/estabelecimentoListar.html',
                    cadCat: '../categorias/cadastrar/cadastrarCategoria.html',
                    cadEst: '../estabelecimentos/cadastrar/estabelecimentosCadastrar.html'
                })
            ])
        )

        main.appendChild(biblioteca.workResumeContainer([
            biblioteca.workResume({
                workResumeTitleContent: 'Trabalho de Front Dinâmico in Vanilla JS',
                workResumeSubTitleContent: 'Grupo: Barões da APIzinha',
                workResumeFocusTextContent: 'Integrantes: Jhuliani, Natália Fontanezi, Mateus Augusto, Thiago, Viviane',
                workResumeTextContent: 'Trabalho com o objetivo de colocar em práticas os conceitos aprendidos em JavaScript, como: Conexão com API através do front, Estrutura DOM, organização de código JavaScript, etc',
            })
        ]))

        biblioteca.footer2("../estabelecimentos/listar/estabelecimentoListar.html")

    })
})();
