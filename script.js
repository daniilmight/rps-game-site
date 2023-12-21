const output = document.getElementById('output');
function resetComputerChoice() {
    const computerButtons = document.querySelectorAll('.disabled-button');
    computerButtons.forEach(button => {
      button.classList.remove('enlarge');
    });
  }
  
// Обработчик нажатия на кнопку игрока
function handleButtonClick(choice) {
    // Сброс увеличения при следующем выборе игрока
    resetComputerChoice();
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Применение анимации к выбору компьютера
    const computerButton = document.getElementById(`computer-${computerChoice}`);
    computerButton.classList.add('enlarge');

    let result = '';
    if (choice === computerChoice) {
        result = "Ничья!";
    } else if (
        (choice === "rock" && computerChoice === "scissors") ||
        (choice === "paper" && computerChoice === "rock") ||
        (choice === "scissors" && computerChoice === "paper")
    ) {
        result = "Ты победил!";
    } else {
        result = "Компьютер победил!";
    }

    document.getElementById('output').innerText = result;
}