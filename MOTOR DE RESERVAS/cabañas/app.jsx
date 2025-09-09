import React from "react";
import CabinCard from "./CabinCard";
import "./style-cabanas.css";

function App() {
  const malaquitaIcons = [
    { type: "material", name: "local_parking" },
    { type: "iconify", name: "mdi:hot-tub" }, // Jacuzzi
    { type: "material", name: "pets" },
    { type: "material", name: "directions_car" },
    { type: "material", name: "wifi" },
    { type: "material", name: "tv" },
  ];

  return (
    <div>
      <CabinCard
        title="Malaquita Suite"
        image="img/malaquita-suite.jpg"
        description="En la Cabaña Malaquita Suite disfrutarás de un alojamiento privado, romántico y elegante. Despertarás con una vista increíble a las montañas de Paipa. Rodeada de detalles hermosos, podrás disfrutar de un baño relajante en el jacuzzi o una copa de vino observando la naturaleza."
        icons={malaquitaIcons}
      />
    </div>
  );
}

export default App;
