import { useState } from 'react';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import { ReactComponent as SubtractIcon } from '../../assets/subtract.svg';
import * as S from './styles';

const DishCard = () => {
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    return null
  }

  const handleSubtract = () => {
    return null
  }

  return (
    <S.Container data-testid="meatless-dishCard">
      <button onClick={handleSubtract} data-testid="meatless-dishCardAddAmount"><SubtractIcon /></button>
      <span data-testid="meatless-dishCardAmount">{amount}</span>
      <button onClick={handleAdd} data-testid="meatless-dishCardSubtractAmount"><AddIcon /></button>
    </S.Container>
  )
}

export default DishCard;
