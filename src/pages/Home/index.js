import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Icon from "../../components/Icon";
import { initialIcons } from "../../assets/content/initialIcons";
import styles from "./Home.module.css";
import Launcher from "../../components/Launcher";

const Home = () => {
  const [icons, setIcons] = useState(initialIcons);

  const updatePosition = (id, newPosition) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) =>
        icon.id === id ? { ...icon, position: newPosition } : icon
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.desktop}>
        {icons.map((icon) => (
          <Icon
            key={icon.id}
            id={icon.id}
            url={icon.url}
            text={icon.text}
            position={icon.position}
            updatePosition={updatePosition}
            content={icon.content}
          />
        ))}
        <Launcher />
      </div>
    </DndProvider>
  );
};

export default Home;
