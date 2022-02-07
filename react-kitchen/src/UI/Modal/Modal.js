import ReactDOM from "react-dom"
import { ModalOverlay } from "./ModalOverlay/ModalOverlay"
import { Backdrop } from "./Backdrop/Backdrop"

export const Modal = ({setCartIsShown, children}) => {
  const portalElement = document.getElementById('overlays')

  return (
    <>
      {ReactDOM.createPortal(<Backdrop setCartIsShown={setCartIsShown} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          {children}
        </ModalOverlay>,
        portalElement)}
    </>
  )
}
