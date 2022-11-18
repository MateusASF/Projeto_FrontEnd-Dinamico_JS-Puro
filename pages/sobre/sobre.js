(()=> {
    const scriptStyle = document.createElement('script');
    const scriptBiblioteca = document.createElement('script');

    scriptStyle.setAttribute('src', '../../common/bibliotecaG.js');
    scriptBiblioteca.setAttribute('src', './style.js');

    document.body.appendChild(scriptStyle);
    document.body.appendChild(scriptBiblioteca);

    window.addEventListener('load', ()=> {

        const main = document.createElement('main');
        document.body.appendChild(main);

        main.appendChild(biblioteca.workResumeContainer([
            biblioteca.workResume({
                workResumeTitleContent: 'Trabalho de Front Dinâmico in Vanilla JS',
                workResumeSubTitleContent: 'Grupo: Barões da APIzinha',
                workResumeFocusTextContent: 'Integrantes: Jhuliani, Natália Fontanezi, Mateus Augusto, Thiago, Viviane',
                workResumeTextContent: 'Trabalho com o objetivo de colocar em práticas os conceitos aprendidos em JavaScript, como: Conexão com API através do front, Estrutura DOM, organização de código JavaScript, etc',
            })
        ]))
    })
})();