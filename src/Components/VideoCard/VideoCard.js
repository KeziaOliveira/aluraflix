import React, { useState } from "react";
import Modal from "../Modal/Modal";
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
          <img src={trash}></img>
          <a href="#" onClick={handleDelete}>
            Deletar
          </a>
          <img src={pencil}></img>
          <a href="#" onClick={() => setShowModal(true)}>
            Editar
          </a>
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const updatedVideo = {
                title: e.target.title.value,
                category: e.target.category.value,
                // outros campos
              };
              handleEdit(updatedVideo);
            }}
          >
            <label>
              Título:
              <input type="text" name="title" defaultValue={video.title} />
            </label>
            <label>
              Categoria:
              <input
                type="text"
                name="category"
                defaultValue={video.category}
              />
            </label>
            {/* Outros inputs */}
            <button type="submit">Salvar</button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default VideoCard;
