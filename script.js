var gamecontainer = document.querySelector('.gamecontainer')
var gamestart = document.querySelector('.gamestart')
var total=0;

// var startbtn = document.querySelector('.startbtn')

// startbtn.addEventListener('click',()=>{
//     console.log('button clicked')
// })

// voice.addEventListener('change', (e) => {
//     speechSynthesis.cancel();
//     const selectedVoice = e.target.value;
//     speech.voice = voices[selectedVoice];
//   });

// startbtn.addEventListener()
document.onkeydown = function (e) {
    console.log(e.keyCode)

    if (e.keyCode == 38) {
        var dino = document.querySelector('.dino')
        var gamescore = document.getElementById('gamescore')
        
        console.log(gamescore)
        var value = gamescore.innerHTML;
        // var value1 = gamescore1.innerHTML;
        ++value;
        // ++value1
        console.log(value)
        total = value
        dino.classList.add('animatedino')

        setTimeout(() => {
            dino.classList.remove('animatedino')
            document.getElementById('gamescore').innerHTML = value;
            // document.getElementById('mgamescore').innerHTML = value1;
            if(gamescore>5) {
                console.log('jefyusydf',gamescore)
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
        document.getElementById('total').innerHTML =total;
        obstacle.classList.remove('obstacleani')

        // setTimeout(() => {
        //     gamestart.style.visibility = "hidden"
        // }, 100);
    }
}, 100);