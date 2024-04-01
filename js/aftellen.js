class Timer {
    constructor(targetDate, targetElementId) {
        this.targetDate = new Date(targetDate);
        this.targetElement = document.getElementById(targetElementId);
    }

    start() {
        this.updateTimer();
        this.timerInterval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    stop() {
        clearInterval(this.timerInterval);
    }

    updateTimer() {
        const currentDate = new Date();
        const difference = this.targetDate - currentDate;

        if (difference <= 0) {
            this.stop();
            this.targetElement.innerHTML = "We zijn geopend!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        this.targetElement.innerHTML = ` ${days} dagen <br>${hours} uren <br>${minutes} minuten <br> ${seconds} seconden`;
    }
}

// Voorbeeldgebruik:
const countdownTimer = new Timer("2024-04-15T10:00:00", "countdown");
countdownTimer.start();
