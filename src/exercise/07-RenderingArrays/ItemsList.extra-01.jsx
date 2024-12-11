import { useEffect, useState } from 'react'
import { allItems } from './items'
import { shuffle } from './utils'

export const ItemsList = () => {
  const [autoShuffle, setAutoShuffle] = useState(true)
  const [items, setItems] = useState(allItems)

  useEffect(() => {
    if (autoShuffle) {
      const id = setInterval(() => setItems(shuffle), 1000)
      return () => clearInterval(id)
    }
  }, [autoShuffle])

  const getChangeHandler = item => event => {
    const newValue = event.target.value
    setItems(allItems =>
      allItems.map(i => ({
        ...i,
        value: i.id === item.id ? newValue : i.value,
      }))
    )
  }

  return (
    <div className="keys">
      <main>
        <div>
          <h2>Without a key</h2>
          <ul style={{ display: 'flex', gap: '10px' }}>
            {items.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <li>
                <label htmlFor={`no-key-${item.id}-input`}>
                  No key #{index + 1}
                </label>
                <input
                  id={`no-key-${item.id}-input`}
                  className={`${item.id}-input`}
                  onChange={getChangeHandler(item)}
                  type="text"
                  value={item.value}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>With array index as key</h2>
          <ul style={{ display: 'flex', gap: '10px' }}>
            {items.map((item, index) => (
              <li key={index}>
                <label htmlFor={`index-key-${item.id}-input`}>
                  Index key #{index + 1}
                </label>
                <input
                  id={`index-key-${item.id}-input`}
                  className={`${item.id}-input`}
                  onChange={getChangeHandler(item)}
                  type="text"
                  value={item.value}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>With a proper key</h2>
          <ul style={{ display: 'flex', gap: '10px' }}>
            {items.map((item, index) => (
              <li key={item.id}>
                <label htmlFor={`proper-key-${item.id}-input`}>
                  Proper key #{index + 1}
                </label>
                <input
                  id={`proper-key-${item.id}-input`}
                  className={`${item.id}-input`}
                  onChange={getChangeHandler(item)}
                  type="text"
                  value={item.value}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <aside style={{ marginTop: '40px' }}>
        <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
          <input
            id="autoshuffle"
            type="checkbox"
            checked={autoShuffle}
            onChange={event => setAutoShuffle(event.target.checked)}
          />
          <label htmlFor="autoshuffle">Auto-shuffle inputs</label>
        </div>
      </aside>
    </div>
  )
}
