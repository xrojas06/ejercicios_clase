function tossCoin() {
    return Math.random() < 0.5 ? 1 : 2;
}


function win(balance, bet) {
    balance += bet;
    bet *= 2;
    return [balance, bet];
}


function lose(balance, bet) {
    balance -= bet;
    return [balance, bet];
}


function playCoinToss() {
    const playerName = prompt("Escribe tu nombre:");
    let balance = parseFloat(prompt("Escribe el valor con el que deseas empezar a jugar"));
    let bet = 0;

    while (balance > 0) {
        alert(`Balance actual para ${playerName}: $${balance}`);
        bet = parseFloat(prompt("Escribe cuanto quieres apostar:"));

        if (bet > balance) {
            alert("No puedes apostar más de lo que tienes actualmente.");
            continue;
        }

        const playerChoice = parseFloat(prompt("Escribe '1' para jugar con cara o '2' para jugar con sello:"));
        if (playerChoice !== 1 && playerChoice !== 2) {
            alert("Elección inválida. Por favor escribe '1' para cara o '2' para sello.");
            continue;
        }

        const result = tossCoin();
        alert(`Resultado del lanzamiento: ${result}`);

        if (result === playerChoice) {
            [balance, bet] = win(balance, bet);
            alert(`Ganaste $${bet} en este lanzamiento.`);
        } else {
            [balance, bet] = lose(balance, bet);
            alert(`Perdiste $${bet} en este lanzamiento.`);
        }

        if (balance <= 0){
            break
        }
        const continuePlaying = confirm(`¿Quieres seguir jugando? Tienes ${balance}`);
        if (!continuePlaying) {
            alert(`Balance final $${balance}.`);
            break;
        }
    }

    if (balance >0){
    alert(`Gracias por jugar.`);}
    else{
        alert(`No tienes más dinero. Gracias por jugar.`)
    }
}


playCoinToss();



