import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import criptosImg from './assets/img/imagen-criptos.png';

function App() {
  const [coins, setCoins] = useState({});
  const [quoteCrypto, setquoteCrypto] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const crytoQuote = async () => {
        setLoading(true);
        setquoteCrypto({});
        const { cryptoCoin, coin } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
        const res = await fetch(url);
        const result = await res.json();
        setquoteCrypto(result.DISPLAY[cryptoCoin][coin]);
        setLoading(false);
      };

      crytoQuote();
    }
  }, [coins]);
  return (
    <Container>
      <Img src={criptosImg} alt="Imagenes de criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form setCoins={setCoins} />
        {loading && <Spinner />}
        {quoteCrypto.PRICE && <Quote quoteCrypto={quoteCrypto} />}
      </div>
    </Container>
  );
}

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Img = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

export default App;
