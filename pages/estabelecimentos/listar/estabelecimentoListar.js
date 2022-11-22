(() => {
    for (const file of [
        'common/bibliotecaG.js',
        'common/styleCommon.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `../../../${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener('load', ()=> {

        const main = document.createElement('main');

        document.body.appendChild(main);

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    sobre: '../../sobre/sobre.html',
                    listCat: '../../categorias/listar/listarCategoria.html',
                    cadCat: '../../categorias/cadastrar/cadastrarCategoria.html',
                    listEst: '#',
                    cadEst: '../listar/estabelecimentoListar.html'
                })
            ])
        )
    })
})();