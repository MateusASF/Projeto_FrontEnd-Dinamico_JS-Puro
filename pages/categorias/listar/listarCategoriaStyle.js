(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        .divGeral {
            background: #ab956d;
            top: rem;
            margin: 0 10%;
            border-radius: 15px;
        }

        .containerCards {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #ab956d;
            border-radius: 15px;
            padding: 0 0 2rem 0;
            width: auto;
            margin: 0 10%;
        }

        .cardCategoriaLista span{
            color: #121842;
            font-size: 1.1rem;
            text-transform: uppercase;
        }

        .material-icons {
            font-size: 1.1rem;
            margin: 0 7px;
            color: #121842;
        }

        @media(max-width: 1024px) and (min-width: 769px){

        }

        @media(max-width: 768px) and (min-width: 481px){

        }

        @media(max-width: 480px) and (min-width: 320px){

        }
        `;
    document.body.appendChild(style);
})();    