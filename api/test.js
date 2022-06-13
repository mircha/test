export default function test(req, res) {
  const kanye = await require('./kanye').getKanieRest();
  const quote = await require('./quote').fetchQuote();
  res.statusCode = 200;
  res.json({ kanye: kanye, quote: quote });
}