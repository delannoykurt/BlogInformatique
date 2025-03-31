document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    let countdown = 10;
    let timerElement = document.getElementById("timer");

    let interval = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            document.querySelector(".profil-user").style.animation = "none";
            timerElement.style.display = "none";
        }
    }, 1000);

    /**
        Stop scaling animation after 30 seconds
    **/
    let stopCountdown = 30;
    let stopScale = setInterval(() => {
        stopCountdown--;

        if (stopCountdown <= 0) {
            clearInterval(stopScale);

            // Sélectionner tous les liens et stopper l'animation
            document.querySelectorAll('.link').forEach(link => {
                link.style.animationPlayState = "none";
            });
        }
    }, 1000);
});
