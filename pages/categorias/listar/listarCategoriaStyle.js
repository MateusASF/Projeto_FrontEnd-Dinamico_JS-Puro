(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        .containerCards {
            background: red;
        }

        .cardCategoriaLista span a {
            color: black;
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