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

    if (!x) {
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

    if (!y) {
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
    ),
    alert('Cadastro excluído com sucesso');
}


window.deleteEstabelecimentoApi = async function (uidEstabelecimento) {
    await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            uid: uidEstabelecimento,
            group: {
                uid: '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
            }
            
        }) 
        
    }).catch((error) => {
        alert('Erro geral na comunicação:')
    }

    ),
    alert('Cadastro excluído com sucesso');
}


window.filterFooter = async function (uidCategoria) {
    await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: "",
            category: {
                uid: uidCategoria
            },
            group: {
                uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
            }
        }
        )
    }).then((response) => {
        if (response.ok) {
            response.json().then((data) => {

                main.appendChild(biblioteca.listarEstabelecimentoDiv(
                    biblioteca.criaCardEstabelecimento(data)
                ));

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




