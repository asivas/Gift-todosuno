"use client"
import React from 'react'
import Banner from "../../components/banner/banner"
import telefono from "../../imgs/telefono.jpg"
import email from "../../imgs/email.jpg"
import Link from 'next/link'
import "./contact.css"


const Contact = () => {
    return (
        <div className='contact'>
            {/* Aquí puedes agregar tu componente Banner */}
            <div className='back'><Link href={"/"}>Volver al inicio</Link></div>

            <div className='contactCard'>
                <div className='cc'>
                    <h2>CONTACTANOS</h2>
                    <p> Hola! Si estás interesado en nuestra comunidad y te gustaría aprender más, o sumarte al equipo,
                        no dudes en contactarte con nuestros representantes! Puedes encontrarlos en los siguientes
                        teléfonos y correos electrónicos.</p>
                       <ul>
                        <li>
                            <a href="mailto:soportetodosuno@gmail.com">
                                <img src="../../imgs/email.jpg" />
                                soportetodosuno@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+5491134228779">
                                <img src="../../imgs/telefono.jpg"  />
                                +5491134228779
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;