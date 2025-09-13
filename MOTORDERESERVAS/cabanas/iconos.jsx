import React from "react";
import "@fontsource/open-sans/400.css"; // Regular
import "@fontsource/open-sans/700.css"; // Bold
import { Icon } from "@iconify/react"; // Para iconos extra como Jacuzzi

const CabinCard = ({ title, image, description, icons }) => {
  return (
    <div className="cabin-card">
      <h2 className="cabin-title">{title}</h2>

      <img src={image} alt={title} className="cabin-img" />

      <div className="cabin-icons">
        {icons.map((icon, idx) => (
          <span key={idx} className="cabin-icon">
            {icon.type === "material" ? (
              <span className="material-symbols-outlined">{icon.name}</span>
            ) : (
              <Icon icon={icon.name} width="16" height="16" color="#AB4523" />
            )}
          </span>
        ))}
      </div>

      <p className="cabin-desc">{description}</p>

      <button className="reserve-btn">Reservar</button>
    </div>
  );
};

export default CabinCard;
