//This file will consist of a bunch of function api calls
function getRandomCatFact() {
    return fetch('https://meowfacts.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0])
            return data.data[0]
        })
    .catch(error => console.error('Error fetching axolotl data:', error));
}

function getRandomAnimeQuote() {
    return fetch('https://api.animechan.io/v1/quotes/random')
    .then(response => response.json())
    .then(quote => {
        console.log(quote)
        console.log(quote.data.content)
        return quote.data.content
    })
}

export {getRandomAnimeQuote, getRandomCatFact};