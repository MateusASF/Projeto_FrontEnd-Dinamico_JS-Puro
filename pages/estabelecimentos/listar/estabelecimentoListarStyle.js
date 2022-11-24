(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        .divGeral {
            background: #ab956d;
            top: rem;
            margin: 10px 10%;
            border-radius: 15px;
        }

        form {
            padding: 20px 0;
            text-align: center;
            top: 10rem;
        }

        .titleEstabelecimento{
            display: flex;
            color: #121842;
        }

        .containerCards {
            display: flex;
            flex-direction: column;
            align-items: left;
            background: #ab956d;
            border-radius: 15px;
        }

        .cardEstabelecimentoLista {
            display: flex;
            flex-direction: column;
            padding: 0 3rem;
            margin-bottom: 1.5rem;
        }

        .cardEstabelecimentoLista span{
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