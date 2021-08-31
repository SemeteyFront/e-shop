import './Modal.css'

function Modal({ onClose, children }) {
  return (
    <div>
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal">
        <div className="line"></div>
        {children}
      </div>
    </div>
  )
}

export default Modal;