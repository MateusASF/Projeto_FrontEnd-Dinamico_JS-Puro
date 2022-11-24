(() => {
    for (const file of [
        'common/bibliotecaG.js',
        'common/styleCommom.js',
        'pages/categorias/cadastrar/styleCadastrarCat.js',
        'common/api.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `../../../${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener('load', () => {

        const main = document.createElement('main');
        document.body.appendChild(main);

        biblioteca.headConfig('Cadastrar Categoria')

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    sobre: '../../sobre/sobre.html',
                    listCat: '../listar/listarCategoria.html',
                    cadCat: '#',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentosCadastrar.html'
                })
            ])
        )
        const formContainer = biblioteca.createDiv('form-container');
        const h1 = biblioteca.createH1('Cadastre sua Categoria', 'data-h1', formContainer);
        main.appendChild(formContainer);

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
        formContainer.appendChild(
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
                                            text: "Cadastro realido com sucesso!",
                                            type: 'success'
                                        });
                                    });
                                } else {
                                    response.json().then((data) => {
                                        biblioteca.notification.create({
                                            text: "Desculpa, erro encontrado",
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

        biblioteca.footer2("../../estabelecimentos/listar/estabelecimentoListar.html");
    });
})();
