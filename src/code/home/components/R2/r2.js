import React from "react"
import {table} from "./api"
import {useLocation} from "wouter"
import "./r2.css"

const WebR2 = () => {

    const [location, setLocation] = useLocation()

    if(!localStorage.getItem("token")){
        setLocation("/")
    }

    const handleHome = () => {
        setLocation("/home")
    }
    const handleLogout = () => {
        localStorage.removeItem("token")
        setLocation("/")
    } 
    return (
        <>
        <button onClick={handleLogout} className="button-logout">Logout</button>
        <h1 className="web-titulo">Web R2</h1>
        <table>
            <thead>
                <tr>
                    <th>Compañia</th>
                    <th>Contacto</th>
                    <th>País</th>
                    <th>Ciudad</th>
                    <th>Año Inicio</th>
                    <th>Cant.Empleados</th>
                </tr>
            </thead>
            <tbody> 
        {
            table.map( (table, i) => (
                <tr key={i}>
                    <td>{table.company}</td>
                    <td>{table.contact}</td>
                    <td>{table.country}</td>
                    <td>{table.city}</td>
                    <td>{table.year}</td>
                    <td>{table.employees}</td>
                </tr>
            ))
        }
            </tbody>
        </table>
        <button onClick={handleHome} className="button-home">Home</button>
        </>
    )
}

export default WebR2;