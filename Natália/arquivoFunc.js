

function createInput (type="text", placeholder ="", name){
    const input = document.createElement("input");
    input.setAttribute("type", type );
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("name", name);

    return input;

}

function createInputWithEvent (type="text", placeholder ="", name="", event="", typeEvent= ()=>{}){
    const input = document.createElement("input");
    input.setAttribute("type", type );
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("name", name);
    input.addEventListener(event, typeEvent);

    return input;

}

function createLink (href ="", text="", nameClass=""){
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


//TESTES

const body =  document.querySelector("body");

body.appendChild(createInput ("text", "escreva seu nome", "inputForm"));

body.appendChild(createInputWithEvent ("text", "escreva sua idade", "inputForm", "keypress", onKeyPress = ()=>{}));

body.appendChild(createInputWithEvent ("text", "escreva seu tel", "inputForm2", "onclick", onClick = ()=>{}));

const link ="https://www.google.com.br";

let link2 = createLink(link, "clique aqui", "data-link");

let link3 = createLink(link, "clique aqui");

body.appendChild(link2);

body.appendChild(link3);


