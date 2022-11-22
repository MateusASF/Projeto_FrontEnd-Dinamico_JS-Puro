window.cadastro = {

    uidGroup : '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2',

    criarEstab2: () => {
    // evento.preventDefault()
            let dados = {
                categoria: document.getElementById('data-categoria').value,
                nome : document.getElementById('data-nome').value,
                endereco : document.getElementById('data-endereco').value,
                cep : document.getElementById('data-cep').value,
                telefone : document.getElementById('data-telefone').value,
                email : document.getElementById('data-email').value

            }


           // if(!cadastro.checarDados2(dados)) {
            if(!cadastro.checarDados(
                dados.categoria,
                dados.nome,
                dados.endereco,
                dados.cep,
                dados.email,
                dados.email)) {
                // biblioteca.notification.create('Todos os dados são obrigatórios','text');
                alert('Todos os dados são obrigatórios');

            } else {

                body = {
                    'address' : dados.endereco.value,
                    'phone' : dados.telefone.value,
                    'name' : dados.nome.value,
                    'category': dados.categoria.value,
                    'postal-code' : dados.cep.value,
                    'email' : dados.email.value,
                    'group': {
                        'uid': uidGroup
                    }
                   }
   
                    return cadastro.criarPost2(body)
               }

            
        },

    checarDados: (d1, d2, d3, d4, d5, d6) => {

        if(
        d1 === ""||
        d2 === ""||
        d3 === ""||
        d4 === ""||
        d5 === ""||
        d6 === "") {
            return false;

        }
        else { 
            return true;
            
        }
    }, 

    checarDados2: (dados) => {

        dados.forEach(item => {
            if (item === ""){
                 return false;
                
            }
            else return true;
            
        });
           

        }
    },

    //criarPost2: 

    //     dados.forEach(item => {
    //         if (item.value === ""){
    //              return false;
                
    //         }
    //         else return true;
            
    //     });

    // }

//}


function checarDados2(dados){


    dados.forEach(item => {
        if (item === ""){
             return false;
            
        }
        else return true;
        
    });
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



            //  let categoria = document.getElementById('data-categoria').value;
            //  let nome = document.getElementById('data-nome').value;
            //  let endereco = document.getElementById('data-endereco').value;
            //  let cep = document.getElementById('data-cep').value;
            //  let telefone = document.getElementById('data-telefone').value;
            //  let email = document.getElementById('data-email').value;