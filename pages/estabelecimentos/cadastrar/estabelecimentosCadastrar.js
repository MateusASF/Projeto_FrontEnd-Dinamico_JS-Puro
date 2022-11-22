
(() => {
    for (const file of [
        'common/bibliotecaG.js',
        'common/styleCommon.js',
        'common/api.js'
        
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

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../../index.html',
                    sobre: '../../sobre/sobre.html',
                    listCat: '../listar/listarCategoria.html',
                    cadCat: '#',
                    listEst: '../../estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: '../../estabelecimentos/cadastrar/estabelecimentoCadastrar.html'
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

        const h1 = biblioteca.createH1('Cadastre seu  estabelecimento','data-h1', formContainer);


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

                biblioteca.createButton2 ({
                    text: 'Cadastrar',
                    type: 'submit',
                    id: "data-btn-enviar",
                    onclick: onclick

                }),
           ]),

        );



        const formCadastrar = document.querySelector('form');

        formCadastrar.addEventListener('submit', (evento) => {
            evento.preventDefault();


                categoria = document.getElementById('data-categoria').value,
                nome = document.getElementById('data-nome').value,
                endereco = document.getElementById('data-endereco').value,
                cep = document.getElementById('data-cep').value,
                telefone = document.getElementById('data-telefone').value,
                email = document.getElementById('data-email').value

               // api.postEstab(endereco, telefone, nome, categoria, cep, email)


        //         fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment', {
        //         method: 'POST',
        //         mode: 'no-cors',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             address : endereco,
        //             phone : telefone,
        //             name : nome,
        //             category: {
        //                 uid: categoria
        //               },
        //             postal_code : cep,
        //             email : email,
        //             group: {
        //                 uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
        //             }
        //         })
        //     }).then((response) => {
        //         if (response.ok) {
        //             response.json().then((data) => {
        //                 biblioteca.notification.create({
        //                     text: JSON.stringify(data),
        //                     type: 'success'
        //                 });
        //             });
        //         } else {
        //             response.json().then((data) => {
        //                 biblioteca.notification.create({
        //                     text: JSON.stringify(data),
        //                     type: 'error'
        //                 });
        //             });
        //         }
        //     }).catch((error) => {
        //         console.log('Erro geral na comunicação:', error);
        //     });
         })

       biblioteca.footer2();
    });
})();

            //0e85479d-3d8f-483f-990c-cf24332d54f8

        



