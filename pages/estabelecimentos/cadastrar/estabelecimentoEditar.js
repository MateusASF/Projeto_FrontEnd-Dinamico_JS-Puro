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