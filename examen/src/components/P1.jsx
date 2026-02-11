import "./styles/P1.css"
import logo from "../assets/logo.webp"
import hacerColada from "../assets/hacer-colada.webp"
import cuidarHermana from "../assets/cuidar-hermana.webp"
import pasearPerro from "../assets/pasear-perro.webp"
import { useEffect, useState } from "react"


export default function P1() {
  
  const [coladaDone, setColadaDone] = useState(false)
  const [hermanaDone, setHermanaDone] = useState(false)
  const [perroDone, setPerroDone] = useState(false)

  const [tema, setTema] = useState("claro")

  const delay = ms => new Promise(res => setTimeout(res, ms))

  const hacerTareas = async () => {
    await delay(3000)
    setColadaDone(true)
    await delay(3000)
    setHermanaDone(true)
    await delay(3000)
    setPerroDone(true)
    await delay(5000)
    setColadaDone(false)
    setHermanaDone(false)
    setPerroDone(false)
  }

  useEffect(() => {
    setTema(localStorage.getItem("theme"))
    document.documentElement.setAttribute("theme", localStorage.getItem("theme") === "claro" ? "light" : "dark");
    }, [])

  const cambiarTema = () => {
    setTema(tema === "claro" ? "oscuro" : "claro")
    localStorage.setItem("theme", tema);
    document.documentElement.setAttribute("theme", tema === "claro" ? "light" : "dark");
  }

    return (
    <div className="p1">
        <img src={logo} alt="Logo"/>
        <div className="tareas-container">
            <div className="hacer-colada">
                <img className={coladaDone ? "color" : "blanco-negro"} src={hacerColada}/>
            </div>

            <div className="cuidar-hermana">
                <img className={hermanaDone ? "color" : "blanco-negro"} src={cuidarHermana}/>
            </div>

            <div className="pasear-perro">
                <img className={perroDone ? "color" : "blanco-negro"} src={pasearPerro}/>
            </div>
        </div>

        <div className="botones-container">
            <button className="boton-tareas" onClick={hacerTareas}>Hacer Tareas</button>
            <button className="boton-tema" onClick={cambiarTema}>{tema === "claro" ? "Oscuro" : "Claro"}</button>
        </div>
    </div>
  )
}