import { memo } from "react";

function TarjetaNino({nino, eliminarNino}){

  console.log('Recargando ',nino);
  

  return (
    <div onClick={() => eliminarNino(nino)} className="tarjeta">
      <p>{nino.nombre}</p>
      <img src={nino.img} />
    </div>
  );
}

export default memo(TarjetaNino);