import React, { useState, useContext } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Context } from '../../store/appContext';



const IngresarMail = (props) => {

    const { store, actions } = useContext(Context)


    //Inicializa objeto para contener datos de login
    const [emailCapturado, setEmailCapurado] = useState({
        email: null
    })
    const [mensaje, setMensaje] = useState("Ingresa tu email para recuperar la contraseña")
    
    /* const [mensaje, setMensaje] = useState({
        msg: null,
    }) */

    const [flag, setFlag] = useState(false)


    //captura datos login desde input y los asigna a state
    const handleChange = e => {
        let capturedInfo = {
            [e.target.name]: e.target.value
        }
        setEmailCapurado(prevState => {

            return { ...prevState, ...capturedInfo };
        });
    }

    //previene submit del formulario al presionar enviar y llama a recuperarEmail para autentificar con el server
    const handleSubmit = e => {
        e.preventDefault()
        recuperarEmail()
        setTimeout(()=> setEmailCapurado({email:null}), 2500)
        setFlag(true)
    }

    //genera fetch tipo POST con datos de formulario
    const recuperarEmail = async () => {
        try {
            let bodyContent = JSON.stringify(emailCapturado);

            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: bodyContent,
            };

            const resp = await fetch('http://localhost:5000/api/recuperar-email', requestOptions)
            const result = await resp.json()
            setMensaje(result.msg)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="col-md-4 ml-auto mr-auto">
                        <div className="card card-login card-plain">
                            <form className="form" onSubmit={handleSubmit} autoComplete="off">
                                <div className="card-header text-center">
                                    <div className="logo-container">
                                        <img src="../assets/img/new-logo.png" alt="" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" name="email" placeholder="Email" value={!emailCapturado.email?"":emailCapturado.email}onChange={handleChange} />
                                    </div>
                                    <div>
                                        <h6>{mensaje}</h6>
                                        
                                       {/*  { flag ? mensaje.msg === null ?
                                            (<i className="now-ui-icons loader_refresh spin"></i>)
                                            :
                                            :
                                            ("")
                                        } */}

                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary btn-round btn-lg btn-block">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(IngresarMail);
