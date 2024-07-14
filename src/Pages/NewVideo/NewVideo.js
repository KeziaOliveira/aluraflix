import React, { useState } from "react";
import "./NewVideo.css";

function NewVideo() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !image || !video || !description) {
      setErrors({
        title: !title ? "Por favor, preencha o título" : "",
        category: !category ? "Por favor, selecione uma categoria" : "",
        image: !image ? "Por favor, adicione a imagem" : "",
        video: !video ? "Por favor, adicione o link do vídeo" : "",
        description: !description ? "Por favor, preencha a descrição" : "",
      });
      return;
    }
  };

  return (
    <div className="novo-video-container">
      <h1>NOVO VÍDEO</h1>
      <h2>Complete o formulário para criar um novo card de vídeo</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-field">
            <label>Título do vídeo</label>
            <input
              type="text"
              placeholder="Insira o título do vídeo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <div className="error-message">{errors.title}</div>
            )}
          </div>
          <div className="input-field">
            <label>Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Mobile">Mobile</option>
            </select>
            {errors.category && (
              <div className="error-message">{errors.category}</div>
            )}
          </div>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>Imagem</label>
            <input
              type="text"
              placeholder="Adicione o link para a imagem de capa do vídeo"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            {errors.image && (
              <div className="error-message">{errors.image}</div>
            )}
          </div>
          <div className="input-field">
            <label>Vídeo</label>
            <input
              type="text"
              placeholder="Digite o link do vídeo"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
            {errors.video && (
              <div className="error-message">{errors.video}</div>
            )}
          </div>
        </div>

        <div className="input-field">
          <label>Descrição</label>
          <textarea
            placeholder="Sobre o que é esse vídeo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
          {errors.description && (
            <div className="error-message">{errors.description}</div>
          )}
        </div>

        <div className="buttons">
          <button type="submit">GUARDAR</button>
          <button
            type="button"
            onClick={() => {
              /* lógica para limpar os campos */
            }}
          >
            LIMPAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewVideo;
