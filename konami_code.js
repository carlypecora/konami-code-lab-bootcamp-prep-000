
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
]

function init() {
  const secretCode = codes.join()
  const secretCodeLength = secretCode.length;
  
  let enteredCode = [];
  
  window.addEventListener('keydown', (e) => {
    enteredCode.push(e.key);

    enteredCode.splice(-secretCodeLength -1, enteredCode.length - secretCodeLength);

    if(enteredCode.join().includes(secretCode) === true){
        alert('Congratulations')
    }
  });
}

init();