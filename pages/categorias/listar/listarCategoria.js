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
                    listCat: '#',
                    cadCat: '../cadastrar/cadastrarCategoria.html',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentoCadastrar.html'
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
