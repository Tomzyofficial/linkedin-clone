import styles from '../app/styles.module.css'
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>x</button>
        {children}
      </div>
    </div>
  )
}
export default Modal;