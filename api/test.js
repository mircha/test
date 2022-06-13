export default function test(req, res) {
  const kanye =  require('./kanye').getKanieRest();
  const quote =  require('./quote').fetchQuote();
  res.statusCode = 200;
  res.json({ kanye: kanye, quote: quote });
}
