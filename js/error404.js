const buttons = document.querySelectorAll('.btn');
const resultDiv = document.querySelector('.result');
const restartButton = document.querySelector('.restart-button');

const choices = ['steen', 'blad', 'schaar'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(userChoice, computerChoice);
        resultDiv.textContent = `Jij koos ${userChoice}, de computer koos ${computerChoice}. ${result}`;
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Gelijkspel!';
    } else if ((userChoice === 'steen' && computerChoice === 'schaar') ||
               (userChoice === 'blad' && computerChoice === 'steen') ||
               (userChoice === 'schaar' && computerChoice === 'blad')) {
        return 'Jij wint!';
    } else {
        return 'Computer wint!';
    }
}

restartButton.addEventListener('click', () => {
    resultDiv.textContent = '';
});
