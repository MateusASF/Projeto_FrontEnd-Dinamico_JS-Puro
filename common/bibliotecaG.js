window.biblioteca = {
    footer: (children) => {
        const footer = document.createElement('footer');
        for (const child of children) {
            footer.appendChild(child);
        }
        return footer;
    },
    elementoFooter: ({ nomeCategoria, quantidadeCategoria, linkA }) => {
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
    createButton: ({ text, onClick = () => { } }) => {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    },
    form: (children) => {
        const form = document.createElement('form');
        for (const child of children) {
            form.appendChild(child);
        }
        return form;
    },
    div: (children) => {
        const div = document.createElement('div');
        div.classList.add('divGeral')
        for (const child of children) {
            div.appendChild(child);
        }
        return div;
    },
    actions: (children) => {
        const actions = document.createElement('div');
        actions.classList.add('actions')
        for (const child of children) {
            actions.appendChild(child);
        }
        return actions;
    },
    field: ({label, input}) => {
        const field = document.createElement('div');
        field.classList.add('field');
        const labelContainer = document.createElement('div');
        const labelElement = document.createElement('label');
        labelContainer.appendChild(labelElement);
        field.appendChild(labelContainer);
        labelElement.textContent = label +':';
        field.appendChild(input);
        return field;
    },
    listReturn: ({label, p}) => {
        const field = document.createElement('div');
        field.classList.add('field');
        const labelContainer = document.createElement('div');
        const labelElement = document.createElement('label');
        labelContainer.appendChild(labelElement);
        field.appendChild(labelContainer);
        labelElement.textContent = label +':';
        field.appendChild(p);
        return field;
    },
    input: ({type = 'text', name, onKeyPress = ()=>{}}) => {
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('name', name);
        input.addEventListener('keypress', onKeyPress);
        return input;
    },
    button: ({text, type = 'default', onClick = ()=>{}}) => {
        const button = document.createElement('button');
        button.classList.add(type);
        button.setAttribute('type', 'button');
        button.textContent = text;
        button.addEventListener('click', onClick);
        return button;
    },
    notification: {
        timer: null,
        element: null,
        create: ({text, type}) => {
            biblioteca.notification.remove();
            const element = document.createElement('div');
            element.classList.add('notification');
            element.classList.add(`notification-${type}`);
            element.textContent = text;
            biblioteca.notification.element = element;
            document.body.appendChild(element);
            biblioteca.notification.timer = setTimeout(() => {
                biblioteca.notification.remove();
            }, 5000);
        },
        remove: () => {
            if (biblioteca.notification.element) {
                clearTimeout(biblioteca.notification.timer);
                document.body.removeChild(biblioteca.notification.element);
                biblioteca.notification.element = null;
            }
        }
    
    },
    
    listar: (palavrasComduasAspasSeparadasPorVirgula) => {

        const newUl = document.createElement("ul")

        for (i = 1; i < arguments.length; i++) {

            const newLi = document.createElement("li")
            newLi.innerHTML = `<li>${arguments[i]}</li>`
            newUl.appendChild(li)

        }
    },
    createInput: (type = "text", placeholder = "", name) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("name", name);

        return input;
    },
    createInputWithEvent: (type = "text", placeholder = "", name = "", event = "", typeEvent = () => { }) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("name", name);
        input.addEventListener(event, typeEvent);

        return input;
    },
    createLink: (href = "", text = "", nameClass = "") => {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = text;
        link.setAttribute("target", "_blank");
        if (nameClass != "") //if nao funciona ??
        {
            link.classList.add(nameClass);
        }

        return link;
    },
    workResumeContainer: (children) => {
        const workResumeContainer = document.createElement('div');
        workResumeContainer.classList.add('workResumeContainer')
        for (const child of children) {
            workResumeContainer.appendChild(child);
        }
        return workResumeContainer
    },
    workResume: ({ workResumeTitleContent, workResumeSubTitleContent, workResumeFocusTextContent, workResumeTextContent }) => {
        const divWorkResume = document.createElement('div');
        divWorkResume.classList.add('cardResumeContainer')

        const workResumeTitle = document.createElement('h1');
        const workResumeSubTitle = document.createElement('h2');
        const workResumeFocusText = document.createElement('span');
        const workResumeText = document.createElement('p');

        workResumeTitle.textContent = workResumeTitleContent;
        workResumeSubTitle.textContent = workResumeSubTitleContent;
        workResumeFocusText.textContent = workResumeFocusTextContent;
        workResumeText.textContent = workResumeTextContent;

        divWorkResume.appendChild(workResumeTitle)
        divWorkResume.appendChild(workResumeSubTitle)
        divWorkResume.appendChild(workResumeFocusText)
        divWorkResume.appendChild(workResumeText)

        return divWorkResume;
    },
    header: (children) => {
        const header = document.createElement("header");
        for (const child of children) {
            header.appendChild(child);
        }
        return header;
    },
    elementoHeader: ({ imgheader, linkMenu, sobre, listCat, cadCat, listEst, cadEst}) => {
        //criação do logo
        const divHeader = document.createElement("div");

        const divLogo = document.createElement("div");
        const divMenu = document.createElement("div");
        const link = document.createElement("a");
        const img = document.createElement("img");

        divMenu.classList.add("cardMenu");

        link.href = linkMenu;
        img.src = imgheader;

        link.appendChild(img);
        divLogo.appendChild(link);

        //criação do menu

        const Cat = document.createElement("a");
        const Est = document.createElement("a");
        const Sobre = document.createElement("a");

        Cat.classList.add('topMenu');
        Est.classList.add('topMenu');

        const subMenuC = document.createElement("div");
        const subMenuE = document.createElement("div");
        const ListaC = document.createElement("a");
        const CadC = document.createElement("a");
        const ListaE = document.createElement("a");
        const CadE = document.createElement("a");

        subMenuC.classList.add('submenu')
        subMenuE.classList.add('submenu')

        ListaC.href = listCat;
        CadC.href = cadCat;

        ListaE.href = listEst;
        CadE.href = cadEst;

        Sobre.href = sobre;


        ListaC.text = "Listar";
        CadC.text = "Cadastrar";
        ListaE.text = "Listar";
        CadE.text = "Cadastrar";
        Cat.text = "Categorias";
        Est.text = "Estabelecimentos";
        Sobre.text = "Sobre";

        subMenuC.appendChild(CadC);
        subMenuC.appendChild(ListaC);
        subMenuE.appendChild(CadE);
        subMenuE.appendChild(ListaE);

        Cat.appendChild(subMenuC);
        Est.appendChild(subMenuE);

        subMenuC.addEventListener("mouseover", () => {
            subMenuC.style.display = "flex";
            subMenuC.style.flexDirection = "column";
        });
        Cat.addEventListener("mouseover", () => {
            subMenuC.style.display = "flex";
            subMenuC.style.flexDirection = "column";
        });
        Cat.addEventListener("mouseout", () => {
            subMenuC.style.display = "none";
        });

        Est.addEventListener("mouseover", () => {
            subMenuE.style.display = "flex";
            subMenuE.style.flexDirection = "column";
        });
        subMenuE.addEventListener("mouseover", () => {
            subMenuE.style.display = "flex";
            subMenuE.style.flexDirection = "column";
        });
        Est.addEventListener("mouseout", () => {
            subMenuE.style.display = "none";
        });
        subMenuC.style.display = "none";
        subMenuE.style.display = "none";

        
        divMenu.appendChild(Est);
        divMenu.appendChild(Cat);
        divMenu.appendChild(Sobre);
        divHeader.appendChild(divLogo);
        divHeader.appendChild(divMenu);

        return divHeader;
    },

    createDiv: (nameClass) => {
        const div = document.createElement("div");
        div.classList.add(nameClass);
    
        return div;
    },

    createForm2:(children) => {
        const form = document.createElement('form');
        for (const child of children) {
            form.appendChild(child);
        }
        
        return form;
    },

    createField2: ({label, input}) => {
        const field = document.createElement('div');
        field.classList.add('field');
        const labelContainer = document.createElement('div');
        labelContainer.classList.add('label-container');
        const labelElement = document.createElement('label');
        labelElement.classList.add('label-element');
        labelContainer.appendChild(labelElement);
        field.appendChild(labelContainer);
        labelElement.textContent = label +':';
        field.appendChild(input);
        return field;
    },


        createButton2: ({text, type, id, onClick = ()=>{}}) => {
            const button = document.createElement('button');
            button.setAttribute('type', type);
            button.setAttribute('id', id);
            button.textContent = text;
            button.addEventListener('click', onClick);
            return button;
    },

    createInput2: ({type, placeholder="", name, id}) => {
        const input = document.createElement("input");
        input.setAttribute("type", type );
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("name", name);
        input.setAttribute('id', id);
    
        return input;
    },

    createH1: (text, id, child) =>
    {
        const h1 = document.createElement('h1');
        h1.textContent = text;
        h1.setAttribute('id', id);
        child.appendChild(h1);
        
        return h1;

    },
    criaCard: async (data) => {
        const x = await teste();
        console.log("Console X -> " + x)

        const array = [];
        for (i in data) {
            const name = JSON.stringify(data[i], ['name']).replace(`{"name":"`, "").replace(`"}`, "")
            const uidCategoria = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")
            const uidEstabelecimento = JSON.stringify(data2[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")

            let contagem = 0
            if (uidCategoria === uidEstabelecimento) {
                contagem++
            }

            const element = biblioteca.elementoFooter({
                nomeCategoria: name,
                //nomeCategoria: Object.values(data[i]).splice(2), //splice traz consequências graves
                quantidadeCategoria: contagem,
                linkA: '../index.html'
            })

            array.push(element)
        }

        return array
    },
    createBanner: () => {
        const indexContainner = document.createElement('div');
        indexContainner.classList.add('img-container');
        const containerImg = document.createElement('div');
        containerImg.classList.add('img-element-container');
        indexContainner.appendChild(containerImg);
        const image = document.createElement('img');
        image.src = './img/banner2.PNG'; 
        containerImg.appendChild(image);
        image.classList.add('img-banner');
        return image;
    },
    listarCategoriaDiv: (children) => {
        const div = document.createElement('div');
        div.classList.add('containerCards')
        for (const child of children) {
            div.appendChild(child);
        }
        const divGeral = document.getElementsByClassName('divGeral')[0]
        divGeral.appendChild(div)

        return divGeral;
    },
    listarCategoriaElemento: ({ nomeCategoria, uidCategoria }) => {
        const divListarCategoria = document.createElement('div');
        divListarCategoria.classList.add('cardCategoriaLista')
        
        const linkDelete = document.createElement('a');
        const linkEdit = document.createElement('a');

        const spanCategoria = document.createElement('span');

        const iconDelete = document.createElement('i');
        const iconEdit = document.createElement('i');

        iconDelete.classList.add('material-icons')
        iconEdit.classList.add('material-icons')
        
        iconDelete.textContent = 'delete';
        iconEdit.textContent = 'edit';


        
        linkDelete.href = "#"
        linkEdit.href = "#"

        linkDelete.setAttribute("id", uidCategoria)
        linkEdit.setAttribute("id", uidCategoria)

        linkDelete.addEventListener('click', biblioteca.deleteCategoria);
        linkEdit.addEventListener('click', biblioteca.updateCategoria);


        linkDelete.appendChild(iconDelete)
        linkEdit.appendChild(iconEdit)

        spanCategoria.textContent = nomeCategoria;
        
        divListarCategoria.appendChild(spanCategoria);
        divListarCategoria.appendChild(linkDelete);
        divListarCategoria.appendChild(linkEdit);
        
        return divListarCategoria;
    },
    updateCategoria: async (event) => {
        const idValue = event.path[1].id
        //console.log(idValue);

        // var dados = JSON.stringify($('input').val());
        // sessionStorage.setItem('chave', dados);
        
        
        var passaValor= function(valor)
        {
            window.location = "../editar/editarCategoria.html?minhaVariavel=" + valor;
        }
        var valorQueEuQueroPassar = 123;
        
        passaValor(idValue);

        //window.location.href = '../editar/editarCategoria.html';

        // await updateCategoriaApi(idValue)
        // document.location.reload(true);
    },
    deleteCategoria: async (event) => { 
        //const idValue = document.getElementById(uid).id;

        const idValue = event.path[1].id
        console.log(idValue);
        
        await deleteCategoriaApi(idValue)

        document.location.reload(true);
    },
    criaCardCategoria: (data) => {
        const array = [];
        for (i in data) {
            const name = JSON.stringify(data[i], ['name']).replace(`{"name":"`, "").replace(`"}`, "")
            const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")
            
            const element = biblioteca.listarCategoriaElemento({
                nomeCategoria: name,
                uidCategoria: uid,
                //nomeCategoria: Object.values(data[i]).splice(2), //splice traz consequências graves
            })
            
            array.push(element)
        }

        return array
    },

    listarEstabelecimentoDiv: (children) => {
        const div = document.createElement('div');
        div.classList.add('containerCards')
        for (const child of children) {
            div.appendChild(child);
        }
        return div;
    },
    listarEstabelecimentoElemento: ({nomeEst, enderecoEst, postalCodeEst, emailEst, foneEst, uidEstabelecimento}) => {
        const divListarEstabelecimento = document.createElement('div');
        divListarEstabelecimento.classList.add('cardEstabelecimentoLista')

        const linkDelete = document.createElement('a');
        const linkEdit = document.createElement('a');

        const spanEstabelecimento = document.createElement('span');
        const hNome = document.createElement('h3');
        const pEnd = document.createElement('p');
        const pContact = document.createElement('p');

        const iconDelete = document.createElement('i');
        const iconEdit = document.createElement('i');
    
        iconDelete.classList.add('material-icons')
        iconEdit.classList.add('material-icons')
            
        iconDelete.textContent = 'delete';
        iconEdit.textContent = 'edit';
            
        linkDelete.href = "#"
        linkEdit.href = "#"
    
        linkDelete.setAttribute("id", uidEstabelecimento)
        linkDelete.addEventListener('click', biblioteca.deleteEstabelecimento); //fazer função
    
        linkDelete.appendChild(iconDelete)
        linkEdit.appendChild(iconEdit)

        spanEstabelecimento.appendChild(hNome);
        spanEstabelecimento.appendChild(pEnd);
        spanEstabelecimento.appendChild(pContact);

        hNome.textContent =  "Nome: " + nomeEst;
        pEnd.textContent = "Endereço: " + enderecoEst + ", código Postal: " + postalCodeEst;
        pContact.textContent = "e-mail: " + emailEst + ", telefone: " + foneEst;

        divListarEstabelecimento.appendChild(spanEstabelecimento);
        divListarEstabelecimento.appendChild(linkDelete);
        divListarEstabelecimento.appendChild(linkEdit);

        divListarEstabelecimento.appendChild(spanEstabelecimento);
        return divListarEstabelecimento;
    },
    criaCardEstabelecimento: (data) => {
        const array = [];
        for (i in data) {
            const name = JSON.stringify(data[i], ['name']).replace(`{"name":"`, "").replace(`"}`, "");
            const address = JSON.stringify(data[i], ['address']).replace(`{"address":"`, "").replace(`"}`, "")
            const postalCode = JSON.stringify(data[i], ['postal_code']).replace(`{"postal_code":"`, "").replace(`"}`, "")
            const email = JSON.stringify(data[i], ['email']).replace(`{"email":"`, "").replace(`"}`, "")
            const phone = JSON.stringify(data[i], ['phone']).replace(`{"phone":"`, "").replace(`"}`, "")
            const uid = JSON.stringify(data[i], ['uid']).replace(`{"uid":"`, "").replace(`"}`, "")

            // nomeEst, enderecoEst, postalCodeEst, emailEst, foneEst, uidEstabelecimento

            const element = biblioteca.listarEstabelecimentoElemento({
                nomeEst: name, 
                enderecoEst: address, 
                postalCodeEst: postalCode, 
                emailEst: email, 
                foneEst: phone, 
                uidEstabelecimento: uid})
                //nomeCategoria: Object.values(data[i]).splice(2), //splice traz consequências graves            )
            array.push(element)

        }

        return array
    },
    footer2: async () => {
        const categorias = await listCategory();
        const estabelecimentos = await listEstablishment();
    
        console.log(categorias)
        console.log(estabelecimentos)
    
        const footer = document.createElement('footer');
        footer.classList.add('footerDiv')
    
        categorias.forEach((item) => {
            let contador = 0;
            estabelecimentos.forEach((elemento) => {
                if (elemento.category.uid === item.uid) {
                    contador++
                }
            })
            const divElement = document.createElement('div')
            divElement.classList.add('cardCategoria')
            const spanCategoria = document.createElement('span');
            const link = document.createElement('a');
    
            link.textContent = `${item.name +" "+ contador}`
    
            link.setAttribute('href', "#");
            spanCategoria.appendChild(link);
            divElement.appendChild(spanCategoria)
            footer.appendChild(divElement);
        })
        document.body.appendChild(footer);
    },
    queryString: (parameter) => {
        var loc = location.search.substring(1, location.search.length);
        var param_value = false;
        var params = loc.split("&");
        for (i = 0; i < params.length; i++) {
            param_name = params[i].substring(0, params[i].indexOf('='));
            if (param_name == parameter) {
                param_value = params[i].substring(params[i].indexOf('=') + 1)
            }
        }
        if (param_value) {
            return param_value;
        }
        else {
            return undefined;
        }
    }
}

