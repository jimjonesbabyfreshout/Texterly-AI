const apiKey = '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'

fetch("https://api.openai.com/v1/edits", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: "text-davinci-edit-001",
    input: "Hllo Keith wht happned?",
    instruction: "Fix all of the grammar, punctuation and spelling mistakes",
    n: 5,
    temperature: 0.2,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));