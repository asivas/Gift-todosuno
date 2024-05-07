import React from 'react';
import Link from 'next/link';
import "./contact.css";

const Contact = () => {
    return (
        <div className='contact'>

            <div className='back'><Link href={"/"}>Volver al inicio</Link></div>
            
            <div className='contactCard'>
                <div className='cc'>
                    <h2>CONTACTANOS</h2>
                    <p> Hola! Si estás interesado en nuestra comunidad y te gustaría aprender más, o sumarte al equipo,
                        no dudes en contactarte con nuestros representantes! Puedes encontrarlos en los siguientes
                        teléfonos y correos electrónicos.</p>
                    <ul>
                        <li>
                            <i className="fa-solid fa-envelope-open" style={{ color: "#003A6A" }} data-sider-select-id="240fc0a5-2e4b-4de2-89c1-fc2b288b1588"></i>
                            <a href="mailto:soportetodosuno@gmail.com">
                                soportetodosuno@gmail.com
                            </a>
                        </li>
                        <li>
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                            <a href="https://wa.me/5492494499831" rel="nofollow" target="_blank">
                                Pablo Iturralde
                            </a>
                        </li>
                        <li>
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                            <a href="https://wa.me/5491134228779" rel="nofollow" target="_blank">
                                Gonzalo Cirullo
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;
