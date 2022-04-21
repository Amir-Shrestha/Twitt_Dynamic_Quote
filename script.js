const api = "https://type.fit/api/quotes";
const newQuoteBtn = document.getElementById("quoteBtn")
const text = document.getElementById("quote")
const author = document.getElementById("author")
const twitt = document.getElementById("twitt")
let quote = "";

function randomNumberGenerate(){
    return Math.floor(Math.random()*10); //0-9
}

async function getQuotes(){
    try{
        const responseObj = await fetch(api)
        quotesJsonData = await responseObj.json()
        return quotesJsonData
    } catch(error){
        console.log(error)
    }
}

async function newQuotes(){
    const randomNumber = randomNumberGenerate()
    try {
        const quotesJsonData = await getQuotes();
        quote = quotesJsonData[randomNumber]
        text.innerHTML = quote.text
        author.innerHTML = quote.author
    } catch(error) {
        console.log(error)
    }
}

async function firstQuotes(){
    try{
        const quotesJsonData = await getQuotes();
        quote = quotesJsonData[0]
        text.innerHTML = quote.text
        author.innerHTML = quote.author
    } catch(error){
        console.log(error)
    }
}

function twittQuote(){
    let twittPost = `https://twitter.com/intent/tweet?text=${quote.text} (${quote.author})`;
    window.open(twittPost)
}

// Execurion:
firstQuotes()
newQuoteBtn.addEventListener("click", newQuotes)
twitt.addEventListener("click", twittQuote)
