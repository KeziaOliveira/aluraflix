import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import "./VideoCard.css";
import pencil from "../../assets/icons/pencil.svg";
import trash from "../../assets/icons/trash.svg";

const VideoCard = ({ video, onDelete, onEdit, category }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete(video.id);
  };

  const handleEdit = (updatedVideo) => {
    onEdit(video.id, updatedVideo);
    setShowModal(false);
  };

  return (
    <div className={`video-card ${category.toLowerCase()}`}>
      <div
        className="thumbnail"
        onClick={() => window.open(video.video, "_blank")}
      >
        <img src={video.image} alt={video.title} />
      </div>
      <div className="video-info">
        <div className="video-links">
          <img src={trash} alt="Deletar" />
          <a href="#" onClick={handleDelete}>
            Deletar
          </a>
          <img src={pencil} alt="Editar" />
          <a href="#" onClick={() => setShowModal(true)}>
            Editar
          </a>
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="modal-title">EDITAR CARD</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedVideo = {
                id: video.id,
                title: e.target.title.value,
                category: e.target.category.value,
                image: e.target.image.value,
                video: e.target.video.value,
                description: e.target.description.value,
              };
              handleEdit(updatedVideo);
            }}
          >
            <p>
              <label>Título</label>
              <input
                type="text"
                name="title"
                defaultValue={video.title}
                placeholder="Título"
                required
              />
            </p>
            <p>
              <label>Categoria</label>
              <select name="category" defaultValue={video.category} required>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Mobile">Mobile</option>
              </select>
            </p>
            <p>
              <label>Imagem</label>
              <input
                type="text"
                name="image"
                defaultValue={video.image}
                placeholder="Link da imagem"
                required
              />
            </p>
            <p>
              <label>Vídeo</label>
              <input
                type="text"
                name="video"
                defaultValue={video.video}
                placeholder="Link do vídeo"
                required
              />
            </p>
            <p>
              <label>Descrição</label>
              <input
                type="text"
                name="description"
                defaultValue={video.description}
                placeholder="Descrição do vídeo"
                required
              />
            </p>
            <div className="modal-buttons">
              <Button label="Guardar" type="submit" className="modal-button" />
              <Button
                label="Limpar"
                type="button"
                className="modal-button"
                onClick={(e) => {
                  e.preventDefault();
                  const form = e.target.form;
                  form.title.value = "";
                  form.category.value = "Frontend";
                  form.image.value = "";
                  form.video.value = "";
                  form.description.value = "";
                }}
              />
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default VideoCard;
