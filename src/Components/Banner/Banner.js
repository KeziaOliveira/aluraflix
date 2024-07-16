import React from "react";
import "./Banner.css";

const Banner = ({ video }) => {
  if (!video) {
    return null; // Ou um loader, se preferir
  }

  const categoryClass = `Banner_title ${video.category.toLowerCase()}`;

  return (
    <section className="Banner_container">
      <div
        className="Banner_fundo"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), url(${video.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="Banner_item">
          <div>
            <h1 className={categoryClass}>{video.category}</h1>
            <h2>{video.title}</h2>
            <p>{video.descrição}</p> {/* Exibindo a descrição aqui */}
          </div>
          <div className="Banner_minibanner">
            <img
              className="Banner_imagem"
              alt={video.title}
              src={video.image}
              onClick={() => window.open(video.video, "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
