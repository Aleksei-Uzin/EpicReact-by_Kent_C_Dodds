import { useEffect, useRef } from 'react'

export const ModalDialog = ({ children, isOpen }) => {
  const ref = useRef()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const dialog = ref.current
    dialog.showModal()

    return () => {
      dialog.close()
    }
  }, [isOpen])

  return <dialog ref={ref}>{children}</dialog>
}
