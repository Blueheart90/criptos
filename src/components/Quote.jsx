import styled from '@emotion/styled';
const Quote = ({ quoteCrypto }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTDAY, IMAGEURL, LASTUPDATE } =
    quoteCrypto;
  return (
    <QuoteContainer>
      <CryptoImg
        src={`https://cryptocompare.com${IMAGEURL}`}
        alt="Imagen cripto"
      />
      <div>
        <Price>
          El precio es de: <span>{PRICE}</span>
        </Price>
        <Text>
          Precio más alto del dia: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio más bajo del dia: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variación últimas 24 horas : <span>{CHANGEPCTDAY}</span>
        </Text>
        <Text>
          Última actualización : <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </QuoteContainer>
  );
};

const QuoteContainer = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const CryptoImg = styled.img`
  display: block;
  width: 120px;
`;
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;
const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

export default Quote;
