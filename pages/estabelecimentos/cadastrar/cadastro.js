
   const uidGroup = '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2';
        
   function checarDados (d1, d2, d3, d4, d5, d6) {

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
    } 

    function checarDados2 (dados) {
        dados.forEach(item => {
            if (item === ""){
                 return false;
             
            }
            else return true;           
        });
    }

    function clearFields () {

    document.getElementById('data-categoria').value = "";
    document.getElementById('data-nome').value = "";
    document.getElementById('data-endereco').value = "";
    document.getElementById('data-cep').value  = "";
    document.getElementById('data-telefone').value = "";
    document.getElementById('data-email').value = "";

    }

   function checkCategoria (categoria) {
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

        const array = [];
        //for (i in data) {
            // const name = JSON.stringify(data[i], ['name']).replace(`{"name":"`, "").replace(`"}`, "")
            // const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")

    
      
           // array.push(element)
        }

        //return array




//evento Editar 
//abrir tela Editar = botao diferente de Cadastrar


