import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Header from '../../components/Header';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/evercodeinc/meatless-api/main/restaurant_list.json'
        );
        const data = await response.json();
        setRestaurantData(data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurantData();
  }, []);

  return (
    <S.Container data-testid="meatless-pageHome">
      <Header address="R. Clodomiro Amazonas, 22" />
      <S.Main>
        <h2>Restaurantes (todos)</h2>
        <div data-testid="meatless-restaurantList">
          {restaurantData.map((restaurant) => (
            <div key={restaurant.id} data-testid="meatless-restaurantCard">
              {restaurant.name}
            </div>
          ))}
        </div>
      </S.Main>
    </S.Container>
  );
};

export default Home;
