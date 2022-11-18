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
            biblioteca.header([
                    biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    })
            ]))
    });
})

();

