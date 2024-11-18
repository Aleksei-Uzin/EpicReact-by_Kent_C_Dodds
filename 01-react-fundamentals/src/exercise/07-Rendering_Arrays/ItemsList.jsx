import { useState } from 'react'
import { allItems } from './items'

export const ItemsList = () => {
  const [items, setItems] = useState(allItems)

  const addItem = () => {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  const removeItem = ({ id }) => {
    setItems(items.filter(item => item.id !== id))
  }

  const disableAddItem = items.length >= allItems.length

  return (
    <div className="keys">
      <button disabled={disableAddItem} onClick={addItem}>
        add item
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button> {/*  */}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input
              id={`${item.id}-input`}
              defaultValue={item.value}
              type="text"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
