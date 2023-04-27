import { HeaderButtonsContainer, HeaderContainer } from './styles'
import CoffeeLogo from '../../assets/logo.svg'
import { Button } from '../Buttons'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="Logotipo" />
      <HeaderButtonsContainer>
        <Button size="small" variant="location">
          Porto Alegre, RS
        </Button>
        <Button tip={true} size="small" variant="shopping"></Button>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
