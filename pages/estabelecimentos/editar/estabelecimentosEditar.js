
(() => {
    for (const file of [
        'common/bibliotecaG.js',
        'common/styleCommon.js',
        
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `../../../${file}`);
        document.body.appendChild(script);
        
    }

    const script2 = document.createElement('script');
        script2.setAttribute('src', './style.js');
        document.body.appendChild(script2);

    window.addEventListener('load', ()=> {

        const main = document.createElement('main');

        document.body.appendChild(main);

        const loadId = biblioteca.queryString("minhaVariavel");
        console.log(loadId);

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    sobre: '../../sobre/sobre.html',
                    listCat: '../../categorias/listar/listarCategoria.html',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadCat: '../../categorias/cadastrar/cadastrarCategoria.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentosCadastrar.html',
                })
            ])
        )


        const input = {

            categoria: biblioteca.createInput2({
                type: 'text',
                placeholder: "",
                name: "categoria",
                id: "data-categoria"


            }),
            nome: biblioteca.createInput2({
                type: 'text',
                name: 'nome',
                placeholder: "",
                id: "data-nome"
            }),
            endereco: biblioteca.createInput2({
                type: 'text',
                name: 'endereco',
                placeholder: "",
                id: "data-endereco"
            }),
            cep: biblioteca.createInput2({
                type: 'text',
                name: 'cep',
                placeholder: "",
                id: "data-cep"

            }),
            telefone: biblioteca.createInput2({
                type: 'text',
                name: 'telefone',
                placeholder: "(xx) xxxxx-xxxx",
                id: "data-telefone"
            }),
            email: biblioteca.createInput2({
                type: 'email',
                name: 'email',
                placeholder: "xxx@xxxx.com",
                id: "data-email"
            })
        }

        const formContainer = biblioteca.createDiv('form-container');

        const h1 = biblioteca.createH1('Atualização Cadastral','data-h1', formContainer);


        main.appendChild(formContainer);

        formContainer.appendChild(

           biblioteca.createForm2([


                biblioteca.createField2({
                    label: "Categoria",
                    input: input.categoria,
                }),
                biblioteca.createField2({
                    label: "Nome",
                    input: input.nome,
                }),
                biblioteca.createField2({
                    label: "Endereço",
                    input: input.endereco,
                }),
                biblioteca.createField2({
                    label: "CEP",
                    input: input.cep,
                }),
                biblioteca.createField2({
                    label: "Telefone",
                    input: input.telefone,
                }),
                biblioteca.createField2({
                    label: "Email",
                    input: input.email,
                }),

                biblioteca.button({
                    text: 'Salvar',
                    type: 'primary',
                    onClick: () => {
                        biblioteca.notification.remove();

                        if (input.categoria.value == '' ||
                        input.nome.value==''||
                        input.endereco.value==''||
                        input.cep.value==''||
                        input.telefone.value==''||
                        input.email.value=='') {
                            return biblioteca.notification.create({
                                text: 'Todos os campos são obrigatórios',
                                type: 'error'
                            });
                        }

                       
                        fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment', {
                            method: 'PUT',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({

                                            uid: loadId,
                                            address : input.endereco.value,
                                            phone : input.telefone.value,
                                            name : input.nome.value,
                                            category: {
                                                uid: '0e85479d-3d8f-483f-990c-cf24332d54f8'
                                              },
                                            
                                            postal_code : input.cep.value,
                                            email : input.email.value,
                                            group: {
                                                uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                                            },

                                          
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
        )
    
});
})();


