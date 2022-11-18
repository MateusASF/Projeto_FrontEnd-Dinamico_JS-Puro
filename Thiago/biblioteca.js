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
        
        return divHeader;
    }
}
