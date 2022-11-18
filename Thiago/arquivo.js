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
                    imgheader: 'https://emojipedia-us.s3.amazonaws.com/social/emoji/thumbs-up.png',
                    })
            ]))
    });
})

();

