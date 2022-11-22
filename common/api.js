    window.listEstablishment = async function () {
        const x = await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "text": "",
                "group": {
                    "uid": "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                }
            })
        }).catch((error) => {
            alert('Erro geral na comunicação:')
        });

        if(!x){
            return []
        }

        return x.json()
    }


    window.listCategory = async function () {
        const y = await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: '',
                group: {
                    uid: '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
                }
            })
        }).catch((error) => {
            alert('Erro geral na comunicação:')
        })

        if(!y){
            return []
        }

        return y.json()
    }


    window.deleteCategoriaApi = async function (uidCategoria) {
    await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category', {
    method: 'DELETE',
    headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                uid: uidCategoria,
                group: {
                    uid: '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
                }
            })
        }).catch((error) => {
                        alert('Erro geral na comunicação:')
                    }  
        )
    }

    window.postEstab = async function (endereco, telefone, nome, categoria, cep, email) {
        const y = await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address : endereco,
                    phone : telefone,
                    name : nome,
                    category: {
                        uid: categoria
                      },
                    postal_code : cep,
                    email : email,
                    group: {
                        uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                    }
            })
        }).catch((error) => {
            alert('Erro geral na comunicação:')
        })

    }

