import { useState } from "react";

const validarNombre = (valor) => {
  if (!valor.trim()) return "El nombre es obligatorio";
  if (valor.length < 5 || edad < 3) return "la edad no es correcta";
  return null;
};

const validarEdad = (valor) => {
  const edad = Number(valor);
  if (isNaN(edad)) return "La edad debe ser un número";
  if (edad > 5 || edad < 3) return "La edad no es correcta";
  return null;
};

const validarDireccion = (valor) => {
  if (!valor.trim()) return "La direccion es obligatoria";
  if (valor.length > 50) return "La direccion es demasiado larga";
  return null;
};

const validarTelefono = (valor) => {
  const regex = /^[6789]\d{8}$/;
  if (!valor) return "El teléfono es obligatorio";
  if (!regex.test(valor)) return "El número no es valido";
  return null;
};

const validarClase = (valor) => {
  if (!valor.trim()) return "La clase es obligatoria";
  if (valor != "rosas" && valor != "girasoles" && valor != "cerezos")
    return "Clase invalida";
  return null;
};

export default function Formulario() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    edad: "",
    direccion: "",
    telefono: "",
    clase: "",
    alergenos: [],
  });

  const [errores, setErrores] = useState({
    nombre: null,
    edad: null,
    direccion: null,
    telefono: null,
    clase: null,
  });

  const manejaCambio = (e) => {
    // Sacamos del evento el name y el value del input que ha cambiado
    // e.target es el input que el usuario ha tocado
    const { name, value } = e.target;

    // Actualizamos el estado del formulario
    setDatosFormulario((prev) => ({
      // Copiamos todo lo que ya había en el estado
      ...prev,

      // Sobrescribimos SOLO el campo que ha cambiado
      // name es el nombre del input (ej: "nombre", "edad", etc.)
      // value es lo que el usuario ha escrito
      [name]: value,
    }));
  };
}
