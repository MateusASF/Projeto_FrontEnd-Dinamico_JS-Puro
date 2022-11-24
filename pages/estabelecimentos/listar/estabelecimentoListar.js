(() => {
    for (const file of [
        '../../../common/bibliotecaG.js',
        '../../../common/styleCommon.js',
        '../../../common/api.js',
        './estabelecimentoListarStyle.js'
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

        const loadId = biblioteca.queryString("minhaVariavel");

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    sobre: '../../sobre/sobre.html',
                    listCat: '../../categorias/listar/listarCategoria.html',
                    cadCat: '../../categorias/cadastrar/cadastrarCategoria.html',
                    cadEst: '../cadastrar/estabelecimentosCadastrar.html',
                    listEst: '#'
                })
            ])
        )


        const inputs = {
            busca: biblioteca.input({
                name: 'busca',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            }),
            categoria: biblioteca.input({
                name: 'categoria',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            })
        }

        if (loadId !== undefined) {
            fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: "",
                    category: {
                        uid: loadId
                    },
                    group: {
                        uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                    }
                }
                )
            }).then((response) => {
                if (response.ok) {
                    response.json().then((data) => {

                        main.appendChild(biblioteca.listarEstabelecimentoDiv(
                            biblioteca.criaCardEstabelecimento(data)
                        ));
                    });
                    

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

        } else {
            fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: "",
                    group: {
                        uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                    }
                }
                )
            }).then((response) => {
                if (response.ok) {
                    response.json().then((data) => {

                        main.appendChild(biblioteca.listarEstabelecimentoDiv(
                            biblioteca.criaCardEstabelecimento(data)
                        ));
                        localStorage.setItem('textEstab',JSON.stringify(data));

                    });
                } else {

                    
                    // response.json().then((data) => {
                    //     biblioteca.notification.create({
                    //         text: JSON.stringify(data),
                    //         type: 'error'
                    //     });
                    // });
                    let stringlocalStorage = localStorage.getItem('textEstab');
                    if(stringlocalStorage){
                    storage = JSON.parse(stringlocalStorage);
                    console.log(storage);  
                    main.appendChild(biblioteca.listarEstabelecimentoDiv(
                    biblioteca.criaCardEstabelecimento(storage)
                    ));           
                    }
                    
                }
            }).catch((error) => {
                console.log('Erro geral na comunicação:', error);
            });
        }
        //=========================
        main.appendChild(
            biblioteca.div([
                biblioteca.form([
                    biblioteca.field({
                        label: 'Busca',
                        input: inputs.busca
                    }),
                    biblioteca.field({
                        label: 'Categoria',
                        input: inputs.categoria
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
                                    main.removeChild(remover)
                                }
                                if (inputs.busca.value !== "") {
                                    fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
                                        method: 'POST',
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            text: inputs.busca.value,
                                            group: {
                                                uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                                            }
                                        }
                                        )
                                    }).then((response) => {
                                        if (response.ok) {
                                            response.json().then((data) => {
    
                                                main.appendChild(biblioteca.listarEstabelecimentoDiv(
                                                    biblioteca.criaCardEstabelecimento(data)
                                                ));
                                                localStorage.setItem('text',JSON.stringify(data));
    
                                            });
    
                                        } else {
                                            console.log("storage if -> "+inputs.categoria.value)
                                            // response.json().then((data) => {
                                            //     biblioteca.notification.create({
                                            //         text: JSON.stringify(data),
                                            //         type: 'error'
                                            //     });
                                            // });
                                            let stringlocalStorage = localStorage.getItem('textEstab');
                                            if(stringlocalStorage){
                                            storage = JSON.parse(stringlocalStorage);
                                            console.log(storage);  
                                            main.appendChild(biblioteca.listarEstabelecimentoDiv(
                                            biblioteca.criaCardEstabelecimento(storage)
                                            ));           
                                            }
                                    }
                                    }).catch((error) => {
                                        console.log('Erro geral na comunicação:', error);
                                    });
                                } else {
                                    fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
                                        method: 'POST',
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            text: inputs.busca.value,
                                            category: {
                                                uid: inputs.categoria.value 
                                            },
                                            group: {
                                                uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                                            }
                                        }
                                        )
                                    }).then((response) => {
                                        if (response.ok) {
                                            response.json().then((data) => {
    
                                                main.appendChild(biblioteca.listarEstabelecimentoDiv(
                                                    biblioteca.criaCardEstabelecimento(data)
                                                ));
                                                localStorage.setItem('text',JSON.stringify(data));
    
                                            });
    
                                        } else {
                                            // response.json().then((data) => {
                                            //     biblioteca.notification.create({
                                            //         text: JSON.stringify(data),
                                            //         type: 'error'
                                            //     });
                                            // });
                                            let stringlocalStorage = localStorage.getItem('textEstab');
                                            if(stringlocalStorage){
                                            storage = JSON.parse(stringlocalStorage);
                                            console.log(storage);  
                                            main.appendChild(biblioteca.listarEstabelecimentoDiv(
                                            biblioteca.criaCardEstabelecimento(storage)
                                            ));           
                                            }
                                    }
                                    }).catch((error) => {
                                        console.log('Erro geral na comunicação:', error);
                                    });
                                }
                            }
                        })
                    ])
                ])
            ])
        );

        biblioteca.footer2("./estabelecimentoListar.html");
    });
})();
