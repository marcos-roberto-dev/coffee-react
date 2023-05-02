import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Button } from '../Buttons'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

import CoffeeLogo from '../../assets/logo.svg'
import { HeaderButtonsContainer, HeaderContainer } from './styles'

export function Header() {
  const { cart } = useContext(ShoppingCartContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeLogo} alt="Logotipo" />
      </NavLink>
      <HeaderButtonsContainer>
        <Button size="small" variant="purpleLight">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Button>
        <NavLink to={!cart.length ? '/' : '/checkout'}>
          <Button
            tip={true}
            size="small"
            variant="yellowLight"
            contentTip={cart.length}
          >
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
