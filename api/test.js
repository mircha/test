export default function test(req, res) {
  const kanye = await require('../stuff/kanye').getKanieRest();
  const quote = await require('../stuff/quote').fetchQuote();
  res.statusCode = 200;
  res.json({ kanye: kanye, quote: quote });
}

