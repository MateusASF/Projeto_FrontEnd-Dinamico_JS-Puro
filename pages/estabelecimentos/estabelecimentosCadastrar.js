        const main = document.createElement('main');

        document.body.appendChild(main);

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

        main.appendChild(

            biblioteca.createH1('Cadastre seu  estabelecimento','data-h1')
        )

       main.appendChild(

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

           ])                  
        );


        const formCadastrar = document.querySelector('form');

        formCadastrar.addEventListener('submit', (evento) => {
            evento.preventDefault()

            criarEstab2()

        })

        const uidGroup = '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2';

        function criarEstab2(){
            // evento.preventDefault()

             let categoria = document.getElementById('data-categoria').value;
             let nome = document.getElementById('data-nome').value;
             let endereco = document.getElementById('data-endereco').value;
             let cep = document.getElementById('data-cep').value;
             let telefone = document.getElementById('data-telefone').value;
             let email = document.getElementById('data-email').value;

              
             if(categoria === "" ||
             nome === ""||
             endereco === ""||
             cep === ""||
             telefone === ""||
             email === ""){
               // biblioteca.notification.create('Todos os dados são obrigatórios','text');
                 alert('Todos os dados são obrigatórios');
             }

             else{
               
 
             body = {
                 'address' : endereco,
                 'phone' : telefone,
                 'name' : nome,
                 'category': categoria,
                 'postal-code' : cep,
                 'email' : email,
                 'group': {
                     'uid': uidGroup
                 }
                }

                 return criarPost2(body)
            }
         }


        function criarPost2(estabelecimento) {

            fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(estabelecimento)
                
            }).then((response) => {
                if (response.ok) {
                    alert('conectou com a API');

                }
            })
        }

       

        //evento Editar 
        //abrir tela Editar = botao diferente de Cadastrar
        

        function editarEstab (estab){

        const rotaURL = new URL(window.location);

        const id = rotaURL.searchParams.get('id');

        let categoria = document.getElementById('data-categoria').value;
        let nome = document.getElementById('data-nome').value;
        let endereco = document.getElementById('data-endereco').value;
        let cep = document.getElementById('data-cep').value;
        let telefone = document.getElementById('data-telefone').value;
        let email = document.getElementById('data-email').value;

        //chama fetch PUT

        //metodoPUT (categoria, nome, endereco, cep, telefone, email);

        }

        function clearFields (){
    
        document.getElementById('data-categoria').value = "";
        document.getElementById('data-nome').value = "";
        document.getElementById('data-endereco').value = "";
        document.getElementById('data-cep').value  = "";
        document.getElementById('data-telefone').value = "";
        document.getElementById('data-email').value = "";

        }

        function criarEstab(){
            // evento.preventDefault()
             let url = 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment';
             let categoria = document.getElementById('data-categoria').value;
             let nome = document.getElementById('data-nome').value;
             let endereco = document.getElementById('data-endereco').value;
             let cep = document.getElementById('data-cep').value;
             let telefone = document.getElementById('data-telefone').value;
             let email = document.getElementById('data-email').value;
 
             body = {
                 'address' : endereco,
                 'phone' : telefone,
                 'name' : nome,
                 'category': categoria,
 
 
                 'postal-code' : cep,
                 'email' : email,
                 'group': {
                     'uid': uidGroup
                 }
             }
 
             if(categoria === "" ||
             nome === ""||
             endereco === ""||
             cep === ""||
             telefone === ""||
             email === ""){
                 alert('Todos os dados são obrigatórios');
             }
             else{
                 criarPost(url, body)
 
             }
 
         }
          
         
 
 
         function criarEstab(){
            // evento.preventDefault()
             let url = 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment';
             let categoria = document.getElementById('data-categoria').value;
             let nome = document.getElementById('data-nome').value;
             let endereco = document.getElementById('data-endereco').value;
             let cep = document.getElementById('data-cep').value;
             let telefone = document.getElementById('data-telefone').value;
             let email = document.getElementById('data-email').value;
 
             body = {
                 'address' : endereco,
                 'phone' : telefone,
                 'name' : nome,
                 'category': categoria,
 
 
                 'postal-code' : cep,
                 'email' : email,
                 'group': {
                     'uid': uidGroup
                 }
             }
 
             if(categoria === "" ||
             nome === ""||
             endereco === ""||
             cep === ""||
             telefone === ""||
             email === ""){
                 alert('Todos os dados são obrigatórios');
             }
             else{
                 criarPost(url, body)
 
             }
 
         }
 
         
         function criarPost(url, body){
 
             let request = new XMLHttpRequest();
             request.open("POST", url, true);
             request.sendRequestHeader('Content-type', 'application/json');
             request.send(JSON.stringify(body))
 
             ///if(url==='xxx'){
 
                 alert('Estabelecimento cadastrado com sucesso');
                 clearFields()
             //}
 
         }
 
    




    
