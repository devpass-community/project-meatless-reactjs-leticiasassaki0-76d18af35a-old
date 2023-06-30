import { useState } from 'react';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import { ReactComponent as SubtractIcon } from '../../assets/subtract.svg';
import * as S from './styles';

const DishCard = ({ onClick }) => {
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    setAmount(amount + 1);
    onClick();
  };

  const handleSubtract = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      onClick();
    }
  };

  return (
    <S.Container data-testid="meatless-dishCard">
      <button onClick={handleSubtract} data-testid="meatless-dishCardSubtractAmount"><SubtractIcon /></button>
      <span data-testid="meatless-dishCardAmount">{amount}</span>
      <button onClick={handleAdd} data-testid="meatless-dishCardAddAmount"><AddIcon /></button>
    </S.Container>
  )
}

export default DishCard;
