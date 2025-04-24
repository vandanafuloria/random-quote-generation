const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");
function addToDom(obj) {
    quoteEl.textContent = obj.quote;
    authorEl.textContent = obj.author;
}
function generateQuote() {
    const qoute = fetch("https://qapi.vercel.app/api/random").then((res)=>{
        console.log("wainting");
        // res contain a stream of object
        return res.json(); // jsonfy it;
    }).then((response)=>{
        addToDom(response);
    }).catch((err)=>{
        console.log("can not load");
    });
}
quoteBtn.addEventListener("click", generateQuote);

//# sourceMappingURL=random-quote-generation.579125c3.js.map
