const container = document.getElementById("joke-container");
const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

// uso l'url della api e lo inserisco in una variabile, così mi risulta più comodo fare il fetch senza un copia e incolla nella funzione.
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit";

btn.addEventListener("click", () => {
  // provvedo a fare il fetch. non voglio che la funzione parta all'apertura dell'applicazione, per questo l'ho messa nell'event listener.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // dato che questa api ha sia un Joke singolo che un Joke con domanda e risposta, creo un if/else per determinarne il contenuto.
      if (!data.joke) {
        joke.innerHTML = `${data.setup} ${data.delivery}`;
      } else {
        joke.innerHTML = `${data.joke}`;
      }
    });
});

// semplice e veloce! :)
