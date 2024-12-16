import { useState } from 'react'
import { ModalDialog } from './ModalDialog'

export const ModalContainer = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button onClick={() => setShow(true)}>Open dialog</button>
      <ModalDialog isOpen={show}>
        <p>Hello there!</p>
        <hr />
        <button onClick={() => setShow(false)}>Close</button>
      </ModalDialog>
    </>
  )
}
