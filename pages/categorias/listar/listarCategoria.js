(() => {
    for (const file of [
        '../../../common/bibliotecaG.js',
        '../../../common/styleCommon.js',
        './listarCategoriaStyle.js',
        '../../../common/api.js' //! -> NÃO ESQUECER DISSO
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `${file}`);
        document.body.appendChild(script);
    }

    const link = document.createElement('link')
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.body.appendChild(link);


    window.addEventListener('load', () => {

        const main = document.createElement('main');
        document.body.appendChild(main);

        biblioteca.headConfig('Listagem de Categorias')

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    sobre: '../../sobre/sobre.html',
                    listCat: '#',
                    cadCat: '../cadastrar/cadastrarCategoria.html',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentosCadastrar.html'
                })
            ])
        )


        const inputs = {
            busca: biblioteca.input({
                name: 'busca',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            })
        }

        fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: inputs.busca.value,
                group: {
                    uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                }
            })
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    main.appendChild(biblioteca.listarCategoriaDiv(
                        biblioteca.criaCardCategoria(data)))

                    localStorage.setItem('text', JSON.stringify(data));
                })


            } else {
                let stringlocalStorage = localStorage.getItem('text');
                if (stringlocalStorage) {
                    storage = JSON.parse(stringlocalStorage);
                    console.log(storage);
                    main.appendChild(biblioteca.listarCategoriaDiv(
                        biblioteca.criaCardCategoria(storage)))
                        ;
                }

            }
        }).catch((error) => {
            console.log('Erro geral na comunicação:', error);
        });

        const formContainer = biblioteca.createDiv('form-container');
        const h1 = biblioteca.createH1('Lista de Categorias', 'data-h1', formContainer);
        main.appendChild(formContainer);

        formContainer.appendChild(
            biblioteca.div([
                biblioteca.form([
                    biblioteca.field({
                        label: 'Buscar categoria por nome',
                        input: inputs.busca
                    }),
                    biblioteca.actions([
                        biblioteca.button({
                            text: 'Buscar',
                            type: 'primary',
                            onClick: () => {
                                const remover = document.getElementsByClassName('containerCards')[0]
                                if (remover !== undefined) {
                                    remover.remove()
                                }
                                fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
                                    method: 'POST',
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        text: inputs.busca.value,
                                        group: {
                                            uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                                        }
                                    })
                                }).then((response) => {
                                    if (response.ok) {
                                        response.json().then((data) => {
                                            main.appendChild(biblioteca.listarCategoriaDiv(
                                                biblioteca.criaCardCategoria(data)))
                                            localStorage.setItem('text', JSON.stringify(data));
                                        })
                                    } else {
                                        let stringlocalStorage = localStorage.getItem('text');
                                        if (stringlocalStorage) {
                                            storage = JSON.parse(stringlocalStorage);
                                            console.log(storage);
                                            main.appendChild(biblioteca.listarCategoriaDiv(
                                                biblioteca.criaCardCategoria(storage)))
                                        }
                                    }
                                }).catch((error) => {
                                    console.log('Erro geral na comunicação:', error);
                                });
                            }
                        })
                    ])
                ])
            ])
        );

        biblioteca.footer2("../../estabelecimentos/listar/estabelecimentoListar.html");
    });
})();
