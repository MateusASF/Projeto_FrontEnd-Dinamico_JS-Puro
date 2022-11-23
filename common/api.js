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
    )
}

// window.updateCategoriaApi = async function (uidCategoria) {

//     const button = document.querySelector('button')
//     button.value = "Salvar"

//     const code = document.querySelectorAll('input')[0];
//     const name = document.querySelectorAll('input')[1];

//     await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category', {
//         method: 'PUT',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             uid: uidCategoria,
//             code: code.value,
//             name: name.value,
//             group: {
//                 uid: "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
//             }
//         })
//     }).catch((error) => {
//         alert('Erro geral na comunicação:')
//     }
//     )
//     alert('Editado com Sucesso')
// }

//async function editar ()








