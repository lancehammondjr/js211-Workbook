'use strict'

console.log("I'm Here")

// let fetchPromise = fetch("https://randomuser.me/api/");
// let payloadPromise = fetchPromise.then(function(response) {
//     console.log("Fetch response", response)
//     return response.json();
// });

// payloadPromise.then(function(json) {
//     console.log("payload is", json);
// });

fetch("https://randomuser.me/api/?results=20")
    .then(function(response) {
            console.log("Fetch response", response)
            return response.json();
        }
    ).then(function(json) {
        console.log("payload is", json);
        let users = json.results;
        processUsers(users);

    });


function processUsers(users) {
    users.forEach(function(user){
        processSingleUser(user);
    });
}    

function processSingleUser(user) {
    let firstName = user.name.first;
    let lastName = user.name.last;

    let li = document.createElement('li')
    let divName = document.createElement('div').setAttribute('class', 'userName')
    let divAddress = document.createElement('div').setAttribute('class', 'address')

    li.innerText = `${firstName} ${lastName}`;

    let ul = document.getElementById("people");
    ul.appendChild(li);


    li.addEventListener('click', function() {
        if(li.classList.contains('blue')) {
            li.classList.add('red');
            li.classList.remove('blue');
        }
        else {
            li.classList.add('blue');
            li.classList.remove('red');
        }
    })
}


