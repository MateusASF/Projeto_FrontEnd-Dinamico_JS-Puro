(() => {
    for (const file of [
        'common/bibliotecaG.js',
        'common/styleCommon.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `/${file}`);
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
                    listCat: '../listar/listarCategoria.html',
                    cadCat: '#',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentoListar.html'
                })
            ])
        )
        

        const inputs = {
            codigo: biblioteca.input({
                name: 'Código',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            }),
            nome: biblioteca.input({
                name: 'Nome',
                onKeyPress: () => {
                    biblioteca.notification.remove();
                }
            })
        }
        main.appendChild(
            biblioteca.form([
                biblioteca.field({
                    label: 'Código',
                    input: inputs.codigo
                }),
                biblioteca.field({
                    label: 'Nome',
                    input: inputs.nome
                }),
                biblioteca.actions([
                    biblioteca.button({
                        text: 'Voltar',
                        onClick: () => {


                        }
                    }),
                    biblioteca.button({
                        text: 'Cadastrar',
                        type: 'primary',
                        onClick: () => {
                            biblioteca.notification.remove();
                            if (inputs.codigo.value == '') {
                                return biblioteca.notification.create({
                                    text: 'Código inválido.',
                                    type: 'error'
                                });
                            }
                            if (inputs.nome.value == '') {
                                return biblioteca.notification.create({
                                    text: 'Nome inválido.',
                                    type: 'error'
                                });
                            }
                            fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    code: inputs.codigo.value,
                                    name: inputs.nome.value,
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
        );

    });
})();
