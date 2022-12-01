import styled from '@emotion/styled';

const Error = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
`;
export default Error;
