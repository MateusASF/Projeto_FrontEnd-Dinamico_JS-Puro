window.biblioteca = {
    footer: (children) => {
        const footer = document.createElement('footer');
        for (const child of children) {
            footer.appendChild(child);
        }
        return footer;
    },
    elementoFooter: ({nomeCategoria, quantidadeCategoria, linkA}) => {
        const divFooter = document.createElement('div');
        divFooter.classList.add('cardCategoria')

        const spanCategoria = document.createElement('span');
        const link = document.createElement('a');
        link.setAttribute('href', linkA);
        spanCategoria.appendChild(link);

        const pCount = document.createElement('p');
        link.textContent = nomeCategoria;
        pCount.textContent = quantidadeCategoria;
        divFooter.appendChild(spanCategoria);
        divFooter.appendChild(pCount);
        return divFooter;
    },
    createButton: ({text, onClick = ()=>{}}) => {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    },
    createForm:() => {
        const form = document.createElement('form');
        return form;
    },
    createField: (label,child) => {
        const field = document.createElement('div');
        field.classList.add('fiel');
        const labelElement = document.createElement('label');
        labelElement.textContent = label + ':';
        field.appendChild(labelElement);
        field.appendChild(child);
        return field
    },
    listar: (palavrasComduasAspasSeparadasPorVirgula) => {

        const newUl = document.createElement("ul")
        
        for(i=1; i < arguments.length; i++) {
    
            const newLi = document.createElement("li")
            newLi.innerHTML = `<li>${arguments[i]}</li>`
            newUl.appendChild(li)   
            
        }
    },
    createInput: (type="text", placeholder ="", name) => {
        const input = document.createElement("input");
        input.setAttribute("type", type );
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("name", name);
    
        return input;
    },
    createInputWithEvent: (type="text", placeholder ="", name="", event="", typeEvent= ()=>{}) => {
        const input = document.createElement("input");
        input.setAttribute("type", type );
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("name", name);
        input.addEventListener(event, typeEvent);
    
        return input;
    },
    createLink: (href ="", text="", nameClass="") => {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = text;
        link.setAttribute("target", "_blank");
       if(nameClass != "") //if nao funciona ??
        {
            link.classList.add(nameClass);
        }
    
        return link;
    }
    
}