import { useCallback, useEffect, useState } from "react";

function useParque() {
  const [ninosParque, setNinosParque] = useState([]);
  const [ninosCasa, setNinosCasa] = useState([]);
  var error = "";

  useEffect(() => {
    fetch("http://localhost:3000/api/girasoles")
      .then((response) => response.json())
      .then((data) => {
        setNinosCasa(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function llevarNinoParque() {
    if (ninosCasa.length === 0) {
      error = "¡¡¡No hay mas niños en casa!!!";
      return;
    }
    const indiceAleatorio = Math.floor(Math.random() * ninosCasa.length);
    const ninoSeleccionado = ninosCasa[indiceAleatorio];

    // Quitamos de casa usando filter
    setNinosCasa((prevCasa) =>
      prevCasa.filter((_, index) => index !== indiceAleatorio),
    );
    setNinosParque((prevParque) => [...prevParque, ninoSeleccionado]);
  }

  const llevarNinoCasa = useCallback((ninoARemover) => {
    setNinosParque((prevParque) =>
      prevParque.filter((nino) => nino.nombre != ninoARemover.nombre),
    );

    setNinosCasa((prevCasa) => [...prevCasa, ninoARemover]);
  }, []);

  return {ninosCasa, ninosParque, llevarNinoCasa, llevarNinoParque, error};
}
export default useParque;