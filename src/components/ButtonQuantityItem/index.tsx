import { ChangeEvent, ReactNode } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { CoffeeControlShip } from './styles'

interface ButtonQuantityItemProps {
  children?: ReactNode
  quantity: number
  onPlusQuantityChange: (id: number) => void
  onMinusMinusQuantityChange: (id: number) => void
  onChange: (qnt: number, id: number) => void
  coffeeId: number
}

export function ButtonQuantityItem({
  children,
  quantity,
  onPlusQuantityChange,
  onMinusMinusQuantityChange,
  onChange,
  coffeeId,
}: ButtonQuantityItemProps) {
  function onHandlePlusChange() {
    onPlusQuantityChange(coffeeId)
  }

  function onHandleMinusChange() {
    onMinusMinusQuantityChange(coffeeId)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(+event.target.value, coffeeId)
  }

  return (
    <CoffeeControlShip>
      <div>
        <button onClick={onHandleMinusChange}>
          <Minus size={14} />
        </button>
        {children || (
          <input
            type="number"
            step={1}
            min={1}
            value={quantity}
            onChange={handleChange}
          />
        )}
        <button onClick={onHandlePlusChange}>
          <Plus size={14} />
        </button>
      </div>
    </CoffeeControlShip>
  )
}
