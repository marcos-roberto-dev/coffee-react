import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import HeroImg from '../../../assets/hero.svg'
import {
  HeroContainer,
  HeroIconsContainer,
  HeroTextContainer,
  IconWithLabel,
} from './styles'

export function HeroSection() {
  return (
    <HeroContainer>
      <div>
        <HeroTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HeroTextContainer>

        <HeroIconsContainer>
          <IconWithLabel variant="shopping">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            Compra simples e segura
          </IconWithLabel>
          <IconWithLabel variant="package">
            <div>
              <Package size={16} weight="fill" />
            </div>
            Embalagem mantém o café intacto
          </IconWithLabel>
          <IconWithLabel variant="timer">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            Entrega rápida e rastreada
          </IconWithLabel>
          <IconWithLabel variant="coffee">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            O café chega fresquinho até você
          </IconWithLabel>
        </HeroIconsContainer>
      </div>
      <div>
        <img src={HeroImg} alt="Imagem principal" />
      </div>
    </HeroContainer>
  )
}
