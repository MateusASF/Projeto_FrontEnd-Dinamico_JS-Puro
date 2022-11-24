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
        input{
            border-radius: 15px;
            border-width: 0.1rem;
            border-color: #f1f0ec;
            height: 1.8rem;
            width: 50%;
            transition: 0.3s;
            color:rgb(10, 29, 116);
        
        }

        .field input:hover{
            border-color: #caae7a;
            border-width: 0.3rem;
        
        }
        
        .field input:focus{
            border-color: #caae7a;
            border-width: 0.3rem;
            background-color: #f5e9d2;
        
        }
        
        .field input::placeholder{
        color: rgb(207, 208, 209);
        font-size: 0.8rem;
        font-style: italic;
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