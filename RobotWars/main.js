'use strict'

class Player {
    cards = []; //the deck of cards belonging th this player (ie. their hand)
    id = null;
    divId = null;

    constructor(divId) {
        this.id = Math.random(); //the id of the player (used to generate the robot)
        this.divId = divId; // the divid on the page
    };
};

//make an API call to get the image of the robot

// instaniating 2 player instances
let player1 = new Player("player1");
let player2 = new Player("player2");
// generate the robot for player1
generateRobot(player1)
// generate the robot for player2
generateRobot(player2)
// get thecards from the service, and split them between the 2 players
generateAndDealCards();

// uses the deckofcardsapi to generate a new deck, and then divy them between the players
function generateAndDealCards() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(function(response) {
        console.log("Process fetch response for deck of cards", response);
        return response.json();
    })
    .then(function(json) {
        console.log("Processing the deck of cards payload", json);
        let deckId = json.deck_id;
        dealCards(deckId);
    })
}

// split the deck between the 2 players
function dealCards(deckId) {
    fetch("https://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count=52")
    .then(function(response) {
        console.log("Processing the response for drawing the cards", response);
        return response.json();
    })
    .then(function(json) {
        console.log("Processing the payload for drawing the cards", json);
        for(let i=0; i<json.cards.length; i+=2) {
            player1.cards.push(json.cards[i]);
            player2.cards.push(json.cards[i+1]);
        }
        updatePlayerCardCount(player1);
        updatePlayerCardCount(player2);
    })
}

// update the dom with the appropriate number of cards
function updatePlayerCardCount(player) {
    let countDiv = document.getElementById(player.divId+"Count");
    countDiv.innerText = player.cards.length;
}

function generateRobot(player) {
    // make an api call to get the image of the robot using the random id
   fetch("https://robohash.org/"+player.id)
        .then(function(response) {
            console.log("Processing the robot fetch response", response);
            return response.blob();
        })
        .then(function(blob) {
            console.log("Processing the robo fetch payload", blob);
            insertRobot(player.divId, blob);
        }); 
}


//generate the image tag, and insert it in the approriate div
function insertRobot(divId, blob) {
    console.log("Attempting to add the img to div", divId);
    let img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    let playerDiv = document.getElementById(divId);
    playerDiv.appendChild(img);
}

//each player plays their top card,
//based on whose card has the heights value, that player takes both cards

function playTurn() {
    console.log("Processing turn");
    let card1 = player1.cards.shift();
    let card2 = player2.cards.shift(); 

    console.log("card1: ", card1);
    console.log("card1: ", card2);
    document.getElementById('player1Card').src = card1.image
    document.getElementById('player2Card').src = card2.image
    let v1 = getCardValue(card1);
    let v2 = getCardValue(card2);

    console.log("Comparing ", v1, " to ", v2);

    if(v1 > v2) {
        player1.cards.push(card1);
        player1.cards.push(card2);
    } 
    else if (v1 < v2) {
        player2.cards.push(card1);
        player2.cards.push(card2);
    }
    else {
        player1.cards.push(card1);
        player2.cards.push(card2);
    }
       
    updatePlayerCardCount(player1)
    updatePlayerCardCount(player2)

}

function getCardValue(card) {
    let value = card.value;
    if(value == "JACK") {
        return 11;
    }
    else if(value == "QUEEN") {
        return 12;
    }
    else if(value == "KING") {
        return 13;
    }
    else if(value == "ACE") {
        return 14;
    } 
    else {
        return parseInt(value);
    }
};
    









