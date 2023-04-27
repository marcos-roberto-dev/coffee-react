import { CoffeesSection } from './Coffees'
import { HeroSection } from './Hero'
import { HomeContainer } from './styled'

export function HomePage() {
  return (
    <HomeContainer>
      <HeroSection />
      <CoffeesSection />
    </HomeContainer>
  )
}
