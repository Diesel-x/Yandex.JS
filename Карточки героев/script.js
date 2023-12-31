// Я бы сделал всё куда качественее, но изза экзаменов отстал, поэтому быстренько делаю самый базовый функционал без дизайна и валидации.



var heroes = [
  { name: "Соник", class: "Еж" },
  { name: "Тейлз", class: "Лис" },
];

function addHero() {
  var name = document.getElementById("hero-name").value;
  var classs = document.getElementById("hero-class").value;
  
  var newHero = { name: name, class: classs };
  heroes.push(newHero);
  
  displayHeroes();
  
  document.getElementById("hero-name").value = "";
  document.getElementById("hero-class").value = "";
}

function displayHeroes() {
  var heroesContainer = document.getElementById("heroes-container");
  
  while (heroesContainer.firstChild) {
    heroesContainer.removeChild(heroesContainer.firstChild);
  }
     
  heroes.forEach(function(hero) {
    var heroCard = document.createElement("div");
    heroCard.className = "hero-card";
    
    var heroName = document.createElement("h2");
    heroName.textContent = hero.name;
    
    var heroClass = document.createElement("p");
    heroClass.textContent = hero.class;
    
    heroCard.appendChild(heroName);
    heroCard.appendChild(heroClass);
    
    heroesContainer.appendChild(heroCard);
  })
}

displayHeroes();
document.getElementById("add-hero").addEventListener("click", addHero);