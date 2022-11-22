window.cadastro = {

    uidGroup : '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2',

    criarEstab2: () => {
    // evento.preventDefault()
            let dados = {
                address : document.getElementById('data-endereco').value,
                phone : document.getElementById('data-telefone').value,
                name : document.getElementById('data-nome').value,
                category: document.getElementById('data-categoria').value,
                postal : document.getElementById('data-cep').value,
                email : document.getElementById('data-email').value,
               
                
                
                
                

            }

            request({
                service: 'establishment',
                method: 'post',
                data: {
                                'address' : dados.endereco.value,
                                'phone' : dados.telefone.value,
                                'name' : dados.nome.value,
                                'category': dados.categoria.value,
                                'postal-code' : dados.cep.value,
                                'email' : dados.email.value,
                                'group': {
                                    'uid': '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
                                }
                               
                },
                onSuccess: (data, response) => {
                    debugger;
                    ABC.notification.create({
                        text: 'Conta cadastrada com sucesso.',
                        type: 'success'
                    });
                },
                onError: (data, response) => {
                    debugger;
                    ABC.notification.create({
                        text: "Não foi possível criar a conta, tente mais tarde.",
                        type: 'error'
                    });
                }
            });

            endpoint: 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment';

           function request ({service, method = 'POST', data, onSuccess, onError}) {
                fetch(API.endpoint + service, {
                    method: method.toUpperCase(),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then((response) => {
                    response.json().then((data) => {
                        if (response.ok) {
                            if (onSuccess) {
                                onSuccess(data, response);
                                console.log (data)
                                console.log (response)
                            }
                        } else {
                            if (onError) {
                                onError(data, response);
                                console.log (response)
                            }
                        }
                    });
                }).catch((error) => {
                    console.log('Erro geral na comunicação:', error);
                    if (onError) {
                        onError(error);
                    }
                });
            }


           // if(!cadastro.checarDados2(dados)) {
            // if(!cadastro.checarDados(
            //     dados.categoria,
            //     dados.nome,
            //     dados.endereco,
            //     dados.cep,
            //     dados.email,
            //     dados.email)) {
            //     // biblioteca.notification.create('Todos os dados são obrigatórios','text');
            //     alert('Todos os dados são obrigatórios');

            // } else {

            //     body = {
            //         'address' : dados.endereco.value,
            //         'phone' : dados.telefone.value,
            //         'name' : dados.nome.value,
            //         'category': dados.categoria.value,
            //         'postal-code' : dados.cep.value,
            //         'email' : dados.email.value,
            //         'group': {
            //             'uid': '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
            //         }
            //        }


                

            //        if(!cadastro.checkCategoria2(dados.categoria)) {
            //         alert('Categoria não cadastrada, por favor efetue o cadastro');
            //        }
            //        else {
            //         alert('Categoria ok');
            //         
            //    }
            //}

            
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
           

    },

    clearFields: () => {

        document.getElementById('data-categoria').value = "";
    document.getElementById('data-nome').value = "";
    document.getElementById('data-endereco').value = "";
    document.getElementById('data-cep').value  = "";
    document.getElementById('data-telefone').value = "";
    document.getElementById('data-email').value = "";

    },

    checkCategoria2: (categoria) => {
        let array = getLista ()
    for (item in array) {
       if ( categoria === item.name)
       {
           alert('categoria ja cadastrada')
       }

       else
       {
           alert('por favor cadastrar categoria')
    }
   }
}
}


function Cadastrar() {
    
        endpoint: 'http://plataforma.letscode.dev.netuno.org:25390/services/';
        request: ({service, method = 'GET', data, onSuccess, onError})=> {
            fetch(API.endpoint + service, {
                method: method.toUpperCase(),
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((response) => {
                response.json().then((data) => {
                    if (response.ok) {
                        if (onSuccess) {
                            onSuccess(data, response);
                            console.log(data)
                            console.log(response)
                        }
                    } else {
                        if (onError) {
                            onError(data, response);
                            console.log(data)
                            console.log(response)
                        }
                    }
                });
            }).catch((error) => {
                console.log('Erro geral na comunicação:', error);
                if (onError) {
                    onError(error);
                }
            });
        }
    }


    
function getLista () {
    fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
                                        method: 'POST',
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            text: 'string',
                                            group: {
                                                uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                                            }
                                        })
                                    }).then((response) => {
                                        if (response.ok) {
                                            response.json().then((data) => {
                                            
                                                    getArray(data)
                                        })
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

function getArray (data) {

    console.log (data)
        const array = [];
        //for (i in data) {
            // const name = JSON.stringify(data[i], ['name']).replace(`{"name":"`, "").replace(`"}`, "")
            // const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")

            // const element = biblioteca.listarCategoriaElemento({
            //     nomeCategoria: name,
            //     uidCategoria: uid,
            //     //nomeCategoria: Object.values(data[i]).splice(2), //splice traz consequências graves
           // })

           // array.push(element)
        }

        //return array


function checkCategoria (categoria) {
    let array = biblioteca.criaCardCategoria (data)
    for (item in array) {
       if ( categoria === item.name)
       {
           alert('categoria ja cadastrada')
       }

       else
       {
           alert('por favor cadastrar categoria')
    }
   }
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

    // (url==='xxx'){

         alert('Estabelecimento cadastrado com sucesso');
         clearFields()
     }

 



            //  let categoria = document.getElementById('data-categoria').value;
            //  let nome = document.getElementById('data-nome').value;
            //  let endereco = document.getElementById('data-endereco').value;
            //  let cep = document.getElementById('data-cep').value;
            //  let telefone = document.getElementById('data-telefone').value;
            //  let email = document.getElementById('data-email').value;