"use client"
import React from 'react'
import Banner from "../../components/banner/banner"
import Link from 'next/link'
import "./contact.css"

const contact = () => {
  
  return (
    <div className='contact'>
    <Banner/>
    <div className='back'><Link href={"/"}>Volver al inicio</Link></div>
    
    <div className='contactCard'> 
    <div className='cc'>
    <h2>CONTACTANOS</h2>
    <p>Hola! Si estas interesado en nuestra comunidad y te gustaria aprender mas , o sumarte al equipo, no dudes en contactarte con nuestros representantes! Podes encontrarlos en los siguientes telefonos y mail.</p> 
    <li>soportetodosuno@gmail.com</li>
    <li>+54 9 11 3422 8779</li>
    </div>
    </div>
    </div>
  )
}

export default contact