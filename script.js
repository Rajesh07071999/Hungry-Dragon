var gamecontainer = document.querySelector('.gamecontainer')
var gamestart = document.querySelector('.gamestart')
var total = 0;

document.onkeydown = function (e) {
    console.log(e.keyCode)

    if (e.keyCode == 32) {
        var dino = document.querySelector('.dino')
        var gamescore = document.getElementById('gamescore')

        console.log(gamescore)
        var value = gamescore.innerHTML;
        ++value;
        console.log(value)
        total = value
        dino.classList.add('animatedino')

        setTimeout(() => {
            dino.classList.remove('animatedino')
            document.getElementById('gamescore').innerHTML = value;
            if (gamescore > 5) {
                console.log('jefyusydf', gamescore)
                document.getElementById('gamescore').style.color = "red";

            }
        }, 700);

    }

}
setInterval(() => {
    dino = document.querySelector('.dino')
    obstacle = document.querySelector('.obstacle')
    gameover = document.querySelector('.gameover')
    score = document.querySelector('.score')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)

    if (offsetX < 95 && offsetY < 53) {
        gameover.style.visibility = "visible"
        score.style.visibility = "hidden"
        document.getElementById('gamescore').style.display = "none";
        document.getElementById('total').innerHTML = total;
        obstacle.classList.remove('obstacleani')
    }
}, 100);