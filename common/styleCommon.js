//header e footer

(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        html, body {
            font-family: Arial;
            font-size: 1.4vw;
            margin: 0;
            padding: 0;
            color: #000;
            background: #f6f2f2;
        }
        footer {
            height: 30vh;
            background: #121842;
            width: cover;
            position: relative;
        }

        .cardMenu{
            display: flex;
            flex-direction: row;
            padding: 1rem 0 1rem 2rem;
            alignItems: center;
            justifyContent: center;
            height: auto;
            margin: .5rem;
            // width: auto;
            width: 50vw;
            font-weight: bold;
            color: #121842 ;
            font-family: 'Times New Roman';
        }

        .cardCategoria{
            display: flex;
            padding: 0.3rem;
            margin: .8rem;
            font-weight: bold;
            font-family: 'Times New Roman';
            background: #191970;
            float: left;
            border-radius: 15px;
        }

        .cardCategoria p, span, a {
            margin: 0px 4px 0 2px ;
            // font-size: 13px;
            font-size: 1vw;
            color: #f6f2f2;
        }

        .cardMenu a {
            color: #121842 ;
        }

        .cardCategoria a {
            text-decoration: none;
            color: #f6f2f2;
        }

        header {
            height: 8rem; 
            background: #f6f2f2;
            position: fixed;
            z-index: 10;
        }

        header div {
            display: flex;
            flex-direction: row;
            justify-content: 'space-between',
            margin: 0;
            width: 100vw;
            // position: fixed;
        }

        header img {
            width: 28vw;
            position: fixed;
            top: 0;
            left: 0;
        }

        header a {
            font-size: 2vw;
            text-decoration: none;
            margin-right: 2rem;
        }

        .cardcategoria a div{
            width:auto;
        }

        .submenu {
            width: auto;
            font-weight: 100;
        }

        .topMenu {
            margin-right: 2rem;
        }


        @media(max-width: 1024px) and (min-width: 769px){
            header img {
                width: 28vw;
            }
            header a {
                font-size: 1.5vw;
            }
            .cardCategoria p, span, a {
                font-size: 1.1vw;
            }
        }

        @media(max-width: 768px) and (min-width: 481px){
            header img {
                width: 35vw;
            }
            header a {
                font-size: 2.5vw;
            }
            .cardCategoria p, span, a {
                font-size: 1.8vw;
            }
        }

        @media(max-width: 480px) and (min-width: 320px){
            header img {
                width: 45vw;
            }
            header a {
                font-size: 3.5vw;
            }
            .cardCategoria p, span, a {
                font-size: 3vw;
            }
            .topMenu {
                margin-right: 1rem;
            }
        }

        form {
            width: 600px;
            margin: 20px auto;
            padding: 20px;
            background: #ab956d;
            border-radius: 20px;
            text-align: center;
            position: relative;
            top: 10rem;
        }
        div.field {
            margin-bottom: 10px;
            font-weight: bold;
        }
        div.actions {
            margin-top: 20px;
        }
        div.actions button {
            font-size: 16px;
            padding: 5px 10px;
            border: solid 2px #777;
            background: #f6f2f2;
            border-radius: 10px;
            margin-right: 10px;
        }
        div.actions button.primary {
            border: solid 2px #777;
            background: #f6f2f2;
        }
        div.notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            padding: 20px;
            text-align: center;
            background: #e8e8e8;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        div.notification-error {
            color: #a14343;
        }
        div.notification-success {
            color: #43a143;
        }
        div.notification-info {
            color: #43a143;
        }
        div.notification-warn {
            color: #a1a143;
        }
        `;
    document.body.appendChild(style);
})();    