const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");

function addToDom(obj) {
  quoteEl.textContent = obj.quote;
  authorEl.textContent = obj.author;
}

function generateQuote() {
  const qoute = fetch("https://qapi.vercel.app/api/random")
    .then((res) => {
      // res contain a stream of object
      return res.json(); // jsonfy it;
    })
    .then((response) => {
      addToDom(response);
    })
    .catch((err) => {
      console.log("can not load");
    });
}

/************************************************* */

quoteBtn.addEventListener("click", generateQuote);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Enter") generateQuote;
});
