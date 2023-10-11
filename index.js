import words from "./words1.json" assert { type: "json" };
import words2 from "./words2.json" assert { type: "json" };
let inputEl = document.querySelector(".input");
let wordArr = [];
let generateBtn = document.querySelector(".generateWords");
let doesThisWordContainTheLetter = false;
generateBtn.addEventListener("click", () => {
  let regEx = new RegExp(`^[${inputEl.value}-]*$`, "i");
  generateBtn.disabled = true;
  generateBtn.textContent = "Please wait...";
  try {
    generateBtn.disabled = false;
    generateBtn.textContent = "Get Words";
    let i = 0;
    for (const key in words) {
      if (regEx.test(key)) {
        if (inputEl.value.length >= key.length) {
          doesThisWordContainTheLetter = true;
          wordArr.push(key + ": " + words[key]);
        }
      }
    }

    for (const key in words2) {
      if (regEx.test(key)) {
        if (inputEl.value.length >= key.length) {
          doesThisWordContainTheLetter = true;
          wordArr.push(key + ": " + words2[key]);
        }
      }
    }
    for (let i = wordArr.length; i > 1; i--) {
      for (let j = 0; j < i; j++) {
        if (wordArr[j] > wordArr[j + 1]) {
          //swapping values
          let currentValue = wordArr[j];
          wordArr[j] = wordArr[j + 1];
          wordArr[j + 1] = currentValue;
        }
      }
    }
    let container = document.querySelector(".container");

    if (doesThisWordContainTheLetter) {
      container.innerHTML = `
          <div class="words-container">
            <p class="words-found"><span>Found</span> ${
              wordArr.length > 1 ? `${wordArr.length} words` : "1 word"
            } </p>
            <p class="info">
              For better understanding of the word displayed, Please use a
              dictionary.
            </p>
            <p class="rate">If you find this app OK, do rate it.</p>
            <br />
            <br />
            <h2 class="heading">
              Words that can be made with <span id="letters">${
                inputEl.value
              }</span>
            </h2>
            <br />
            ${wordArr.map((word) => `<p class="word">${word}</p>`)}
            <a class="link-btn" href="index.html" class="previous">Go Back</a>
          </div>

        `;
    } else alert("no word was found");
  } catch (err) {
    console.log(err);
  }
});
