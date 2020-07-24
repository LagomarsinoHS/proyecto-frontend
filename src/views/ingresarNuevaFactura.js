import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const IngresarNuevaFactura = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.validaLogin(props)
        const idUsuario = !!store.usuarioActivo ? store.usuarioActivo.id : null;
        setUsuarioId(idUsuario)

    }, [])

    const setUsuarioId = (idUsuario) => {
        const detalleEntrada = state.detalleEntrada;

        detalleEntrada['usuario_id'] = idUsuario

        setState(prevState => {
            return { ...prevState, detalleEntrada }
        })
    }
    const [state, setState] = useState({
        factura: {
            folio: null,
            fecha_emision: "",
            fecha_recepcion: "",
            monto_neto: 0,
            monto_iva: 0,
            monto_otros_impuestos: 0,
            monto_total: 0,
            proveedor_id: 2,
            entradas_inventario: []
        },
        detalleEntrada: {
            cantidad: null,
            precio_costo_unitario: null,
            costo_total: null,
            usuario_id: null,
            producto_id: null
        }
    });



    const getDatosFactura = e => {
        const factura = state.factura;

        factura[e.target.name] = e.target.value

        setState(prevState => {
            return { ...prevState, factura }
        })
    }
    let multiplicacion = 0;
    const getDetalleEntrada = e => {
        const detalleEntrada = state.detalleEntrada;
        detalleEntrada[e.target.name] = e.target.value
        multiplicacion = state.detalleEntrada.cantidad * state.detalleEntrada.precio_costo_unitario;
        detalleEntrada.costo_total = multiplicacion

        setState(prevState => {
            return { ...prevState, detalleEntrada }
        })
    }



    const addDetalleEntrada = e => {
        if (state.detalleEntrada != null) {
            if (state.detalleEntrada.producto_id === null || state.detalleEntrada.cantidad === null || state.detalleEntrada.precio_costo_unitario === null) {
                Swal.fire({
                    icon: 'error',
                    title: "Faltan campos por completar.",
                })
            } else {
                const { factura, detalleEntrada } = state;
                factura['entradas_inventario'].push(detalleEntrada);
                const detalle = {
                    cantidad: null,
                    precio_costo_unitario: null,
                    costo_total: null,
                    usuario_id: detalleEntrada.usuario_id,
                    producto_id: null
                }
                setState(prevState => {
                    return { ...prevState, factura, detalleEntrada: detalle }
                })
            }

        }

    }

    const postData = e => {
        e.preventDefault();
        actions.postFetch("/empresas", state, setState, "Empresa")
        actions.getFetch("/empresas", "empresas");

    }

    /*  const eliminarRegistro = (indice) => {
         let { entradas_inventario } = state.factura;
         console.log("aaa", entradas_inventario)
         let nuevoArray = state.factura.entradas_inventario.filter((ele, index) => {
             return index != indice
         })
         console.log("nuevo array", nuevoArray)
         setState(prevState => {
             return { ...prevState, entradas_inventario: nuevoArray }
         })
 
     } */



    const deleteProducto = e => {
        let data = state.factura.entradas_inventario;
        data.splice(e.target.id, 1);
        setState(prevState => {
            return { ...prevState, entradas_inventario: data }
        });
    }

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Ingresar Nueva Factura</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={postData}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div className="row">
                                            <div className="col-md-4 mx-4">
                                                <hr className="text-success" style={{ "border": " 3px solid", "borderRadius": "5px" }} />
                                            </div>
                                            <div className="col-md-3">
                                                <h3 className="text-center">Factura</h3>
                                            </div>
                                            <div className="col-md-4">
                                                <hr className="text-success" style={{ "border": " 3px solid", "borderRadius": "5px" }} />
                                            </div>
                                        </div>

                                        <table className="table" >
                                            <thead className=" text-primary ">

                                                <th className="align-middle text-center">
                                                    Folio
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Fecha Emision
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Fecha Recepcion
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Proveedor
                                                    </th>

                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input type="text" className="form-control" placeholder="Folio" name="folio" aria-describedby="basic-addon1" value={state.factura.folio ? state.factura.folio : ""} onChange={getDatosFactura} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" className="form-control" placeholder="Fecha emision" name="fecha_emision" aria-describedby="basic-addon1" value={state.factura.fecha_emision ? state.factura.fecha_emision : ""} onChange={getDatosFactura} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" className="form-control" placeholder="Fecha recepcion" name="fecha_recepcion" aria-describedby="basic-addon1" value={state.factura.fecha_recepcion ? state.factura.fecha_recepcion : ""} onChange={getDatosFactura} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <select className="form-control" name="proveedor_id" value={!state.factura.proveedor_id ? "" : state.factura.proveedor_id} onChange={getDatosFactura}>
                                                                <option value="" disabled>Seleccionar</option>
                                                                {
                                                                    !!store.proveedores &&
                                                                    store.proveedores.map((proveedor) => {
                                                                        return <option value={proveedor.id} key={proveedor.id}>{proveedor.razon_social}</option>
                                                                    })
                                                                }
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>
                                        <table className="table" >
                                            <thead className=" text-primary ">

                                                <th className="align-middle text-center">
                                                    Monto Neto
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Monto IVA
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Monto Otros Impuestos
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Monto Total
                                                    </th>

                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input type="number" className="form-control" placeholder="Monto neto" name="monto_neto" aria-describedby="basic-addon1" value={state.factura.monto_neto ? state.factura.monto_neto : ""} onChange={getDatosFactura} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="number" className="form-control" placeholder="Monto IVA" name="monto_iva" aria-describedby="basic-addon1" value={state.factura.monto_iva ? state.factura.monto_iva : ""} onChange={getDatosFactura} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="number" className="form-control" placeholder="Monto otros impuestos" name="monto_otros_impuestos" aria-describedby="basic-addon1" value={state.factura.monto_otros_impuestos ? state.factura.monto_otros_impuestos : ""} onChange={getDatosFactura} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="number" className="form-control" placeholder="Monto Total" name="monto_total" aria-describedby="basic-addon1" value={state.factura.monto_total ? state.factura.monto_total : ""} onChange={getDatosFactura} />
                                                        </td>
                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>

                                        <div className="row">
                                            <div className="col-md-4 mx-4">
                                                <hr className="text-success" style={{ "border": " 3px solid", "borderRadius": "5px" }} /></div>
                                            <div className="col-md-3">
                                                <h3 className="text-center">Detalle</h3>
                                            </div>
                                            <div className="col-md-4">
                                                <hr className="text-success" style={{ "border": " 3px solid", "borderRadius": "5px" }} />
                                            </div>
                                        </div>

                                        <table className="table" >
                                            <thead className=" text-primary ">
                                                <th className="align-middle text-center">
                                                    Producto
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Cantidad
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Precio Costo Unitario
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Costo Total
                                                    </th>
                                                <th>&nbsp;</th>
                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr>
                                                        <td className="align-middle text-center">


                                                            <select className="form-control" name="producto_id" value={state.detalleEntrada.producto_id ? state.detalleEntrada.producto_id : ""} onChange={getDetalleEntrada} >
                                                                <option value="" disabled>Seleccionar</option>
                                                                {
                                                                    !!store.productos &&
                                                                    store.productos.map((producto) => {
                                                                        return <option value={producto.id} key={producto.id}>{producto.descripcion}</option>
                                                                    })
                                                                }
                                                            </select>

                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="number" className="form-control" placeholder="Cantidad" name="cantidad" aria-describedby="basic-addon1" value={state.detalleEntrada.cantidad ? state.detalleEntrada.cantidad : ""} onChange={getDetalleEntrada} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="number" className="form-control" placeholder="Precio Costo Unitario" name="precio_costo_unitario" aria-describedby="basic-addon1" value={state.detalleEntrada.precio_costo_unitario ? state.detalleEntrada.precio_costo_unitario : ""} onChange={getDetalleEntrada} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="number" className="form-control" placeholder="Costo Total" name="costo_total" aria-describedby="basic-addon1" value={state.detalleEntrada.costo_total ? state.detalleEntrada.costo_total : ""} onChange={getDetalleEntrada} />
                                                        </td>
                                                        <td><button type="button" onClick={addDetalleEntrada} className="btn btn-warning btn-sm"><i className="now-ui-icons ui-1_simple-add"></i></button></td>

                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>

                                        <div className="row">
                                            <div className="col-md-4 mx-4">
                                                <hr className="text-success" style={{ "border": " 3px solid", "borderRadius": "5px" }} /></div>
                                            <div className="col-md-3">
                                                <h3 className="text-center">Listado Producto</h3>
                                            </div>
                                            <div className="col-md-4">
                                                <hr className="text-success" style={{ "border": " 3px solid", "borderRadius": "5px" }} />
                                            </div>
                                        </div>


                                        <div className="table-responsive">
                                            <table className="table table-hover" >
                                                <thead className=" text-primary ">
                                                    <th className="align-middle text-center">
                                                        N°
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Producto
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Cantidad
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Precio Costo Unitario
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Costo Total
                                                    </th>

                                                    <th>&nbsp;</th>

                                                </thead>
                                                <tbody>
                                                    {
                                                        state.factura.entradas_inventario.map((producto, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="align-middle text-center">
                                                                        {index + 1}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {actions.validaProducto(producto.producto_id)}

                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.cantidad}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.precio_costo_unitario}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.costo_total}
                                                                    </td>
                                                                    <td>
                                                                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?" onClick={deleteProducto} id={index}>
                                                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end">
                                            <button className="btn btn-primary" name="Crear_Factura">Ingresar Factura</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(IngresarNuevaFactura);