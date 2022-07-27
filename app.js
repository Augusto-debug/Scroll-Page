const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // if (linksContainer.classList.contains('show-links')) {
  //   linksContainer.classList.remove('show-links');
  // } else {
  //   linksContainer.classList.add('show-links');
  // }
  // linksContainer.classList.toggle('show-links');
  const linksHeight = links.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const heightNavBar = navBar.getBoundingClientRect().height;
  const heightScroll = window.scrollY;
  // console.log(heightNavBar);
  if (heightScroll > heightNavBar) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  if (heightScroll > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Impede o scroll automatico da pagina quando clicado nos links.
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    console.log(position);

    // Se o menu não tiver a classe fixed-nav nós subtraimos novamente o valor da altura da navBar porque ao passarmos da altura de 82px a classe fixed-nav é colocada e então modifica o tamanho fazendo com que o scroll passe devido ao tamanho adicionado pela classe.
    if (!fixedNav) {
      position -= navHeight;
    }

    if (navHeight > 82) {
      position += containerHeight;
    }
    // console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
