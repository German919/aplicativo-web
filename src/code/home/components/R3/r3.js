import React, { useState } from "react"
import "./r3.css"
import {useLocation} from "wouter"
import { Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"

const WebR3 = () => {

    const [location, setLocation] = useLocation()
    const [openModal, setOpenModal] = useState(false)

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

    const isOpenModal = () => {
        setOpenModal(true)
    }
    const buttonModal = () =>{
        setOpenModal(false)
    }

    return (
        <>
         <div className="container-r3-button">
            <button onClick={handleHome} >Home</button>
            <button onClick={handleLogout} >Logout</button>
        </div>

        <div className="container-r3">
            <i onClick={isOpenModal} className="far fa-play-circle"></i>
            <img className="img-messi" src="https://www.altonivel.com.mx/wp-content/uploads/2020/08/lionel-messi-1.jpg" alt="foto" />
            <div className="container-r3-text">
                <h1 className="containerr-r3-titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus harum nemo.</h1>

                <p className="container-r3-parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum nemo, 
                    voluptat sit ratione officia doloremque eveniet veritatis
                    aut qui mollitia nisi provident cumque distinctio volupta volupta itaque, eligendi non.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus harum nemo, voluptatibus sit
                    ratione officia doloremque eveniet veritatis. 
                </p>
            </div>
        </div>

        <Modal className="modal" isOpen={openModal}>
            <ModalBody>
            <iframe className="modal-iframe" width="660" height="415" src="https://www.youtube.com/embed/9IMeT8fBxT0"
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
             </iframe>
            </ModalBody>
            <ModalFooter className="modal-footer">
                <button onClick={buttonModal} >Aceptar</button>
            </ModalFooter>
        </Modal>
        </>

    )
}

export default WebR3;