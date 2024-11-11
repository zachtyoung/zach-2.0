import React from "react"
import Modal from "react-modal"
import styles from "./ModalComponent.module.css"

const ModalComponent = ({ isOpen, onRequestClose, title, children }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel={title}
			className={`${styles.modal} window`}
			overlayClassName={styles.overlay}
			shouldCloseOnOverlayClick={false}
			ariaHideApp={false} // To prevent app from hiding main content
		>
			<div className='title-bar'>
				<div className='title-bar-text'>{title}</div>
				<div className='title-bar-controls'>
					<button
						aria-label='Close'
						onClick={onRequestClose}
					></button>
				</div>
			</div>
			<div className='window-body'>{children}</div>
		</Modal>
	)
}

export default ModalComponent
