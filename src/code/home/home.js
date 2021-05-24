import React from "react"
import "./home.css"
import {useLocation} from "wouter"

const Home = () => {

    const [location, setLocation] = useLocation()

    if(!localStorage.getItem("token")){
        setLocation("/")
    }

    const handleR2 = () => {
        setLocation("/home/webr2")
    }
    const handleR3 = () => {
        setLocation("/home/webr3")
    }

    const handleR4 = () => {
    setLocation("/home/webr4")
    }
    const handleLogout = () =>{
        localStorage.removeItem("token")
        setLocation("/")
    }
    return (
        <>
        <button onClick={handleLogout} className="button-home-logout">Logout</button>
        <div className="container-header">
            <div className="container-titulo">
                <h1 className="titulo">MD Digital Solutions</h1>    
                <h3 className="subtitulo" >The innovation is in our DNA</h3>
            </div>
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHO-se7LzpMfg/company-logo_200_200/0/1519900679278?e=2159024400&v=beta&t=MWLmX-9OFh6YAZ0TQb_opjgZjsjGOAjpKWXWvA0qKxw" alt="Logo" />
        </div>
    
        <h2>Aplicativo Web</h2>

        <div className="container-solicitudes">
            <div className="container-solicitud1">
                <button onClick={handleR2}>WebR2</button>
                <p>Solicitud R2: tabla con datos de ejemplo</p>
            </div>
            <div className="container-solicitud2">
                <button onClick={handleR3}>WebR3</button>
                <p>Solicitud R3:Web para reproducir video</p>
            </div>
            <div className="container-solicitud3">
                 <button onClick={handleR4}>WebR4</button>
                 <p>Solicitud R4:Página para listar información</p>
            </div>
        </div>
       
        </>
    )
}

export default Home;