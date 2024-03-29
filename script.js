const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

document.addEventListener('DOMContentLoaded', function() { 
  generateJoke();
});

jokeBtn.addEventListener('click', generateJoke)

// USING ASYNC/AWAIT application/json'
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com/', config)
//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }

//// USING ASYNC/AWAIT application/json'
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'text/plain',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com/', config)
//   const data = await res.text()

//   jokeEl.innerHTML = data
// }

// USING .then()
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com/error', config)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
    .catch(error => {
      console.error('Error:', error);
      console.log(error);
      jokeEl.innerHTML = error
    });
    
}