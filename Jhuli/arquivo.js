

function listar (palavrasComduasAspasSeparadasPorVirgula){

    const newUl = document.createElement("ul")
    
    for(i=1; i < arguments.length; i++) {

        const newLi = document.createElement("li")
        newLi.innerHTML = `<li>${arguments[i]}</li>`
        newUl.appendChild(li)   
        
    }
}



function createField(label,child){
    const field = document.createElement('div');
    field.classList.add('fiel');
    const labelElement = document.createElement('label');
    labelElement.textContent = label + ':';
    field.appendChild(labelElement);
    field.appendChild(child);
    return field
}

/* 
form.appendChild(
    createField('Usuario', document.createElement('input'))
);

*/