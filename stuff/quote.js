const fetch = require('node-fetch')
const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    return data
}

module.exports.fetchQuote = fetchQuote