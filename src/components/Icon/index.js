import React, { useState } from "react"
import { Rnd } from "react-rnd"
import ModalComponent from "../ModalComponent"
import styles from "./Icon.module.css"

const Icon = ({ id, url, text, position, updatePosition, content }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleDragStop = (e, d) => {
		updatePosition(id, { x: d.x, y: d.y })
	}

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<>
			<Rnd
				default={{
					x: position.x,
					y: position.y,
					width: 100,
					height: 100,
				}}
				onDragStop={handleDragStop}
				bounds='parent'
				enableResizing={false} // Disable resizing
			>
				<div className={styles.icon} onDoubleClick={handleOpenModal}>
					<img src={url} alt={text} className={styles.iconImage} />
					<span className={styles.iconText}>{text}</span>
				</div>
			</Rnd>
			<ModalComponent
				isOpen={isModalOpen}
				onRequestClose={handleCloseModal}
				title={text}
			>
				<div>{content}</div>
			</ModalComponent>
		</>
	)
}

export default Icon
