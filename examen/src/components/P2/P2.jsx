import TarjetaNino from "./TarjetaNino";
import useParque from "./hooks/useParque.jsx";
import logo from "../../assets/logo.webp";

export default function Parque(){

  const { ninosCasa, ninosParque, llevarNinoCasa, llevarNinoParque, error } =
    useParque();

  return (
    <>
      <img src={logo} alt="Logo" />
      <div className="contadores-container">
        <span>Nº de niñes en casa: </span>
        <span className="contador-casa">{ninosCasa.length}</span>
        <span>Nº de niñes en el parque: </span>
        <span className="contador-parque">{ninosParque.length}</span>
      </div>
      <div className="tarjetas-container">
        {ninosParque.map((nino) => (
          <TarjetaNino
            key={nino.nombre}
            nino={nino}
            eliminarNino={llevarNinoCasa}
          />
        ))}
      </div>
      <button className="boton-parque" onClick={llevarNinoParque}>
        ¡Un niñe llega al parque!
      </button>
      <p>{error}</p>
      <script src="script.js"></script>
    </>
  );
}