import * as S from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { BsFillHouseFill, BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = ({ adress }) => {
  return (
    <S.H data-testid="meatless-Header">
      <S.LogoBox>
        <Link to="/">
          <Logo />
          <h3>Meatless</h3>
        </Link>
      </S.LogoBox>

      <S.AdressBox>
        <button onClick={() => console.log('home button')}>
          <BsFillHouseFill size={20} color='#fff'/>
        </button>
        <span>{adress}</span>
        <button onClick={() => console.log('carrinho')} data-testid="meatless-HeaderCartButton">
          <BsBag size={20} color='#fff'/>
        </button>
      </S.AdressBox>
    </S.H>
  )
}

export default Header
