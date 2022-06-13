export default function test(req, res) {
  const fetch = require('node-fetch');
  fetch('https://api.kanye.rest').then(response => {
    let kanye =  response.json()
    res.statusCode = 200;
    res.send({ kanye: kanye });
  })

}
