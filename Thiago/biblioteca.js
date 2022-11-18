window.biblioteca = {
    header: (children) => {
        const header = document.createElement('header');
        for (const child of children) {
            header.appendChild(child);
        }
        return header;
    },
    elementoHeader: ({imgheader}) => {
        const divHeader = document.createElement('div');
        const link = document.createElement('a');
        const img = document.createElement('img');

        //divHeader.classList.add('cardCategoria');
        
        link.href = "./page.html";
        img.src = imgheader;

        link.appendChild(img);
        divHeader.appendChild(link);

        const nav = document.createElement('nav')
        const ul = document.createElement('ul')
    
        nav.appendChild(ul)
        divHeader.appendChild(nav)
    
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
    
                //style
                ul2.style.backgroundColor = 'lightGreen'
                ul2.style.display = 'none'
                ul2.style.padding = '0'
    
    
                li.addEventListener('mouseover', () => {
                    ul2.style.display = 'block'
                })
                li.addEventListener('mouseout', () => {
                    ul2.style.display = 'none'
                })
            }
        }

        return divHeader;
    }
}
