function createForm() {
    const form = document.createElement('form');
    return form;
};

function createButton({text, onClick = ()=>{}}) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}


