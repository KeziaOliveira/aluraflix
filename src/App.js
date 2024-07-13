import React from "react";
import aluraflixLogo from "./assets/logo/aluraflix-logo.svg";
import Button from "./Components/Button/Button";
import styles from "./index.css";

function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <img src={aluraflixLogo} alt="Logo Aluraflix"></img>
        <div className="HeaderButtons">
          <Button label="HOME" />
          <Button
            label="NOVO VÍDEO"
            onClick={() => alert("Abrir página para adicionar novo vídeo")} // Adicionar página "novo vídeo"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
