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


    window.addEventListener('load', ()=> {

        const main = document.createElement('main');
        document.body.appendChild(main);

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

        main.appendChild(
            biblioteca.div([
                biblioteca.form([
                    biblioteca.field({
                        label: 'Busca',
                        input: inputs.busca
                    }),
                    biblioteca.actions([
                        biblioteca.button({
                            text: 'Voltar',
                            onClick: () => {
                            }
                        }),
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
                                        })
                                        } else {
                                            response.json().then((data) => {
                                                biblioteca.notification.create({
                                                    text: JSON.stringify(data),
                                                    type: 'error'
                                                });
                                            });
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

        biblioteca.footer2();
    });
})();
