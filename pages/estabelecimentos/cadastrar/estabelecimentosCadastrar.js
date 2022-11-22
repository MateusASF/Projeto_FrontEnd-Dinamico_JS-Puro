        
        
        const main = document.createElement('main');

        document.body.appendChild(main);

        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '#',
                    sobre: './pages/sobre/sobre.html',
                    listCat: './pages/categorias/listarCategoria.html',
                    cadCat: './pages/categorias/cadastrarCategoria.html',
                    listEst: '#',
                    cadEst: './pages/estabelecimentos/estabelecimentosCadastrar.html'
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
    
      

        main.appendChild(formContainer)

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
            evento.preventDefault()

            cadastro.criarEstab2();

        })

        