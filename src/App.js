import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import aluraflixLogo from "./assets/logo/aluraflix-logo.svg";
import Button from "./Components/Button/Button";
import styles from "./index.css";
import VideoSection from "./Components/VideoSection/VideoSection";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import NovoVideo from "./Pages/NewVideo/NewVideo";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3001/videos");
        const data = await response.json();
        setVideos(data);
        if (data.length > 0) {
          setCurrentVideo(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prevVideo) => {
        const nextIndex = (videos.indexOf(prevVideo) + 1) % videos.length;
        return videos[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [videos]);

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleEdit = (id, updatedVideo) => {
    setVideos(videos.map((video) => (video.id === id ? updatedVideo : video)));
  };

  return (
    <div className="App">
      <header className={styles.header}>
        <img src={aluraflixLogo} alt="Logo Aluraflix" />
        <div className="headerButtons">
          <Button label="HOME" onClick={() => navigate("/")} />
          <Button label="NOVO VÍDEO" onClick={() => navigate("/novo-video")} />
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {currentVideo && <Banner video={currentVideo} />}
              <div className="category-sections">
                <section className="frontend">
                  <VideoSection
                    category="FRONTEND"
                    videos={videos.filter(
                      (video) => video.category === "Frontend"
                    )}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                </section>
                <section className="backend">
                  <VideoSection
                    category="BACKEND"
                    videos={videos.filter(
                      (video) => video.category === "Backend"
                    )}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                </section>
                <section className="mobile">
                  <VideoSection
                    category="MOBILE"
                    videos={videos.filter(
                      (video) => video.category === "Mobile"
                    )}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                </section>
              </div>
            </>
          }
        />
        <Route path="/novo-video" element={<NovoVideo />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
