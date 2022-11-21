(() => {
    for (const file of [
        'common/bibliotecaG.js',
        'common/styleCommon.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `../../../${file}`);
        document.body.appendChild(script);
    }

<<<<<<< HEAD
    window.addEventListener('load', ()=> {
=======
    scriptStyle.setAttribute('src', './listarCategoriaStyle.js');
    scriptStyleCommon.setAttribute('src', '../../../common/styleCommon.js');
    scriptBiblioteca.setAttribute('src', '../../../common/bibliotecaG.js');

    document.body.appendChild(scriptStyle);
    document.body.appendChild(scriptStyleCommon);
    document.body.appendChild(scriptBiblioteca);

    window.addEventListener('load', () => {
>>>>>>> f519cc25901909595e8e73ea53a07681a1a1f21c

        const main = document.createElement('main');

        document.body.appendChild(main);

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    listCat: '../listar/listarCategoria.html',
                    cadCat: '#',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentoListar.html'
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
                                biblioteca.notification.remove();
                                // if (inputs.codigo.value == '') {
                                //     return biblioteca.notification.create({
                                //         text: 'Código inválido.',
                                //         type: 'error'
                                //     });
                                // }
                                // if (inputs.nome.value == '') {
                                //     return biblioteca.notification.create({
                                //         text: 'Nome inválido.',
                                //         type: 'error'
                                //     });
                                // }
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
                                         
                                            biblioteca.notification.create({
                                                text: JSON.stringify(data),
                                                type: 'success'
                                            });
                                            
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
                            }
                        })
                    ])
                ])
            ])
        );
    });
})();
