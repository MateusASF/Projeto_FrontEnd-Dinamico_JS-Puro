(() => {
    for (const file of [
        'common/bibliotecaG.js',
        'common/styleCommom.js',
        'pages/categorias/editar/styleEditarCat.js',
        'common/api.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `../../../${file}`);
        document.body.appendChild(script);
    }


    window.addEventListener('load', () => {

        const main = document.createElement('main');
        document.body.appendChild(main);

        biblioteca.headConfig('Editando Categoria')

        const loadId = biblioteca.queryString("minhaVariavel");
        console.log(loadId);

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    sobre: '../../sobre/sobre.html',
                    listCat: '../../categorias/listar/listarCategoria.html',
                    cadCat: '../../categorias/cadastrar/cadastrarCategoria.html',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentosCadastrar.html'
                })
            ])
        )

        const formContainer = biblioteca.createDiv('form-container');
        const h1 = biblioteca.createH1('Atualizar Cadastro de Categoria', 'data-h1', formContainer);
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
                        text: 'Salvar',
                        type: 'primary',
                        onClick: () => {
                            biblioteca.notification.remove();

                            if (inputs.codigo.value == '') {
                                return biblioteca.notification.create({
                                    text: 'Código não pode ser nulo.',
                                    type: 'error'
                                });
                            }
                            if (inputs.nome.value == '') {
                                return biblioteca.notification.create({
                                    text: 'Nome não pode ser nulo.',
                                    type: 'error'
                                });
                            }

                            fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category', {
                                method: 'PUT',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    uid: loadId,
                                    code: inputs.codigo.value,
                                    name: inputs.nome.value,
                                    group: {
                                        uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                                    }
                                })
                            }).catch((error) => {
                                alert('Erro geral na comunicação:')
                            }
                            )
                            alert('Item editado com sucesso')
                        }
                    })
                ])
            ])
        );

        biblioteca.footer2("../../estabelecimentos/listar/estabelecimentoListar.html");
    });
})();

