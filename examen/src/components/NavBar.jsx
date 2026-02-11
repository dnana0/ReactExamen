import { Link } from "react-router-dom"
import "./styles/NavBar.css"

export default function NavBar() {
  return (
    <nav className="navbar">
        <Link to="/p1" className="link-tarea">
        <h3>Ejercicio 1</h3>
        <p>Tareas Sinchan</p>
        </Link> 
        <Link to="/p2" className="link-tarea">
        <h3>Ejercicio 2</h3>
        <p>Niños al parque</p>
        </Link> 
        <Link to="/p3" className="link-tarea">
        <h3>Ejercicio 3</h3>
        <p>Reloj Merena</p>
        </Link> 
        <Link to="/p4" className="link-tarea">
        <h3>Ejercicio 4</h3>
        <p>Formulario</p>
        </Link> 
        <Link to="/p5" className="link-tarea">
        <h3>Ejercicio 5</h3>
        <p>Tema Oscuro</p>
        </Link> 
    </nav>
  )
}