const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);
})

const getWordInfo = async (word) => {
   const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   const data = await response.json();
   console.log(data)

   try {
    resultDiv.innerHTML = `
    <h1>Word : ${data[0].word}</h1>
    <p><strong>Parts of Speech:</strong>${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning :</strong>${data[0].meanings[0].definitions[0].definition}</p>
    <p> <strong>Synonyms :</strong>${data[0].meanings[0].synonyms ? "Not found" : data[0].meanings[0].synonyms }</p>
    <p><strong>Antonyms :</strong>${data[0].meanings[0].antonyms ? "Not Found" : data[0].meanings[0].antonyms}</p>
 
    `
    
   } catch (error) {
      
    resultDiv.innerHTML = `
    <h1>Word : ${word}</h1>
    <p>Sorry, no results found for the word.</p>
    `
   }
   

   
}