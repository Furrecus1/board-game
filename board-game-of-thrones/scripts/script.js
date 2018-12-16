function fetchSnow() {
	fetch("https://anapioficeandfire.com/api/characters/583")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displaySnow(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displaySnow(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3 class="character-name">' + data.name + '</h3>';
    document.getElementsByClassName('snow')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.titles + '</p>' +
                  '<p>' + data.aliases[2] + '</p>';
    document.getElementsByClassName('snow')[1].innerHTML = backOutput;
}
fetchSnow();
function fetchHodor() {
	fetch("https://anapioficeandfire.com/api/characters/2")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayHodor(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayHodor(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.aliases + '</h3>';
    document.getElementsByClassName('hodor')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.aliases + '</h3>' +
                  '<p>' + data.name + '</p>';
    document.getElementsByClassName('hodor')[1].innerHTML = backOutput;
}
fetchHodor();
function fetchJaime() {
	fetch("https://www.anapioficeandfire.com/api/characters/529")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayJaime(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayJaime(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('jaime')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.titles[1] + '</p>' +
                  '<p>' + data.aliases[0] + '</p>';
    document.getElementsByClassName('jaime')[1].innerHTML = backOutput;
}
fetchJaime();
function fetchTyrion() {
	fetch("https://www.anapioficeandfire.com/api/characters/1052")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayTyrion(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayTyrion(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('tyrion')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.aliases[0] + '</p>' +
                  '<p>' + data.aliases[1] + '</p>';
    document.getElementsByClassName('tyrion')[1].innerHTML = backOutput;
}
fetchTyrion();
function fetchCersei() {
	fetch("https://www.anapioficeandfire.com/api/characters/238")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayCersei(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayCersei(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('cersei')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.titles[0] + '</p>' +
                  '<p>' + data.titles[2] + '</p>';
    document.getElementsByClassName('cersei')[1].innerHTML = backOutput;
}
fetchCersei();

function fetchDrogo() {
	fetch("https://www.anapioficeandfire.com/api/characters/1346")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayDrogo(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayDrogo(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('drogo')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.aliases[0] + '</p>' +
                  '<p>' + data.aliases[1] + '</p>';
    document.getElementsByClassName('drogo')[1].innerHTML = backOutput;
}
fetchDrogo();

function fetchRamsay() {
	fetch("https://www.anapioficeandfire.com/api/characters/849")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayRamsay(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayRamsay(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('ramsay')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.aliases[1] + '</p>' +
                  '<p>' + data.titles[0] + '</p>';
    document.getElementsByClassName('ramsay')[1].innerHTML = backOutput;
}
fetchRamsay();

function fetchBrienne() {
	fetch("https://www.anapioficeandfire.com/api/characters/216")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayBrienne(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayBrienne(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('brienne')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.aliases[0] + '</p>' +
                  '<p>' + data.aliases[1] + '</p>';
    document.getElementsByClassName('brienne')[1].innerHTML = backOutput;
}
fetchBrienne();
function fetchTormund() {
	fetch("https://www.anapioficeandfire.com/api/characters/2024")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displayTormund(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displayTormund(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('tormund')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.aliases[0] + '</p>' +
                  '<p>' + data.titles[1] + '</p>';
    document.getElementsByClassName('tormund')[1].innerHTML = backOutput;
}
fetchTormund();
function fetchSam() {
	fetch("https://www.anapioficeandfire.com/api/characters/954")
		.then(function (result) {
			return result.json();
		})
		.then(function (res) {
			displaySam(res);
		})
		.catch(function (err) {
			console.log(err);
		});
}
function displaySam(data) {
    var frontOutput = '';
    var backOutput = '';
    frontOutput += '<h3>' + data.name + '</h3>';
    document.getElementsByClassName('sam')[0].innerHTML = frontOutput;
    backOutput += '<h3>' + data.name + '</h3>' +
                  '<p>' + data.aliases[0] + '</p>' +
                  '<p>' + data.aliases[4] + '</p>';
    document.getElementsByClassName('sam')[1].innerHTML = backOutput;
}
fetchSam();

var players = [];

var character = document.getElementsByClassName('character-inner');
function chooseSnow() {
    localStorage.setItem('name-one', 'jon snow');
    character[0].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[0].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseHodor() {
    localStorage.setItem('name-two', 'hodor');
    character[1].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[1].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseJaime() {
    localStorage.setItem('name-three', 'jaime');
    character[2].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[2].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseTyrion() {
    localStorage.setItem('name-four', 'tyrion');
    character[3].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[3].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseCersei() {
    localStorage.setItem('name-five', 'cersei');
    character[4].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[4].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseDrogo() {
    localStorage.setItem('name-six', 'drogo');
    character[5].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[5].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseRamsay() {
    localStorage.setItem('name-seven', 'ramsay');
    character[6].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[6].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseBrienne() {
    localStorage.setItem('name-eight', 'brienne');
    character[7].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[7].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseTormund() {
    localStorage.setItem('name-nine', 'tormund');
    character[8].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[8].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[9].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}
function chooseSam() {
    localStorage.setItem('name-ten', 'sam');
    character[9].style.transform = "rotateX(180deg)";
    document.getElementsByClassName('flip-card-back')[9].style.background = 'radial-gradient(circle, #f09819, #ff512f)';
    if (character[0].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[1].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[2].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[3].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[4].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[5].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[6].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[7].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
    if (character[8].style.transform === "rotateX(180deg)") {
        window.location = "board.html";
    }
}

function loadImage() {
    if (localStorage.getItem('name-one') === 'jon snow') {
        players.push({
            name: "Jon Snow",
            position: 0,
            image: "imgs/jon-snow.svg"
        });
    }
    if (localStorage.getItem('name-two') === 'hodor') {
        players.push({
            name: "Hodor",
            position: 0,
            image: "imgs/hodor.svg"
        });
    }
    if (localStorage.getItem('name-three') === 'jaime') {
        players.push({
            name: "Jaime",
            position: 0,
            image: "imgs/jaime.svg"
        });
    }
    if (localStorage.getItem('name-four') === 'tyrion') {
        players.push({
            name: "Tyrion",
            position: 0,
            image: "imgs/tyrion.svg"
        });
    }
    if (localStorage.getItem('name-five') === 'cersei') {
        players.push({
            name: "Cersei",
            position: 0,
            image: "imgs/cersei.svg"
        });
    }
    if (localStorage.getItem('name-six') === 'drogo') {
        players.push({
            name: "Drogo",
            position: 0,
            image: "imgs/drogo.svg"
        });
    }
    if (localStorage.getItem('name-seven') === 'ramsay') {
        players.push({
            name: "Ramsay",
            position: 0,
            image: "imgs/ramsay.svg"
        });
    }
    if (localStorage.getItem('name-eight') === 'brienne') {
        players.push({
            name: "Brienne",
            position: 0,
            image: "imgs/brienne.svg"
        });
    }
    if (localStorage.getItem('name-nine') === 'tormund') {
        players.push({
            name: "Tormund",
            position: 0,
            image: "imgs/tormund.svg"
        });
    }
    if (localStorage.getItem('name-ten') === 'sam') {
        players.push({
            name: "Sam",
            position: 0,
            image: "imgs/sam.svg"
        });
    }
    localStorage.clear();
}
loadImage();

function whoStarts() {
    var modal = document.getElementById('gameModal');
    var span = document.getElementsByClassName("close")[0];
    var modalCloseBtn = document.getElementById('closeGameModal');
    document.getElementById('gameMessage').innerHTML = "Roll the dice and be the first to the throne";
    document.getElementById('gameStarter').innerHTML = players[0].name + ' rolls first';
    
    modal.style.display = "block";
    
    modalCloseBtn.addEventListener("click", function(event) {
         modal.style.display = "none";
    });
    
    span.addEventListener("click", function(event) {
       modal.style.display = "none";
    
});
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
    }
});
    document.getElementById('current-turn').innerHTML = '<p id="current-turn-p">' + players[0].name + '\'s  turn to roll</p>';
    document.getElementById('current-turn-p').style.float = 'left';
    
    document.getElementById('current-turn-img-1').innerHTML = '<img src="' + players[0].image + '" id="player1-img" width="100%">';
    document.getElementById('current-turn-img-2').innerHTML = '<img src="' + players[1].image + '" id="player2-img" width="100%">';
   
    document.getElementById('player2-img').style.opacity = '0.2';
    document.getElementsByClassName('player')[0].style.zIndex = '1';
}



function rollDice() {
    var roll = Math.ceil(Math.random() * 6);
    var currentPlayer = players[currentTurn];
    currentPlayer.position += roll;
    currentTurn++;
   
    if (currentTurn >= players.length) {
        currentTurn = 0;
    }
    if (currentTurn === 1) {
        document.getElementById('current-turn-p').innerHTML = players[1].name + "\'s turn to roll";
        document.getElementById('player2-img').style.opacity = '1';
        document.getElementById('player1-img').style.opacity = '0.1';
        document.getElementById('current-turn-p').style.float = 'right';
        
    } else {
        document.getElementById('current-turn-p').innerHTML = players[0].name + "\'s turn to roll";
        document.getElementById('player1-img').style.opacity = '1';
        document.getElementById('player2-img').style.opacity = '0.1';
        document.getElementById('current-turn-p').style.float = 'left';
    }
    
    
    if (currentPlayer.position === 7) {
        currentPlayer.position = 0;
        document.getElementById('gameModal').style.display = 'block';
        document.getElementById('gameMessage').innerHTML = 'Oh no, ' + currentPlayer.name + '! You landed on tile 7, so Joffrey just killed you for fun. Go back to start.';
        document.getElementById('gameStarter').style.display = 'none';
        
    }
    if (currentPlayer.position === 15) {
        currentPlayer.position = 5;
        document.getElementById('gameModal').style.display = 'block';
        document.getElementById('gameMessage').innerHTML = 'Oh no, ' + currentPlayer.name + '! You landed on tile 15, so Daenerys Dragons ate your legs, go back to tile 5 and look for someone to carry you!';
        document.getElementById('gameStarter').style.display = 'none';
        
    }
    if (currentPlayer.position === 23) {
        currentPlayer.position = 14;
        document.getElementById('gameModal').style.display = 'block';
        document.getElementById('gameMessage').innerHTML = 'Oh no, ' + currentPlayer.name + '! You landed on tile 23, that is no good, so Melisandre used her fire magic to send you to tile 14.';
        document.getElementById('gameStarter').style.display = 'none';
        
    }
    if (currentPlayer.position === 16) {
        currentPlayer.position = 22;
        document.getElementById('gameModal').style.display = 'block';
        document.getElementById('gameMessage').innerHTML = 'Good job ' + currentPlayer.name + '! You found a boat on tile 16, take the boat to tile 22!';
        document.getElementById('gameStarter').style.display = 'none';
        
    }
    if (currentPlayer.position === 30) {
        currentPlayer.position = 0;
        document.getElementById('gameModal').style.display = 'block';
        document.getElementById('gameMessage').innerHTML = 'Oh no, ' + currentPlayer.name + '! You got killed by White Walkers on tile 30. Go back to start';
        document.getElementById('gameStarter').style.display = 'none';
        
    }
    if (currentPlayer.position >= 31) {
        sessionStorage.setItem('name', currentPlayer.name);
        window.location = "success.html";
        
    }
    if (roll === 6) {
        var rollSixModal = document.getElementById('rollSixModal')
        var closeBtn = document.getElementsByClassName("close")[1];
        var closeRollSixModal = document.getElementById('closeRollSixModal');
        rollSixModal.style.display = 'block';
        document.getElementById('rollSixMessage').innerHTML = 'Congratulations! ' + currentPlayer.name + ' rolled a six and can take another turn.';
        
        closeRollSixModal.addEventListener("click", function(event) {
         rollSixModal.style.display = "none";
    });
    
    closeBtn.addEventListener("click", function(event) {
       rollSixModal.style.display = "none";
    
});
    window.addEventListener("click", function(event) {
        if (event.target == rollSixModal) {
        rollSixModal.style.display = "none";
    }
});
        
        
        if (currentTurn === 1) {
            currentTurn--;
            document.getElementById('current-turn-p').innerHTML = players[0].name + "\'s turn to roll";
            document.getElementById('current-turn-p').style.float = 'left';
            document.getElementById('player1-img').style.opacity = '1';
        document.getElementById('player2-img').style.opacity = '0.1';
        } else {
            currentTurn++;
            document.getElementById('current-turn-p').innerHTML = players[1].name + "\'s turn to roll";
            document.getElementById('current-turn-p').style.float = 'right';
            document.getElementById('player2-img').style.opacity = '1';
        document.getElementById('player1-img').style.opacity = '0.1';
        }
        
    }
    if (roll === 1) {
        document.getElementById('dice-side1').style.display = 'block';
        document.getElementById('dice-side2').style.display = 'none';
        document.getElementById('dice-side3').style.display = 'none';
        document.getElementById('dice-side4').style.display = 'none';
        document.getElementById('dice-side5').style.display = 'none';
        document.getElementById('dice-side6').style.display = 'none';
    }
    if (roll === 2) {
        document.getElementById('dice-side1').style.display = 'none';
        document.getElementById('dice-side2').style.display = 'block';
        document.getElementById('dice-side3').style.display = 'none';
        document.getElementById('dice-side4').style.display = 'none';
        document.getElementById('dice-side5').style.display = 'none';
        document.getElementById('dice-side6').style.display = 'none';
    }
    if (roll === 3) {
        document.getElementById('dice-side1').style.display = 'none';
        document.getElementById('dice-side2').style.display = 'none';
        document.getElementById('dice-side3').style.display = 'block';
        document.getElementById('dice-side4').style.display = 'none';
        document.getElementById('dice-side5').style.display = 'none';
        document.getElementById('dice-side6').style.display = 'none';
    }
    if (roll === 4) {
        document.getElementById('dice-side1').style.display = 'none';
        document.getElementById('dice-side2').style.display = 'none';
        document.getElementById('dice-side3').style.display = 'none';
        document.getElementById('dice-side4').style.display = 'block';
        document.getElementById('dice-side5').style.display = 'none';
        document.getElementById('dice-side6').style.display = 'none';
    }
    if (roll === 5) {
        document.getElementById('dice-side1').style.display = 'none';
        document.getElementById('dice-side2').style.display = 'none';
        document.getElementById('dice-side3').style.display = 'none';
        document.getElementById('dice-side4').style.display = 'none';
        document.getElementById('dice-side5').style.display = 'block';
        document.getElementById('dice-side6').style.display = 'none';
    }
    if (roll === 6) {
        document.getElementById('dice-side1').style.display = 'none';
        document.getElementById('dice-side2').style.display = 'none';
        document.getElementById('dice-side3').style.display = 'none';
        document.getElementById('dice-side4').style.display = 'none';
        document.getElementById('dice-side5').style.display = 'none';
        document.getElementById('dice-side6').style.display = 'block';
    }
    
    displayBoard();
}
 

var currentTurn = 0;
var width = 8;
var height = 4;
var board = [];
var position = 0;
var y, x;

for (y = 0; y < height; y++) {
    var row = [];
    board.push(row);
    for (x = 0; x < width; x++) {
        row.push({x: x, y: y, position: position});
        position++;
    }
}

var boardSize = 100;
function displayBoard() {
    var output = '';
    board.forEach(function (row) {
        row.forEach(function (tile) {
            output +=
                '<div class="tile" style="top:' + tile.y * boardSize + 'px; left:' + tile.x * boardSize + 'px;"><p class="counter">' + tile.position + '</p></div>';
        });
    });
  
    players.forEach(function (player) {
        board.forEach(function (row) {
            row.forEach(function (tile) {
                if (tile.position === player.position) {
                    output +=
                        '<div class="player" style="top:' + tile.y * boardSize + 'px; left:' + tile.x * boardSize + 'px; background-image: url(' + player.image + ');"></div>';
                    
                    
                }
            });
        });
    });
    
    
    document.getElementById("board").innerHTML = output;
    
    document.getElementsByClassName('counter')[0].style.margin = '5px 0px 0px 0px';
    document.getElementsByClassName('counter')[0].style.fontSize = '28px';
    document.getElementsByClassName('counter')[0].innerHTML = "Start";
    document.getElementsByClassName('counter')[31].style.margin = '55px 0px 0px 0px';
    document.getElementsByClassName('counter')[31].style.fontSize = '28px';
    document.getElementsByClassName('counter')[31].style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementsByClassName('counter')[31].innerHTML = "Finish";
    var steps = document.getElementsByClassName('tile');
    var i;
    for (i = 1; i < 8; i++) {
        steps[i].style.backgroundImage = "url('imgs/grass-2.jpg')";
        steps[i].style.backgroundSize = "cover";
        steps[i].style.backgroundPosition = "bottom";
        
    }
    var j;
    for (j = 8; j < 16; j++) {
        steps[j].style.backgroundImage = "url('imgs/sand.jpg')";
        steps[j].style.backgroundSize = "cover";
       
    }
    var z;
    for (z = 16; z < 24; z++) {
        steps[z].style.backgroundImage = "url('imgs/ocean.jpg')";
        steps[z].style.backgroundSize = "cover";
    }
    var p;
    for (p = 24; p < 31; p++) {
        steps[p].style.backgroundImage = "url('imgs/ice-trees.jpg')";
        steps[p].style.backgroundSize = "cover";
        steps[p].style.backgroundPosition = "center";
    }
    
        steps[7].style.backgroundImage = "url('imgs/fire-1.jpg')";
        steps[7].style.backgroundSize = "cover";
        steps[7].style.backgroundPosition = "center center";
        steps[15].style.backgroundImage = "url('imgs/fire-1.jpg')";
        steps[15].style.backgroundSize = "cover";
        steps[15].style.backgroundPosition = "center center";
        steps[23].style.backgroundImage = "url('imgs/fire-1.jpg')";
        steps[23].style.backgroundSize = "cover";
        steps[23].style.backgroundPosition = "center center";
        steps[30].style.backgroundImage = "url('imgs/mountain.jpg')";
        steps[30].style.backgroundSize = "cover";
        
        steps[31].style.backgroundImage = "url('imgs/iron-throne-success.svg')";
        steps[31].style.backgroundSize = "cover";
        steps[31].style.backgroundPosition = "center center";
        steps[31].style.backgroundColor = "white";
        steps[16].style.backgroundImage = "url('imgs/boat.jpg')";
        steps[16].style.backgroundSize = "cover";
        steps[16].style.backgroundPosition = "70% center";
    
    
}

displayBoard();



