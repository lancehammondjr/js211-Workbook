const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  id;
  name;
  age;
  skillSet;
  placeBorn;
  
  constructor(id,name,age,skillSet,placeBorn){
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }

}
class Teammate extends Player {
  teamName;


  constructor(teamName, id, name, age, skillSet,placeBorn){
    super(id, name, age, skillSet, placeBorn)
    this.teamName = teamName;
  }
}

const listElement = document.getElementById('people');
const thePlayer = document.getElementById('players');
const teamBlue = document.getElementById('blue');
const teamRed = document.getElementById('red');
//let p = {};


const listPeopleChoices = () => {

  arrOfPeople.map(person => {
    console.log(person.name)
    

    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person)
      listElement.removeChild(li)
    })
    li.appendChild(button)
    let personText = document.createTextNode(`${person.name} - ${person.skillSet}`);
    li.appendChild(personText)
    listElement.append(li)
    //console.log(listOfPlayers)
  })
}
console.log(Player)

const makePlayer = (person) => {
  //listOfPlayers.push(playerText)
  let p = new Player(person.id,person.name,person.age,person.skillSet,person.placeBorn)
  console.log(p)
  listOfPlayers.push(p)
  
  console.log(listOfPlayers)
  const li = document.createElement("li");
  const redButton = document.createElement("button");
  const blueButton = document.createElement("button");
  redButton.innerHTML = "Red Team";
  blueButton.innerHTML = "Blue Team";
  redButton.addEventListener('click', function() {makeTeam(p, 'red')
    thePlayer.removeChild(li);
  });
  blueButton.addEventListener('click', function() {makeTeam(p, 'blue')
    thePlayer.removeChild(li);
  });
  li.appendChild(redButton);
  li.appendChild(blueButton);
  li.appendChild(document.createTextNode(`${p.name} - ${p.age}`));
  thePlayer.appendChild(li);
}



 const makeTeam = (p, teamName) => {
  if (teamName === 'red') {
    redTeam.push(p);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${p.name} - ${p.placeBorn}`));
    teamRed.appendChild(li);
    //console.log(listOfPlayers);
  }
  else if (teamName === 'blue') {
    blueTeam.push(p);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${p.name} - ${p.placeBorn} - ${p.age}`));
    teamBlue.appendChild(li);
  }
}


// describe("# Make a Player", function() {
//   it ("Move the person array to listOfPlayers array", function() {
//       //setup your world
//       makePlayer(person)
//       //call the code you are testing
//       assert.equal();
//       //verify your results (using assest.equals, ...)
//   });
// });
// describe("# Team Red", function() {
//   it ("Make Player part of team red", function() {
//       //setup your world
     
//       assert.equal();
//   });
// });
// describe("# Team Blue", function() {
//   it ("Make Player part of team blue", function() {
//       //setup your world
     
//       assert.equal();
//   });
// });


// }else {
// console.log();
// getPrompt();
// }


