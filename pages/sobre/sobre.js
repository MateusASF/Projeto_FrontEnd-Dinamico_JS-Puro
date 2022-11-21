(() => {
    const scriptStyle = document.createElement('script');
    const scriptStyleCommon = document.createElement('script');
    const scriptBiblioteca = document.createElement('script');

    scriptStyle.setAttribute('src', './style.js');
    scriptStyleCommon.setAttribute('src', '../../common/styleCommon.js');
    scriptBiblioteca.setAttribute('src', '../../common/bibliotecaG.js');

    document.body.appendChild(scriptStyle);
    document.body.appendChild(scriptStyleCommon);
    document.body.appendChild(scriptBiblioteca);

    window.addEventListener('load', () => {

        const main = document.createElement('main');
        document.body.appendChild(main);



        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '../../index.html',
                    listCat: '../categorias/listarCategoria.html',
                    cadCat: '../categorias/cadastrarCategoria.html',
                    listEst: '#',
                    cadEst: '../estabelecimentos/estabelecimentosCadastrar.html'
                })
            ])
        )

        main.appendChild(biblioteca.workResumeContainer([
            biblioteca.workResume({
                workResumeTitleContent: 'Trabalho de Front Dinâmico in Vanilla JS',
                workResumeSubTitleContent: 'Grupo: Barões da APIzinha',
                workResumeFocusTextContent: 'Integrantes: Jhuliani, Natália Fontanezi, Mateus Augusto, Thiago, Viviane',
                workResumeTextContent: 'Trabalho com o objetivo de colocar em práticas os conceitos aprendidos em JavaScript, como: Conexão com API através do front, Estrutura DOM, organização de código JavaScript, etc',
            })
        ]))

        fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
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
        }).then((response) => {
            if (response.ok) {
                // alert('conectou com a API')
                response.json().then((data) => {
                    //for (i in data) {
                        // const name = JSON.stringify(data[i], ['name']).replace(`{"name":"`, "").replace(`"}`, "")
                        // const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")

                        // const num =  teste((JSON.stringify(data, ['uid']).replace(`{"uid":"`, "").replace(`"}`, ""))),
                        // console.log(num),
                            main.appendChild(biblioteca.footer(
                                biblioteca.criaCard(data, 8)
                            ));
                    //}
                });
            }
        }).catch((error) => {
            alert('Erro geral na comunicação:')
        });


        async function teste(id) {
            console.log(id)
            fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "text": "",
                    "category": {
                        "uid": id
                    },
                    "group": {
                        "uid": "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
                    }
                })
            }).then((response) => {
                if (response.ok) {
                    // alert('conectou com a API')
                    const contagem = response.json().then((data) => {
                        return data.length
                    });
                    return contagem
                }

            }).catch((error) => {
                alert('Erro geral na comunicação:')
            });
        }
    })
})();





//==================================================================

// (async () => {

//     async function ChamadaEstabelecimentos() {
//         await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 "text": "",
//                 "group": {
//                     "uid": "1a7fba04-cc35-4ded-b0ab-fdfcfd649df2"
//                 }
//             })
//         }).then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//         }).catch((error) => {
//             alert('Erro geral na comunicação:')
//         });
//     }

//     async function ChamadaCategorias() {
//         const testeAwait = await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 text: '',
//                 group: {
//                     uid: '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
//                 }
//             })
//         })
//             .then(response => {
//                 if (response.ok) {
//                     // alert('conectou com a API')

//                 }
//             })
//             .catch((error) => {
//                 alert('Erro geral na comunicação:')
//             })
//         return await testeAwait.json()
//     }

//     const scriptStyle = document.createElement('script');
//     const scriptStyleCommon = document.createElement('script');
//     const scriptBiblioteca = document.createElement('script');
//     const chEstabelecimento = ChamadaEstabelecimentos()

//     const chCategorias = await ChamadaCategorias()


//     console.log("Chamada Categorias => " + JSON.stringify(chCategorias, ["name"]))

//     scriptStyle.setAttribute('src', './style.js');
//     scriptStyleCommon.setAttribute('src', '../../common/styleCommon.js');
//     scriptBiblioteca.setAttribute('src', '../../common/bibliotecaG.js');

//     document.body.appendChild(scriptStyle);
//     document.body.appendChild(scriptStyleCommon);
//     document.body.appendChild(scriptBiblioteca);

//     window.addEventListener('load', () => {

//         const main = document.createElement('main');
//         document.body.appendChild(main);

//         main.appendChild(
//             biblioteca.header([
//                 biblioteca.elementoHeader({
//                     imgheader: '/img/logo.jpeg',
//                     linkMenu: '../../index.html',
//                     listCat: '#',
//                     cadCat: '#',
//                     listEst: '#',
//                     cadEst: '../estabelecimentos/estabelecimentosCadastrar.html'
//                 })
//             ])
//         )

//         main.appendChild(biblioteca.workResumeContainer([
//             biblioteca.workResume({
//                 workResumeTitleContent: 'Trabalho de Front Dinâmico in Vanilla JS',
//                 workResumeSubTitleContent: 'Grupo: Barões da APIzinha',
//                 workResumeFocusTextContent: 'Integrantes: Jhuliani, Natália Fontanezi, Mateus Augusto, Thiago, Viviane',
//                 workResumeTextContent: 'Trabalho com o objetivo de colocar em práticas os conceitos aprendidos em JavaScript, como: Conexão com API através do front, Estrutura DOM, organização de código JavaScript, etc',
//             })
//         ]))



//         // main.appendChild(biblioteca.footer(
//         //     biblioteca.criaCard(data)
//         // ));

//         console.log("Chamada Categorias => " + chCategorias)
//         console.log("Chamada Estabelecimentos => " + chEstabelecimento)


//     })
// })();


// // for (i in data) {
// //     const name = JSON.stringify(data[i], ['name']).replace(`{"name":"`, "").replace(`"}`, "")
// //     const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")

// //     main.appendChild(biblioteca.footer([
// //         biblioteca.elementoFooter({
// //             nomeCategoria: name,
// //             //nomeCategoria: Object.values(data[i]).splice(2), //splice traz consequências graves
// //             quantidadeCategoria: 5, //isso é teoria
// //             linkA: '../index.html'
// //         })

// //     ]));
// // }