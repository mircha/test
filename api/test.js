export default function test(req, res) {
  res.statusCode = 200;
  //res.json({ message: 'It works' });

  const kanye = await require('../stuff/kanye').getKanieRest();
  const quote = await require('../stuff/quote').fetchQuote();

  res.json({ kanye: kanye, quote: quote });
}

