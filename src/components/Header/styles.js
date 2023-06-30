import styled from 'styled-components';

export const H = styled.header`
  padding: 20px 25px;
  background: '#4CAF50';
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBox = styled.div`

  a {
    display: flex;
    align-items: center;
  }

  h3 {
    color: #fff;
  }

  svg {
    width: 34px;
    height: 34px;
  }
`;

export const AdressBox = styled.div`
  display: flex;
  align-items: center;
  
  button {
    background: transparent;
    border: none;
    pointer-events: all;
    cursor: pointer;
  }

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffF;
    margin: 0 12px;
  }
`
