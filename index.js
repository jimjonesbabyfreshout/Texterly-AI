import { apiKey } from './config.js'

console.log(apiKey);
const textAreaEl = document.getElementById("text-area");
const processBtn = document.getElementById("process-btn")

function editText() {
  fetch("https://api.openai.com/v1/edits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-edit-001",
      input: `${textAreaEl.value}`,
      instruction: "Fix all of the grammar, punctuation and spelling mistakes",
      n: 5,
      temperature: 0.2,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

processBtn.addEventListener('click', editText)