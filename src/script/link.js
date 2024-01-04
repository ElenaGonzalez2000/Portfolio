const link = [
  {
    name: "Linkedin",
    icon: "linkedin-square",
    link: "https://www.linkedin.com/in/elenagonzalez2000",
    type: "logo",
  },
  {
    name: "Email",
    icon: "envelope",
    link: "mailto:elena.ig000@gmail.com",
    type: "",
  },
  { name: "GitHub", icon: "github", link: "https://github.com/ElenaGonzalez2000", type: "logo" },
];

function renderLinks(links, containerRedes) {
  const container = document.querySelector(containerRedes);

  links.forEach((link) => {
    const newLink = document.createElement("a");
    newLink.href = link.link;
    newLink.target = "_blank"
    newLink.className =
      "transition-all hover:scale-105 flex items-center gap-1 text-purple-400 border-purple-400 border-solid border-2 rounded-full py-1 px-2";
    newLink.innerHTML = `
      <box-icon
        class="fill-purple-400"
        name="${link.icon}"
        style="width: 18px"
        type="${link.type}"
      ></box-icon>
      ${link.name}
    `;
    container.appendChild(newLink);
  });
}

renderLinks(link, ".contactoRedes");
renderLinks(link, ".heroRedes");