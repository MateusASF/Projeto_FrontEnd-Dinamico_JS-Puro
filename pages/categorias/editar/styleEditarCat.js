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

        main {
            min-height: 80vh;
        }

        footer {
            height: 20vh;
            background: #121842;
            width: 100%;
            position: relative;
            bottom: 0;
        }

        .cardMenu{
            display: flex;
            flex-direction: row;
            padding: 1rem 0 1rem 2rem;
            alignItems: center;
            justifyContent: center;
            height: auto;
            margin: .5rem;
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
            position: relative;
            top: 0
            z-index: 10;
        }

        header div {
            display: flex;
            flex-direction: row;
            justify-content: 'space-between',
            margin: 0;
            width: 100vw;
        }

        header img {
            width: 28vw;
            position: relative;
            top: 0;
            left: 0;
        }

        .img-banner {
            width: 100%;
            margin: 0;
            background: red;
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
            padding: 20px 0 ;
            background: #ab956d;
            border-radius: 20px;
            text-align: center;
            top: 10rem;
        }

        .form-container{
            display: flex;
            flex-direction: column;
        }

        h1{
            position: relative;
            text-align: center;
            color: rgb(10, 29, 116);
            font-size: 1.6rem;        
        }

        div.field {
            margin-bottom: 10px;
            font-weight: bold;
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

        
        .field input::placeholder{
        color: rgb(207, 208, 209);
        font-size: 0.8rem;
        font-style: italic;
        }

        button{
            margin-left: 6px;
            padding: 5px;
            background-color:  rgb(10, 29, 116);
            color:rgb(207, 208, 209);
            width: 10rem;
            height: auto;
            font-size: 1.2rem;
            font-weight:600;
            border-radius: 10px;
            border-width: 0.1rem;
        }
                      
        label {
            color: rgb(207, 208, 209);
            text-align: left;
            font-size: 1.2rem;
            width: 100%;
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

        .img-container{
            position: relative;
            width: cover;
        }
        `;
    document.body.appendChild(style);
})(); 