
document.getElementById("startBtn").addEventListener("click", function () {
    console.log(questions);
    var intro = document.getElementById('introText')
    intro.style.display = 'none';

    var gameTime = setInterval(myTimer, 1000);
    var counter = 10
    function myTimer() {
        console.log(counter);
        var timer = document.getElementById("timer")
        timer.innerHTML = counter;
        counter--
        if (counter === 0) {
            stopTimer();
        }
            function stopTimer() {
                clearInterval(gameTime);
                
        }
    }


});