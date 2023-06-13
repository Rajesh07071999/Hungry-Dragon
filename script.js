var gamecontainer = document.querySelector('.gamecontainer')
console.log(gamecontainer)
var gamestart = document.querySelector('.gamestart')

var total = 0;

function restart() {
    location.reload();
}

document.onkeydown = function (e) {
    console.log(e.keyCode)

    if (e.keyCode == 32) {
        var dino = document.querySelector('.dino')
        var gamescore = document.getElementById('gamescore')

        var value = gamescore.innerHTML;
        value++;
        total = value
        let previousScore = JSON.parse(localStorage.getItem("HighScore"))

        if (total >= previousScore) {
            localStorage.setItem("HighScore", JSON.stringify(total))
        }
        else {
            console.log("khelne lago");
        }

        if (total>=10) {
            obstacle.classList.add('obstacleani2')
           
        }
        else if (total>=20){
            obstacle.classList.add('obstacleani3')
        }
        else if (total>=30){
            obstacle.classList.add('obstacleani4')
        }
        else if (total>=50){
            obstacle.classList.add('obstacleani5')
        }
        else if (total>=80){
            obstacle.classList.add('obstacleani6')
        }
        else if (total>=90){
            obstacle.classList.add('obstacleani7')
        }
        else if (total>=100){
            obstacle.classList.add('obstacleani8')
        }
        else if (total>=150){
            obstacle.classList.add('obstacleani9')
        }

        dino.classList.add('animatedino')

        setTimeout(() => {
            dino.classList.remove('animatedino')
            document.getElementById('gamescore').innerHTML = value;
            document.getElementById('highscore').innerHTML = previousScore;
        }, 700);

    }

}

setInterval(() => {
    dino = document.querySelector('.dino')
    obstacle = document.querySelector('.obstacle')
    gameover = document.querySelector('.gameover')
    score = document.querySelector('.score')
    music = document.querySelector('.music')
    stopmusic = document.querySelector('.stopmusic')
    

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)

    if (offsetX < 95 && offsetY < 53) {
        gameover.style.visibility = "visible"
        stopmusic.classList.remove('music')
        score.style.visibility = "hidden"
        document.getElementById('gamescore').style.display = "none";
        document.getElementById('total').innerHTML = total;
        obstacle.classList.remove('obstacleani')
        obstacle.classList.remove('obstacleani2')
        obstacle.classList.remove('obstacleani3')
        obstacle.classList.remove('obstacleani4')
        obstacle.classList.remove('obstacleani5')
        obstacle.classList.remove('obstacleani6')
        obstacle.classList.remove('obstacleani7')
        obstacle.classList.remove('obstacleani8')
        let previousScore = JSON.parse(localStorage.getItem("HighScore"))
        
        dino.classList.remove('animatedino')
    }

}, 100);