function endevinaNumero() {
    let numeroAleatori = Math.floor(Math.random() * 10);
  
    let intents = 3;
  
    while (intents > 0) {
      let intent = parseInt(prompt(`Tens ${intents} intents. Endevina el número entre 1 i 10:`));
  
      if (intent === numeroAleatori) {
        alert("Has encertat! El número és " + numeroAleatori);
        return;
      } else if (intent > numeroAleatori) {
        alert("El número és més petit.");
      } else {
        alert("El número és més gran.");
      }
  
      intents--;
  
      if (intents === 0) {
        alert("Has esgotat els intents. El número era " + numeroAleatori);
      }
    }
  }
  
  endevinaNumero();
  