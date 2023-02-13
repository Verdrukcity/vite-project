import React from 'react'
import { express, Github, github2, imgProfile, linkedin, mongoDB, node, react, redux, gMail, twitter, lang } from '../shared/Files'
import './Home.css'
const Home = () => {

    return (
        <div className='container-fluid bgG'>
            <div>
                <div className='container-xxl mt-5 mb-5 d-flex flex-column justify-content-center page1'>
                    <div className='d-flex justify-content-evenly fullStack'>

                        <h2 className='titleh2'>
                            Full stack developer
                        </h2>
                        <div className='d-flex justify-content-evenly align-items-center '>
                        <img className='tecs img-fluid' src={redux}></img>
                        <img className='tecs img-fluid' src={react}></img>
                        <img className='tecs img-fluid' src={Github}></img>
                        <img className='tecs img-fluid' src={mongoDB}></img>
                        <img className='tecs img-fluid' src={node}></img>
                        <img className='tecs img-fluid' src={express}></img>
                        <button className='tecs img-fluid btnLang shadow'>
                            <img src={lang} onClick={()=>console.log("hola")}></img>
                        </button>
                        </div>
                        {/* <img className='tecs' src={SQL}></img> */}
                    </div>
                    <div className='container-lg d-flex justify-content-center'>   
                        <div>
                          <h1>
                            who i am?
                        </h1>
                        <p className='text'>
                            Hola! soy un apasionado por la tecnología recientemente finalicé mi carrera como Full stack developer adquiriendo conocimientos en:
                        </p>
                        
                        <h2>
                            what i do?
                        </h2>
                        <p className='text'>
                            React, Redux, HTML, JavaScript, Node.js, CSS, SQL, MongoDB, Mongoose, Bosstrap.
                        </p>  
                        </div>
                        <div className='imgContainer'>
                            <img className='imgProfile float-sm-end' src={imgProfile} alt="Imagen de perfil francisco Bolaños"></img>
                        </div>
                    </div>

                    <div className='container-lg d-flex flex-column'>
                        <h2>
                            Redes:
                        </h2>
                        <div className='container d-flex justify-content-evenly'>
                        <img className='tecs redes' src={linkedin}></img>
                        <img className='tecs redes' src={github2}></img>
                        <img className='tecs redes' src={gMail}></img>
                        <img className='tecs redes' src={twitter}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home