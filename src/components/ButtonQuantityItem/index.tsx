import { ReactNode } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeControlShip } from './styles'

interface ButtonQuantityItemProps {
  children?: ReactNode
}

export function ButtonQuantityItem({ children }: ButtonQuantityItemProps) {
  return (
    <CoffeeControlShip>
      <div>
        <button>
          <Minus size={14} />
        </button>
        {children || <input type="number" step={1} min={1} value={1} />}
        <button>
          <Plus size={14} />
        </button>
      </div>
    </CoffeeControlShip>
  )
}
