const fetch = require('node-fetch')
const getKanieRest = async () => {
    const response = await fetch('https://api.kanye.rest')
    const data = await response.json()
    return data
}

module.exports.getKanieRest = getKanieRest