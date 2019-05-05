/*
ПРАВИЛА ИГРЫ:

- В игре 2 игрока. Кубик бросают по очереди
- Игрок бросает кубик столько раз, сколько пожелает. Каждое выброшенное очко суммируется с предыдущим
- Но если игрок выбрасывает 1 очко, то вс его сумма сгорает. После этого, очередь переходит к другому игроку
- Игрок может нажать на кнопку 'УДЕРЖИВАТЬ'. Это означает, что игрок фиксирует сумму очков, которую он набрал и передают очередь другому игроку. После этого, другой игрок бросает кубик
- Тот, кто первый набирает 20 очков выиграл

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //Генерируем случайное целое число от 1 до 6
        dice = Math.floor(Math.random() * 6) + 1;
        //Отображаем соответствующее изображение
        diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //Суммируем общее количество очков, если случайное число не равно, или передаем очередь другому игроку
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Проверка условия выигрыша
        if(scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Передаём очередь другому игроку
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    //Устанавливаем соответствующие классы для применения стилей, которые позволят интуитивно понять пользвателю, чья очередь наступила
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //Убираем изображение кубика из DOM
    document.querySelector('.dice').style.display = 'none';
}
//При нажатии на кнопку "Новая игра" сбрасываем все значения с помощью вызова функции init()
document.querySelector('.btn-new').addEventListener('click', function() {
    init();
})
//Функция инициализации
function init() {
    //Устанавливаем начальные значения
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    //Устанавливаем начальные значения в UI
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}