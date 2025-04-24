const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");
const spinnerEl = document.querySelector(".spinner");
const mainEl = document.querySelector(".main-page");
const qoutebox = document.querySelector(".quote-box");
function addToDom(obj) {
    quoteEl.textContent = obj.quote;
    authorEl.textContent = obj.author;
}
const showSpinner = ()=>spinnerEl.classList.add("spinner-active");
const hideSpinner = ()=>spinnerEl.classList.remove("spinner-active");
function generateQuote() {
    showSpinner();
    const qoute = fetch("https://qapi.vercel.app/api/random").then((res)=>{
        // res contain a stream of object
        return res.json(); // jsonfy it;
    }).then((response)=>{
        addToDom(response);
    }).catch((err)=>{}).finally(hideSpinner);
}
/************************************************* */ quoteBtn.addEventListener("click", generateQuote);
document.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") generateQuote();
});

//# sourceMappingURL=random-quote-generation.579125c3.js.map
