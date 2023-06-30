
import * as S from './styles';
import { BsClock } from 'react-icons/bs';
import { RiPinDistanceFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ id, imgUrl, title, workTime, distance }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/restaurant/${id}`)
  }
  return (
    <S.Card data-testid="meatless-restaurantCard" onClick={handleRedirect}>
      <S.IMG src={imgUrl} alt={title} />

      <S.InfoBox>
        <h3>{title}</h3>
        <span>
          <BsClock size={16} color="#4CAF50" />
          {workTime}
        </span>
        <span>
          <RiPinDistanceFill size={16} color="#4CAF50"/>
          {distance}
        </span>
        </S.InfoBox>
    </S.Card>
  )
}

export default RestaurantCard;
