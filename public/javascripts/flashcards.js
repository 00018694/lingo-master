const words = !window.vocabs ? [] : JSON.parse(window.vocabs);
let current = 0;

function nextCard() {
  if (current >= words.length) current = 0;
  document.getElementById('word').textContent = words[current].word;
  document.getElementById('translation').textContent = words[current].translation;
  current++;
}

document.addEventListener('DOMContentLoaded', nextCard);
