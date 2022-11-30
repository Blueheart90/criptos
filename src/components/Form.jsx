import { useEffect } from 'react';
import styled from '@emotion/styled';
import useCoinSelect from '../hooks/useCoinSelect';
import { coins } from '../data/coins';

const Form = () => {
  const [coin, CoinSelect] = useCoinSelect('Elige tu Moneda', coins);

  useEffect(() => {
    const apiConsult = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const result = await fetch(url);
      const res = await result.json();

      console.log(res.Data);
    };
    apiConsult();
  }, []);

  return (
    <form>
      <CoinSelect />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
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
