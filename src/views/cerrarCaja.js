import React from "react";


const CerrarCaja = props => {
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Ventas</h1>
                <h3 className="text-info text-center">Cerrar Caja</h3>
            </div>

            <div className="content mt-2">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                                <label className="font-weight-bold"><u>Nombre</u></label>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-">
                                <label className="font-weight-bold"><u>Hora Inicio</u></label>
                            </div>
                            <div className="col-md-2">
                                <input type="time" className="form-control" />
                            </div>
                            <div className="col-md-1">
                                <label className="font-weight-bold"><u>Fecha</u></label>
                            </div>
                            <div className="col-md-2">
                                <input type="date" className="form-control" />
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center mt-4">
                            <div className="col-md-5 m-1 text-center border pb-3">
                                <h3>Cierre por Sistema</h3>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Ventas por transferencia</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="100000" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Ventas en efectivo</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="150000" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Ventas por tarjeta</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="50000" />
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Total ventas del turno</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="300000" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-5 m-1 text-center border pb-3">
                                <h3>Cierre por Usuario</h3>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Ventas por transferencia</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Ventas en efectivo</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Ventas por tarjeta</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Total ventas del turno</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <h2 className="text-center text-monospace">Cuadratura</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5 border border-warning offset-md-1 text-center">

                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-3 mx-3">Ventas por transferencia</label>
                                    </div>
                                    <div className="col-md-5 mt-2">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="0" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col ">
                                        <label className="font-weight-bold mt-2">Ventas en efectivo</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="0" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Ventas por tarjeta</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="0" />
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <div className="row">
                                    <div className="col">
                                        <label className="font-weight-bold mt-2">Total ventas del turno</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" value="-124" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col my-4">
                                        <h6 className="text-success">Ok</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <h6 className="text-success">Ok</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <h6 className="text-success">Ok</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-4">
                                        <h6 className="text-danger">Mal</h6>

                                    </div>
                                    <div className="col-md-1 float-right">
                                        <button type="button" className="btn btn-success">Cerrar Caja</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CerrarCaja;