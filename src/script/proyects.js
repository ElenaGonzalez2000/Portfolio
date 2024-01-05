class Target {
  constructor(tittle, description, img, labels, icons, iconType, page) {
    this.tittle = tittle;
    this.description = description;
    this.img = img;
    this.labels = labels;
    this.icons = icons;
    this.iconType = iconType;
    this.page = page;
  }
}

const weatherAppImg = "./public/proyects/weatherApp.png";
const honeyImg = "./public/proyects/honey.png";
const mlLegalesImg = "./public/proyects/mllegales.png";

const weatherApp = new Target(
  "Weather App",
  "Aplicación del clima que utiliza la API de OpenWeather para obtener información meteorológica de diferentes ciudades.",
  weatherAppImg,
  ["HTML5", "CSS3","Sass", "OpenWeather API"],
  ["html5", "css3", "sass", "cloud-download"],
  ["logo","logo","logo", ""],
  'https://weather-app-elenagonzalez.netlify.app/'
);
const honey = new Target(
  "Honey",
  "Mi primer sitio web ecommerce realizado con JavaScript.",
  honeyImg,
  ["HTML", "CSS3", "Sass", "Bootstrap", "JavaScript"],
  ["html5", "css3", "sass", "bootstrap", "javascript"],
  ["logo","logo","logo","logo", "logo"],
  "https://elenagonzalez2000.github.io/Honey/"
);
const mlLegales = new Target(
  "ML Legales",
  "Este es el primer proyecto que realicé junto a un pequeño equipo de trabajo para un estudio jurídico.",
  mlLegalesImg,
  ["HTML5", "CSS3", "Sass", "Bootstrap"],
  ["html5", "css3", "sass", "bootstrap"],
  ["logo","logo","logo","logo"],
  "https://www.mllegales.com.ar/"
)

const targets = [weatherApp, honey, mlLegales];

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
        <box-icon class="fill-white" type="${target.iconType[index]}" name="${target.icons[index]}" style="width: 18px"></box-icon>
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
