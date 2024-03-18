
let quoteText = document.querySelector('.quote-text')
let quoteBtn = document.querySelector('.quote-btn')
let quoteAuthor = document.querySelector('.quote-author')
let soundBtn = document.querySelector('.sound')
let copyBtn = document.querySelector('.copy')
let twitterBtn = document.querySelector('.twitter')
let
async function randomQuote() {
  quoteBtn.innerText = 'loading..'
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()
  console.log(data)

  quoteText.innerHTML = data.content
  quoteAuthor.innerHTML = data.author
  quoteBtn.innerText = 'New Quote'
}
/*function randomQuote() {
    fetch('https://api.quotable.io/random') 
    .then((res) => res.json())
    .then((data)=> console.log(data))
}
*/
randomQuote()

quoteBtn.addEventListener('click',randomQuote)

soundBtn.addEventListener('click',() => {

    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`)
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener('click',() => {
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener('click', ()=> {
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(twitterUrl,"_blank")
})


/*function randomQuote() {
    fetch('https://api.quotable.io/random') 
    .then((res) => res.json())
    .then((data)=> console.log(data))
}
randomQuote()
*/