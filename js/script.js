let planets = ["Vénus", "Mercure" , "Ceres", "Jupiter", "Saturne", "la Terre" , "Uranus", "Neptune", "Pluton", "Mars" ,"Charon"];
    let planetsColors = ["red", "pink", "yellow", "blue", "grey" , "brown", "aqua", "orange" , "white" ,"purple", "green"];

    let containerOfPlanets = document.querySelector(".listPlanets");
    containerOfPlanets.style.display = "flex";
    containerOfPlanets.style.flexWrap = "wrap";

    for(let i = 0; i < planets.length; i++) {
        
        let globalDiv = document.createElement("div");
        let myDiv = document.createTextNode(planets[i]);
        globalDiv.appendChild(myDiv);
        globalDiv.classList.add("planet");
        globalDiv.style.background = planetsColors[i];
        globalDiv.style.margin = "5px";
        globalDiv.style.fontWeight = "bold";
        containerOfPlanets.appendChild(globalDiv);
    }