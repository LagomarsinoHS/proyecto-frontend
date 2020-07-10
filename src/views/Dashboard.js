import React from 'react'
import '../css/now-ui-dashboard.css'
import MenuLateral from '../components/menuLateral'
import NavBar from '../components/navBar'

const Dashboard = () => {
    return (
        <>
            <div className="wrapper ">
                <MenuLateral />
                <div className="main-panel" id="main-panel">
                    {/* <!-- Navbar --> */}
                    <NavBar/>
                  {/* <!-- End Navbar --> */}
                    <div className="panel-header panel-header-lg">
                        <canvas id="bigDashboardChart"></canvas>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card card-chart">
                                    <div className="card-header">
                                        <h5 className="card-category">Global Sales</h5>
                                        <h4 className="card-title">Shipped Products</h4>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                                <i className="now-ui-icons loader_gear"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <a className="dropdown-item text-danger" href="#">Remove Data</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas id="lineChartExample"></canvas>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card card-chart">
                                    <div className="card-header">
                                        <h5 className="card-category">2018 Sales</h5>
                                        <h4 className="card-title">All products</h4>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                                <i className="now-ui-icons loader_gear"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <a className="dropdown-item text-danger" href="#">Remove Data</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="card card-chart">
                                    <div className="card-header">
                                        <h5 className="card-category">Email Statistics</h5>
                                        <h4 className="card-title">24 Hours Performance</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas id="barChartSimpleGradientsNumbers"></canvas>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="now-ui-icons ui-2_time-alarm"></i> Last 7 days
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card  card-tasks">
                                    <div className="card-header ">
                                        <h5 className="card-category">Backend development</h5>
                                        <h4 className="card-title">Tasks</h4>
                                    </div>
                                    <div className="card-body ">
                                        <div className="table-full-width table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" defaultChecked={true} />
                                                                    <span className="form-check-sign"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td className="text-left">Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                    <span className="form-check-sign"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td className="text-left">Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="checkbox" defaultChecked={true} />
                                                                    <span className="form-check-sign"></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td className="text-left">Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                        </td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                            </button>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer ">
                                        <hr />
                                        <div className="stats">
                                            <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-category">All Persons List</h5>
                                        <h4 className="card-title"> Employees Stats</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Country</th>
                                                        <th>City</th>
                                                        <th className="text-right">Salary</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Dakota Rice</td>
                                                        <td>Niger</td>
                                                        <td>Oud-Turnhout</td>
                                                        <td className="text-right">$36,738</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Minerva Hooper</td>
                                                        <td>Curaçao</td>
                                                        <td>Sinaai-Waas</td>
                                                        <td className="text-right">$23,789</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sage Rodriguez</td>
                                                        <td>Netherlands</td>
                                                        <td>Baileux</td>
                                                        <td className="text-right">$56,142</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Doris Greene</td>
                                                        <td>Malawi</td>
                                                        <td>Feldkirchen in Kärnten</td>
                                                        <td className="text-right">$63,542</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mason Porter</td>
                                                        <td>Chile</td>
                                                        <td>Gloucester</td>
                                                        <td className="text-right">$78,615</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className=" container-fluid ">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="https://www.creative-tim.com">
                                            Creative Tim
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://presentation.creative-tim.com">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://blog.creative-tim.com">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="copyright" id="copyright">
                                &copy; {new Date().getFullYear()} Designed by <a href="https://www.invisionapp.com" target="_blank">Invision</a>. Coded by <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Dashboard
