
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
                //         // for (child of response) {
                //         // }
                //         alert('sou lindo')

                //         response.json().then(() => {

                //         })


                //     } else {
                //         alert('caiu aqui no else')
                //     }
                // }).catch((error) => {
                //     alert('Erro geral na comunicação:')
                // })
                biblioteca.elementoFooter({
                    nomeCategoria: 'teste',
                    quantidadeCategoria: 5,
                    linkA: '../index.html'
                })
            ]))
    });
})();

// 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/_openapi'