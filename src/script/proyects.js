class Target {
  constructor(tittle, description, img, labels, icons, page) {
    this.tittle = tittle;
    this.description = description;
    this.img = img;
    this.labels = labels;
    this.icons = icons;
    this.page = page
  }
}

const weatherAppImg = "../public/proyects/weatherApp.png";
const honeyImg = "../public/proyects/honey.png";

const weatherApp = new Target(
  "Weather App",
  "Esta es una aplicación del clima que utiliza la API de OpenWeather para obtener información meteorológica de diferentes ciudades.",
  weatherAppImg,
  ["HTML5", "Sass", "OpenWeather API"],
  ["html5", "sass", "cloud"],
  'https://weather-app-elenagonzalez.netlify.app/'
);
const honey = new Target(
  "Honey",
  "Pagina de tienda de ropa con JavaScript",
  honeyImg,
  ["HTML", "Sass", "Bootstrap", "JavaScript"],
  ["html5", "sass", "bootstrap", "javascript"],
  "https://elenagonzalez2000.github.io/Honey-update/"
);

const targets = [weatherApp, honey];

const renderTargets = (targets) => {
  const container = document.querySelector(".proyects-container");
  targets.forEach((target) => {
    const card = document.createElement("div");
    card.classList.add("target", "flex", "flex-col", "gap-2");

    card.innerHTML = `
      <h3 class="target-tittel font-bold text-purple-600 text-xl">${
        target.tittle
      }</h3>
      <p class="target-description dark:text-slate-50">
        ${target.description}
      </p>
      <a href="${target.page}" target="_blank"><img class="rounded-sm" src="${target.img}" alt="" /></a>
      <div class="target-labels flex items-center gap-2 flex-wrap">
        ${target.labels
          .map(
            (label, index) => `
        <div
        class="flex rounded-full bg-purple-600 px-2 items-center">
        <box-icon class="fill-white" type="logo" name="${target.icons[index]}" style="width: 18px"></box-icon>
        <span class="text-xs text-slate-50">${label}</span>
      </div>
        `
          )
          .join("")}
      </div>
    `;
    container.appendChild(card);
  });
};

renderTargets(targets);
