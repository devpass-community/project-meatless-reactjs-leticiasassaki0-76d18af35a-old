import styled from 'styled-components';

export const Card = styled.li`
  padding: 24px;
  margin: 16px 12px;
  background: rgba(19, 136, 32, 0.05);
  border-radius: 10px;

  a {
    color: #000;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const IMG = styled.img`
  border-radius: 10px;
  width: 303px;
  height: 208px;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
  }

  span {
    font-size: 16px;
    margin-top: 20px;

    svg {
      margin-right: 8px;
    }
  }
`;
