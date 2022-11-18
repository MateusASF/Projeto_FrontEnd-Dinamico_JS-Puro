
(() => {
    for (const file of [
        'biblioteca.js',
        'styles.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `./${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener('load', ()=> {

        const main = document.createElement('main');

        document.body.appendChild(main);

        main.appendChild(
            biblioteca.footer([
                // fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
                //     method: 'POST',
                //     headers: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify({
                //         text: 'string',
                //         group: {
                //             uid: '1a7fba04-cc35-4ded-b0ab-fdfcfd649df2'
                //         }
                //     })
                // }).then((response) => {
                //     if (response.ok) {
                //         // for (child of response) {}
                //         alert('conectou com a API')
                //         response.json().then(() => {})


                    biblioteca.elementoFooter({
                    nomeCategoria: 'teste',
                    quantidadeCategoria: 5,
                    linkA: '../index.html'
                    })

                //     }
                // }).catch((error) => {
                //     alert('Erro geral na comunicação:')
                // })

            ]))
    });
})();

// 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/_openapi'