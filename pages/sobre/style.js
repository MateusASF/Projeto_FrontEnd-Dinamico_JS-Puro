//header e footer

(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        .workResumeContainer{
            display: flex;
            width: cover;
            background: #ab956d;
            position: relative;
            top: 10rem;
            height: 80vh;
        }

        .cardResumeContainer {
            background: #f6f2f2;
            padding: 1vw;
            margin: 3vw 10vw;
            display: flex;
            flex-direction: column;
            alignItems: center;
            justifyContent: center;
            border-radius: 3vw;
            height: 40vh;
        }
        
        .cardResumeContainer h1, h2, span, p {
            text-align: center;
            color: #121842;
        }

        .cardResumeContainer h2 {
            margin-top: 0;
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