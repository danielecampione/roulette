document.getElementById('spinButton').addEventListener('click', function() {
    const numbers = document.querySelectorAll('.number');
    const ball = document.getElementById('ball');
    const result = document.getElementById('result');
    
    // Aggiungi la classe per l'animazione
    result.classList.add('spinning');
    
    // Genera un numero casuale tra 0 e 36
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const selectedNumber = numbers[randomIndex].dataset.number;

    // Posiziona la pallina sul numero estratto
    const selectedElement = numbers[randomIndex];
    const rect = selectedElement.getBoundingClientRect();
    const wheelRect = document.querySelector('.roulette-wheel').getBoundingClientRect();

    ball.style.top = `${rect.top - wheelRect.top + rect.height / 2}px`;
    ball.style.left = `${rect.left - wheelRect.left + rect.width / 2}px`;

    // Determina il colore, la parità e l'intervallo del numero estratto
    let color, parity, range;
    if (selectedNumber == 0) {
        color = 'verde';
        parity = 'n/a';
        range = 'n/a';
    } else {
        color = selectedElement.classList.contains('red') ? 'rosso' : 'nero';
        parity = selectedNumber % 2 === 0 ? 'pari' : 'dispari';
        range = selectedNumber <= 18 ? 'basso' : 'alto';
    }

    // Mostra il risultato dopo l'animazione
    setTimeout(function() {
        result.textContent = `Numero estratto: ${selectedNumber} (${color}, ${parity}, ${range})`;
        result.classList.remove('spinning'); // Rimuovi la classe dopo l'animazione
    }, 1000); // Durata dell'animazione di un secondo
});
