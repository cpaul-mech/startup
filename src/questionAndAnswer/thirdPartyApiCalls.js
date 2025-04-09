//This file will consist of a bunch of function api calls
function getRandomCatFact() {
    fetch('https://meowfacts.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0])
            return data.data[0]
        })
    .catch(error => console.error('Error fetching axolotl data:', error));
}

getRandomCatFact();