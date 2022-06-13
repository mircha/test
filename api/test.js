export default function test(req, res) {
  const kanye =  await (await fetch('https://api.kanye.rest')).json()
  res.statusCode = 200;
  res.send({ kanye: kanye });
}
