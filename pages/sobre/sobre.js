(()=> {
    const scriptStyle = document.createElement('script');
    const scriptStyleCommon = document.createElement('script');
    const scriptBiblioteca = document.createElement('script');

    scriptStyle.setAttribute('src', './style.js');
    scriptStyleCommon.setAttribute('src', '../../common/styleCommon.js');
    scriptBiblioteca.setAttribute('src', '../../common/bibliotecaG.js');

    document.body.appendChild(scriptStyle);
    document.body.appendChild(scriptStyleCommon);
    document.body.appendChild(scriptBiblioteca);

    window.addEventListener('load', ()=> {

        const main = document.createElement('main');
        document.body.appendChild(main);



        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                imgheader: '/img/logo.jpeg',
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

        fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: 'string',
                group: {
                    uid: '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
                }
            })
        }).then((response) => {
            if (response.ok) {
                // for (child of response) {}
                //alert('conectou com a API')
                //response.json().then(() => {});
                main.appendChild(biblioteca.footer([
                    biblioteca.elementoFooter({
                        nomeCategoria: 'teste',
                        quantidadeCategoria: 5,
                        linkA: '../index.html'
                        })
                ]));
            }
        }).catch((error) => {
            alert('Erro geral na comunicação:')
        });   


    })
})();