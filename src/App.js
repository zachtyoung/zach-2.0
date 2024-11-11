import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import styles from "./App.module.css"
import speaker from "./assets/loudspeaker_rays-0.png"
import battery from "./assets/battery_alt-0.png"
import world from "./assets/connected_world-0.png"
import start from "./assets/start.webp"
import StartMenu from "./components/StartMenu"
import "98.css"

function App() {
	const [time, setTime] = React.useState(new Date())
	const [isStartMenuOpen, setIsStartMenuOpen] = React.useState(false)

	const toggleStartMenu = () => {
		setIsStartMenuOpen(!isStartMenuOpen)
	}
	React.useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	const formatTime = (date) => {
		return date.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		})
	}
	return (
		<>
			<div className={styles.desktop}>
				<Home />
				<nav className={styles.taskbar}>
					<div
						className={styles.startButton}
						onClick={toggleStartMenu}
					>
						<img
							className={styles.startIcon}
							src={start}
							alt='Start'
						/>
						<span>Start</span>
						<StartMenu
							isOpen={isStartMenuOpen}
							onClose={() => setIsStartMenuOpen(false)}
						/>
					</div>
					<div className={styles.systemTray}>
						<img
							src={world}
							alt='Connected'
							className={styles.speakerIcon}
						/>
						<img
							src={battery}
							alt='battery'
							className={styles.speakerIcon}
						/>
						<img
							src={speaker}
							alt='Speaker'
							className={styles.speakerIcon}
						/>
						<span>{formatTime(time)}</span>
					</div>
				</nav>
			</div>
			<div className={styles.scanlines}></div>
		</>
	)
}

export default App
