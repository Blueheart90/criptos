import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCoinSelect from '../hooks/useCoinSelect';
import { coins } from '../data/coins';
import Error from './Error';

const Form = ({ setCoins }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [coin, CoinSelect] = useCoinSelect('Elige tu Moneda', coins);
  const [cryptoCoin, CryptoCoinSelect] = useCoinSelect(
    'Elige tu Criptomoneda',
    cryptos
  );

  useEffect(() => {
    const apiConsult = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const result = await fetch(url);
      const res = await result.json();
      const cryptosArr = res.Data.map((crypto) => ({
        id: crypto.CoinInfo.Name,
        name: crypto.CoinInfo.FullName,
      }));
      setCryptos(cryptosArr);
      console.log(cryptosArr);
    };
    apiConsult();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, cryptoCoin].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    setCoins({
      coin,
      cryptoCoin,
    });
  };

  return (
    <>
      {error && (
        <Error>
          <p>Todos los campos son obligatorios</p>
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        <CoinSelect />
        <CryptoCoinSelect />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7074f5;
    cursor: pointer;
  }
`;
export default Form;
