import React, { useEffect, useState } from "react"
import "./r4.css"
import {useLocation, usetLocation} from "wouter"
const WebR4 = () => {

    const [noticias, setNoticias] = useState([])

    const [location, setLocation] = useLocation()

    if(!localStorage.getItem("token")){
        setLocation("/")
    }
    useEffect(()=>{

        fetch("http://api.mediastack.com/v1/news?access_key=0d4fc8ab0885fc44f5aa29be1311bb59&sources=business")
        .then(res => res.json())
        .then(res => setNoticias(res.data))

    },[])
    
    const handleHome = () =>{
        setLocation("/home")
    }
    const handleLogout = () =>{
        localStorage.removeItem("token")
        setLocation("/")
    }
    return (
        <>
          <div className="container-r3-button">
            <button onClick={handleHome} >Home</button>
            <button onClick={handleLogout} >Logout</button>
        </div>

          <table className="container-table">
            <thead>
                <tr className="container-tr">
                    <th>Categoria</th>
                    <th>País</th>
                    <th>Descripción</th>
                    <th>Lenguaje</th>
                    <th>Publicación</th>
                    <th>Fuente</th>
                    <th>Título</th>
                </tr>
            </thead>
            <tbody> 
        {
            noticias.map( (noticia, i) => (
                <tr key={i}>
                    <td>{noticia.category}</td>
                    <td>{noticia.country}</td>
                    <td>{noticia.description}</td>
                    <td>{noticia.language}</td>
                    <td>{noticia.published_at}</td>
                    <td>{noticia.source}</td>
                    <td>{noticia.title}</td>
                </tr>
            ))
        }
            </tbody>
        </table>
        </>
    )
}

export default WebR4;