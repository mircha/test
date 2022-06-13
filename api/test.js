export default function test(req, res) {
  const kanye =  fetch('https://api.kanye.rest').then(response => {
    let kanye =  res.json()
    res.statusCode = 200;
    res.send({ kanye: kanye });
  })

}
