async function generate() {
  const keyword = document.getElementById('keywordInput').value;

  // Call the ChatGPT API to get a random fact based on the keyword
  const chatGptResponse = await fetch('YOUR_CHATGPT_API_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_CHATGPT_API_KEY',
    },
    body: JSON.stringify({ prompt: keyword }),
  });
  const chatGptData = await chatGptResponse.json();
  const fact = chatGptData.choices[0].text.trim();

  // Call the DALL-E API to get a random image based on the keyword
  const dallEResponse = await fetch('YOUR_DALL_E_API_URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_DALL_E_API_KEY',
    },
    body: JSON.stringify({ text: keyword }),
  });
  const dallEData = await dallEResponse.json();
  const imageUrl = dallEData.data.url;

  // Display the generated fact and image on the webpage
  const factElement = document.getElementById('fact');
  const pictureElement = document.getElementById('picture');
  factElement.innerHTML = `<p>${fact}</p>`;
  pictureElement.innerHTML = `<img src="${imageUrl}" alt="Generated Picture">`;
}
