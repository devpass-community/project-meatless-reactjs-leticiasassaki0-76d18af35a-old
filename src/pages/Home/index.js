import React from 'react';
import * as S from './styles';
import Header from '../../components/Header';

const Home = () => {
  return (
    <S.Container data-testid="meatless-pageHome">
      <Header adress="R. Clodomiro Amazonas, 22" />
      <S.Main>
        <h2>Restaurantes (todos)</h2>
        <ul data-testid="meatless-restaurantList">
          {/* show your restaurants cards here! */}
        </ul>
      </S.Main>
    </S.Container>
  )
}

export default Home;
