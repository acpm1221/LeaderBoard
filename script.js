let array = [];

function addPlayer(event) {
    event.preventDefault();

    const playerList = document.getElementById('player-list');

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const country = document.getElementById('country').value;

    let score = parseInt(document.getElementById('score').value, 10);

    const player = {
        name: `${firstName} ${lastName}`,
        country: country,
        score: score
    };

    array.push(player);

    const liEl = document.createElement('div');
    const nameContent = document.createElement('div');
    const date = document.createElement('span');
    const countryContent = document.createElement('div');
    const currentScore = document.createElement('div');
    const buttonElement = document.createElement('button');
    const increase = document.createElement('button');
    const decrease = document.createElement('button');

    date.classList.add('span')

    currentScore.innerText = score;
    countryContent.innerText = country.toUpperCase();
    nameContent.innerText = player.name.toUpperCase();
    date.innerText = new Date();
    nameContent.style.display = 'flex';  // Add this line
    nameContent.style.flexDirection = 'column';


    increase.innerText = '+5';
    increase.classList.add('action-button'); // New class for increase button

    decrease.innerText = '-5';
    decrease.classList.add('action-button'); // New class for decrease button

    increase.addEventListener("click", function (e) {
        player.score += 5;
        player.score = Math.min(player.score, 100);
        currentScore.textContent = player.score;
    });

    decrease.addEventListener("click", function (e) {
        player.score = Math.max(0, player.score - 5);
        currentScore.textContent = player.score;
    });

    buttonElement.innerText = 'Delete';

    buttonElement.addEventListener("click", function (e) {
        const index = array.indexOf(player);
        if (index !== -1) {
            array.splice(index, 1);
            refreshList();
        }
    });

    liEl.appendChild(nameContent);
    nameContent.appendChild(date);
    // liEl.appendChild(date);  // Move this line here
    liEl.appendChild(countryContent);
    liEl.appendChild(currentScore);
    liEl.appendChild(buttonElement);
    liEl.appendChild(increase);
    liEl.appendChild(decrease);

    liEl.classList.add('player-list1');
    buttonElement.classList.add('delete-button');
    playerList.append(liEl);

    refreshList();
}

function refreshList() {
    const playerList = document.getElementById('player-list');
    array.sort((player1, player2) => player2.score - player1.score);
    playerList.innerHTML = '';

    for (let index = 0; index < array.length; index++) {
        const player = array[index];

        const liEl = document.createElement('div');
        const nameContent = document.createElement('div');
        const date = document.createElement('span');
        const countryContent = document.createElement('div');
        const currentScore = document.createElement('div');
        const buttonElement = document.createElement('button');
        const increase = document.createElement('button');
        const decrease = document.createElement('button');
        date.classList.add('span')

        currentScore.innerText = player.score;
        countryContent.innerText = player.country.toUpperCase();
        nameContent.innerText = player.name.toUpperCase();
        date.innerText = new Date();
        nameContent.style.display = 'flex';  // Add this line
        nameContent.style.flexDirection = 'column';

        increase.innerText = '+5';
        increase.classList.add('action-button'); // New class for increase button

        decrease.innerText = '-5';
        decrease.classList.add('action-button'); // New class for decrease button

        increase.addEventListener("click", function (e) {
            player.score += 5;
            player.score = Math.min(player.score, 100);
            currentScore.textContent = player.score;
        });

        decrease.addEventListener("click", function (e) {
            player.score = Math.max(0, player.score - 5);
            currentScore.textContent = player.score;
        });

        buttonElement.innerText = 'Delete';

        buttonElement.addEventListener("click", function (e) {
            const index = array.indexOf(player);
            if (index !== -1) {
                array.splice(index, 1);
                refreshList();
            }
        });

        liEl.appendChild(nameContent);
        nameContent.appendChild(date);
        liEl.appendChild(countryContent);
        liEl.appendChild(currentScore);
        liEl.appendChild(buttonElement);
        liEl.appendChild(increase);
        liEl.appendChild(decrease);

        liEl.classList.add('player-list1');
        buttonElement.classList.add('delete-button');
        playerList.append(liEl);
    }
}