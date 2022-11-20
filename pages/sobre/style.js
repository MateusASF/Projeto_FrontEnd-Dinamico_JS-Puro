//header e footer

(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        .workResumeContainer{
            display: flex;
            width: 100%;
            background: #ab956d;
            position: relative;
            top: 10rem;
            height: 400px;
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
            height: 250px;
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