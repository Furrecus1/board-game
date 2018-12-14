function getWinner() {
    var winnerImg = document.getElementById('winner-img');
    document.getElementById('winner').innerHTML = 'Congratulation! ' + sessionStorage.getItem('name') + ', You won the IRON THRONE!';
    if (sessionStorage.getItem('name') === 'Jon Snow') {
         winnerImg.style.backgroundImage = "url('imgs/jon-snow.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Hodor') {
         winnerImg.style.backgroundImage = "url('imgs/hodor.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Jaime') {
         winnerImg.style.backgroundImage = "url('imgs/jaime.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Tyrion') {
         winnerImg.style.backgroundImage = "url('imgs/tyrion.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Cersei') {
         winnerImg.style.backgroundImage = "url('imgs/cersei.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Drogo') {
         winnerImg.style.backgroundImage = "url('imgs/drogo.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Ramsay') {
         winnerImg.style.backgroundImage = "url('imgs/ramsay.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Brienne') {
         winnerImg.style.backgroundImage = "url('imgs/brienne.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Tormund') {
         winnerImg.style.backgroundImage = "url('imgs/tormund.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
    if (sessionStorage.getItem('name') === 'Sam') {
         winnerImg.style.backgroundImage = "url('imgs/sam.svg')";
         winnerImg.style.backgroundSize = "cover";
     }
};

