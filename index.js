const body = document.querySelector('body')

function headHome () {
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    nav.appendChild(ul)
    header.appendChild(nav)
    body.appendChild(header)

    const menu = ['ESTABELECIMENTOS', 'CATEGORIAS']
    const subMenu = ['Listar', 'Cadastrar']
    for (let i = 0; i < menu.length; i++) {
        const li = document.createElement('li')
        li.textContent = menu[i]
        ul.appendChild(li)

        const ul2 = document.createElement('ul')
        for (let j = 0; j < subMenu.length; j++) {
            const li2 = document.createElement('li')
            li2.textContent = subMenu[j]
            ul2.appendChild(li2)
            ul.appendChild(ul2)
        }
    }

    //style
    body.style.backgroundColor = 'lightBlue'
    header.style.backgroundColor = 'lightGreen'
}



function formEstabelecimento () {
    const form = document.createElement('form')

    const itemsMenu = ['Categoria', 'Nome', 'Endereço', 'Cep', 'Telefone','Email' ]
    const itemsMenuType = ['text', 'text', 'text', 'text', 'tel','email' ]
    const itemsMenuPlaceholder = ['Categoria', 'Nome', 'Endereço', 'Cep', 'Telefone','Email' ]

    for (let i = 0; i < itemsMenu.length; i++) {
        const input = document.createElement('input')
        input.name = itemsMenu[i]
        input.type = itemsMenuType[i]
        input.placeholder = itemsMenuPlaceholder[i]
        form.appendChild(input)
    }

    body.appendChild(form)
    
    //style
    form.style.backgroundColor = 'lightRed'
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
}


headHome() // chama o cabeçalho
formEstabelecimento() //cria form de estabelecimentos

