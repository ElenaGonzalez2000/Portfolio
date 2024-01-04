// funcion para mostrar las skills
const skills = [
  "HTML5",
  "CSS3",
  "Sass",
  "Bootstrap",
  "JavaScript",
  "Git",
  "GitHub",
];

const skillsIcons = skills.map((element) => element.toLocaleLowerCase());

const renderSkills = (skills, skillsIcons) => {
  const skillsContainer = document.querySelector(".skills-container");

  skills.forEach((skill, index) => {
    const content = document.createElement("div");
    content.classList.add(
      "flex",
      "rounded-full",
      "bg-purple-600",
      "dark:bg-purple-200",
      "px-3",
      "py-1",
      "gap-1",
      "items-center"
    );
    content.innerHTML = `
        <box-icon style="width: 18px" type="logo" name="${skillsIcons[index]}" class="fill-slate-100 dark:fill-purple-700 "></box-icon>
            <span class="text-slate-100 dark:text-purple-700  font-medium text-sm">${skill}</span>
        `;
    skillsContainer.appendChild(content);
  });
};
renderSkills(skills, skillsIcons);


// funcion para mostrar las habilidades blandas

const softSkills = [
  "Trabajo en equipo",
  "Adaptabilidad y flexibilidad",
  "Gestion del tiempo",
  "Comunicacion efectiva",
  "Empatía",
  "Pensamiento crítico",
  "Profesionalismo",
  "Aprendizaje continuo",
  "Creatividad",
];

const renderSoftSkills = (softSkills) => {
  const softSkillsContainer = document.querySelector(".softSkills-container");
  softSkills.forEach((soft) => {
    const content = document.createElement("span");
    content.classList.add(
      "text-slate-100",
      "dark:text-purple-700",
      "font-bold",
      "text-sm",
      "bg-purple-600",
      "rounded-full",
      "px-2",
      "py-1",
      "dark:bg-purple-200"
    );
    content.innerText = soft;
    softSkillsContainer.appendChild(content);
  });
};
renderSoftSkills(softSkills);
