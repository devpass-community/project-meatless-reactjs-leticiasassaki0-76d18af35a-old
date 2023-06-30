import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styles';
import Header from '../../components/Header';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/evercodeinc/meatless-api/main/restaurant_list.json'
        );
        setRestaurantData(response.data);
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
        <ul data-testid="meatless-restaurantList">
          {restaurantData.map((restaurant) => (
            <li key={restaurant.id} data-testid="meatless-restaurantCard">
              {restaurant.name}
            </li>
          ))}
        </ul>
      </S.Main>
    </S.Container>
  );
};

export default Home;
