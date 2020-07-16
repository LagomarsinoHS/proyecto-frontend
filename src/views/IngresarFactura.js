import React from 'react';

const IngresarFactura = () => {
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Ingresar Factura</h3>
            </div>
            <div className="content mt-2">
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            {/* <div className="card-header">
                                        <h4 className="card-title"> </h4>
                                    </div> */}
                            <div className="card-body">
                                <div class="form-group">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className=" text-primary">
                                                <th className="align-middle text-center">
                                                    SKU
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Descripción
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Código de Barra
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Cantidad
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Unidad de Entrega
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Costo Unitario
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Costo Total
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Precio de Venta
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Margen de Contribución
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Categoría
                                                    </th>

                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="align-middle text-center">
                                                        651651
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        Super 8
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        6546556
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        Unidad
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" class="form-control" placeholder="Costo Unitario" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        $30.000
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        $400
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        33%
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        Confites
                                                            </td>

                                                </tr>
                                                <tr>
                                                    <td className="align-middle text-center">
                                                        454545
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        Coca Cola 500cc
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        23443
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        Unidad
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" class="form-control" placeholder="Costo Unitario" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        $360.000
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        $600
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        20%
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        Bebidas
                                                            </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-12 d-flex justify-content-end">
                                    <button type="button" class="btn btn-primary mr-3">Agregar línea de producto</button>
                                    <button type="submit" class="btn btn-success">Ingresar Factura</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default IngresarFactura;