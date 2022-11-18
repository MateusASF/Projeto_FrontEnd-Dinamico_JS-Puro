//header e footer

(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        html, body {
            font-family: Arial;
            font-size: 16px;
            margin: 0;
            padding: 0;
            color: #000;
        }


        .workResumeContainer{
            display: flex;
            alignContent: right;
            width: 100%;
            background: #ab956d;
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
        }
        
        .cardResumeContainer h1, h2, span, p {
            text-align: center;
            color: #121842;
        }

        .cardResumeContainer h2 {
            margin-top: 0;
        }


        `;
    document.body.appendChild(style);
})();    