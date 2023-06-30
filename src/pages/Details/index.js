
import * as S from './styles';
import Header from '../../components/Header';
import { useState } from 'react';

const Details = () => {
  const [dishes, setDishes] = useState({});
  return (
    <S.Container data-testid="meatless-pageDetails">
      <Header adress="R. Clodomiro Amazonas, 22" />
      <S.Main >
        <S.RestaurantDetails>
          <img src='https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg' alt='fallback-img' />
          <S.RestaurantInfos>

          </S.RestaurantInfos>
        </S.RestaurantDetails>
        <S.DishList data-testid="meatless-pageDetails-DishList">
          {/* Show your dishes list here! */}
        </S.DishList>
      </S.Main>
    </ S.Container>
  )
}

export default Details;
