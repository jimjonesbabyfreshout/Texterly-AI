import { apiKey } from "./config.js";
const get = (id) => document.getElementById(id)
const textAreaEl = get("text-area");
const processBtn = get("process-btn");
const characterCountEl = get("character-count")
const wordCountEl = get("word-count") 

function editText() {
  if (textAreaEl.value) {
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
        n: 1,
        temperature: 0.2,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        textAreaEl.value = data.choices[0].text
        countCharactersAndWords(textAreaEl.value);
      })
      .catch((error) => console.error(error));
  }
}

function countCharactersAndWords(textarea) {
  // Get the textarea value and remove spaces
  console.log(textarea);
  const textareaValue = textarea.replace(/\s/g, "");
  console.log(textareaValue);

  // Count the number of characters
  const charCount = textareaValue.length;
  console.log(charCount);

  // Count the number of words
  const wordCount = textarea
    .split(/[\s,."'-]+/)
    .filter((word) => word !== "").length;
  console.log(wordCount);
  // Return an object with the character and word counts
  characterCountEl.textContent = charCount
  wordCountEl.textContent = wordCount
}



processBtn.addEventListener("click", editText);
