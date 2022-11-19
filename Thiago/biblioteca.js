window.biblioteca = {
  header: (children) => {
    const header = document.createElement("header");
    for (const child of children) {
      header.appendChild(child);
    }
    return header;
  },
  elementoHeader: ({ imgheader }) => {
    //criação do logo
    const divHeader = document.createElement("div");
    const divLogo = document.createElement("div");
    const divMenu = document.createElement("div");
    const link = document.createElement("a");
    const img = document.createElement("img");

    divMenu.classList.add("cardCategoria");

    link.href = "./page.html";
    img.src = imgheader;

    link.appendChild(img);
    divLogo.appendChild(link);

    //criação do menu
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    //nav.appendChild(ul);

    //const menu = ["ESTABELECIMENTOS", "CATEGORIAS"];
    //const subMenu = ["Listar", "Cadastrar"];

    const Cat = document.createElement("a");
    const Est = document.createElement("a");
    const subMenuC = document.createElement("div");
    const subMenuE = document.createElement("div");
    const ListaC = document.createElement("a");
    const CadC = document.createElement("a");
    const ListaE = document.createElement("a");
    const CadE = document.createElement("a");

    
    subMenuC.classList.add('submenu')
    subMenuE.classList.add('submenu')


    ListaC.link = "./page.html";
    CadC.link = "./page.html";
    ListaE.link = "./page.html";
    CadE.link = "./page.html";

    ListaC.text = "Listar";
    CadC.text = "Cadastrar";
    ListaE.text = "Listar";
    CadE.text = "Cadastrar";
    Cat.text = "Categorias";
    Est.text = "Estabelecimentos";

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
    subMenuC.style.backgroundColor = "#f9f";
    subMenuE.style.display = "none";
    subMenuE.style.backgroundColor = "#f9f";
    //nav.style.float = "right";

    //for (let i = 0; i < menu.length; i++) {
    // const li = document.createElement("li");
    // li.textContent = menu[i];
    // ul.appendChild(li);

    // const ul2 = document.createElement("ul");
    // for (let j = 0; j < subMenu.length; j++) {
    //   const li2 = document.createElement("li");
    //   li2.textContent = subMenu[j];
    //   ul2.appendChild(li2);
    //   ul.appendChild(ul2);
    // }
    //style
    // ul2.style.display = "none";
    // ul2.style.right ="0";
    // ul2.style.backgroundColor = "#f9f9f9";
    // ul2.style.minWidth = "160px";
    // ul2.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    // ul2.style.zIndex = "1";
    // nav.style.float = "right";

    //   ul2.style.backgroundColor = "lightblue";
    //   ul2.style.display = "none";
    //   ul2.style.padding = "0";

    //   ul.addEventListener("mouseover", () => {
    //     ul2.style.display = "block";
    //   });
    //   ul.addEventListener("mouseout", () => {
    //     ul2.style.display = "none";
    //   });
    //   li.style.listStyle = "none";
    //   ul2.style.listStyle = "none";
    //   li.style.margin = "0 15px";

    // //style
    // ul2.addEventListener("mouseover", () => {
    //   ul2.style.display = "block";
    // });
    // ul2.addEventListener("mouseout", () => {
    //   ul2.style.display = "none";
    // });
    // ul.style.backgroundColor = "orange";
    // ul.style.margin = "0px";
    // ul.style.padding = "0px";
    // ul.style.display = "flex";
    // ul.style.width = "60%";
    // ul.style.flexDirection = "row";
    // ul.style.listStyle = "none";

    // ul.style.position = "relative";
    // ul.style.display = "flex";
    // ul.style.flexDirection = "row";
    // ul.style.listStyle = "none";
    // ul.addEventListener("mouseover", () => {
    //     ul2.style.display = "block";
    // });
    // ul.addEventListener("mouseleave", () => {
    //     ul2.style.display = "none";
    // });

    //nav.style.backgroundColor = "red";
    //nav.style.height = "100px";
    //}

    //divMenu.appendChild(nav);
    divMenu.appendChild(Est);
    divMenu.appendChild(Cat);
    divHeader.appendChild(divLogo);
    divHeader.appendChild(divMenu);

    return divHeader;
  },
};
