import React from "react"


const AbrirCaja = props => {
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Ventas</h1>
                <h3 className="text-info text-center">Abrir Caja</h3>
            </div>
            <div className="content mt-2">

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header col-md-12">
                                <div className="alert alert-info rounded">
                                    <h5 className="title p-1">Precaución!</h5>
                                    <p>Recuerde que al abrir caja logeado con su ID, se hace responsable por el monto inicial y los
                                            movimientos que tenga durante el periodo de trabajo.</p>
                                </div>


                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Nombre de usuario</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 offset-md-3">
                                            <div className="form-group">
                                                <label>Administrador</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Hora Inicio</label>
                                                <input type="time" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 offset-md-3">
                                            <div className="form-group">
                                                <label>Clave</label>
                                                <input type="password" className="form-control" placeholder="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Fecha</label>
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Monto inicial</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">$</span>
                                                    </div>
                                                    <input type="text" className="form-control" aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </form>
                            </div>
                            <div className="card-footer">
                                <button type="button" className="btn btn-success btn-block">Abrir Caja</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AbrirCaja;