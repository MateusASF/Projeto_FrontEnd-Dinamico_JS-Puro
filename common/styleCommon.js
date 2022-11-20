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
            background: #f6f2f2;
        }
        footer {
            height: 5rem;
            background: #121842;
            position: absolute;
            bottom: 0;
            width: 100vw;
        }

        .cardMenu{
            display: flex;
            flex-direction: row;
            padding: 1rem 0 1rem 2rem;
            alignItems: center;
            justifyContent: center;
            height: auto;
            margin: .5rem;
            width: auto;
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
            font-size: 13px;
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

        }

        header div {
            display: flex;
            flex-direction: row;
            justify-content: 'space-between',
            margin: 0;
            width: 100vw;
        }

        header img {
            min-height: 100px;
            max-height: 8rem; 
            min-width: 300px;
            Max-width: 400px;
            position: absolute;
            top: 0;
            left: 0;
        }

        header a {
            font-size: 24px;
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
        `;
    document.body.appendChild(style);
})();    