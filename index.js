(() => {
    for (const file of [
        'bibliotecaG.js',
        'styleCommon.js',
        'api.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `./common/${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener('load', ()=> {
        const main = document.createElement('main');
        document.body.appendChild(main);
    
        main.appendChild(
            biblioteca.header([
                biblioteca.elementoHeader({
                    imgheader: '/img/logo.jpeg',
                    linkMenu: '#',
                    sobre: './pages/sobre/sobre.html',
                    listCat: './pages/categorias/listar/listarCategoria.html',
                    cadCat: './pages/categorias/cadastrar/cadastrarCategoria.html',
                    listEst: './pages/estabelecimentos/listar/estabelecimentoListar.html',
                    cadEst: './pages/estabelecimentos/cadastrar/estabelecimentosCadastrar.html'
                })
            ]) 
        )

        main.appendChild(biblioteca.createBanner())

        biblioteca.footer2() 
    });
})();





// const body = document.querySelector('body')
// body.style.backgroundColor = 'lightBlue'

// function headHome () {
//     const header = document.createElement('header')
//     const nav = document.createElement('nav')
//     const ul = document.createElement('ul')

//     nav.appendChild(ul)
//     header.appendChild(nav)
//     body.appendChild(header)

//     const menu = ['ESTABELECIMENTOS', 'CATEGORIAS']
//     const subMenu = ['Listar', 'Cadastrar']
//     for (let i = 0; i < menu.length; i++) {
//         const li = document.createElement('li')
//         li.textContent = menu[i]
//         ul.appendChild(li)


//         const ul2 = document.createElement('ul')
//         for (let j = 0; j < subMenu.length; j++) {
//             const li2 = document.createElement('li')
//             li2.textContent = subMenu[j]
//             ul2.appendChild(li2)
//             ul.appendChild(ul2)

//             //style
//             ul2.style.backgroundColor = 'lightGreen'
//             ul2.style.display = 'none'
//             ul2.style.padding = '0'


//             li.addEventListener('mouseover', () => {
//                 ul2.style.display = 'block'
//             })
//             li.addEventListener('mouseout', () => {
//                 ul2.style.display = 'none'
//             })
//         }

//         //style
//         li.style.listStyle = 'none'
//         li.style.margin = '0 15px'
//     }

//     //style
//     ul.style.backgroundColor = 'lightPink'
//     ul.style.margin = '0px'
//     ul.style.padding = '0px'
//     ul.style.display = 'flex'
//     ul.style.width = '60%'
//     ul.style.flexDirection = 'row'

//     nav.style.backgroundColor = 'red'
//     nav.style.height = '100px'
// }


// function formEstabelecimento () {
//     const form = document.createElement('form')

//     const itemsMenu = ['Categoria', 'Nome', 'Endereço', 'Cep', 'Telefone','Email' ]
//     const itemsMenuType = ['text', 'text', 'text', 'text', 'tel','email' ]
//     const itemsMenuPlaceholder = ['Categoria', 'Nome', 'Endereço', 'Cep', 'Telefone','Email' ]

//     for (let i = 0; i < itemsMenu.length; i++) {
//         const input = document.createElement('input')
//         input.name = itemsMenu[i]
//         input.type = itemsMenuType[i]
//         input.placeholder = itemsMenuPlaceholder[i]
//         form.appendChild(input)
//     }

//     body.appendChild(form)
    
//     //style
//     form.style.backgroundColor = 'lightRed'
//     form.style.display = 'flex'
//     form.style.flexDirection = 'column'
// }


// headHome() // chama o cabeçalho
// formEstabelecimento() //cria form de estabelecimentos

