import React, { Component } from 'react'
import axios from 'axios';

class UserActContainer extends Component {
    state = {roles:[]};

    componentWillMount(){
        axios.get("http://apilaravel.test/api/v1/roles/get-all", {
            headers: {
              'Authorization': `Bearer ${localStorage["token"]}`
            },
          })
        .then(response => {
            
         const {data} = response.data
         console.log(data);
          this.setState({
            roles: data,
        });          //  return response;
           
        }).catch(error => {
            console.error(error.message)
        });
    }
    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Nuevo usuario</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Nuevo usuario</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12">
                                {/* general form elements */}
                                <div className="card card-primary">
                                    {/*<div className="card-header">
                                        <h3 className="card-title"></h3>
                                    </div>
                                     /.card-header */}
                                    {/* form start */}
                                    <form role="form">
                                        <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <label htmlFor="name">Nombre </label>
                                                    <input type="text" className="form-control" id="name" placeholder="Nombre" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <label htmlFor="apellido">Apellido</label>
                                                    <input type="password" className="form-control" id="apellido" placeholder="Apellido" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email </label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <label htmlFor="contraseña">Contraseña</label>
                                                    <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                            <div className="form-group">
                                                    <label htmlFor="rol">Rol</label>
                                            <select className="form-control">
                                            <option value='' selected disabled>-- Seleccionar rol--</option>
                                                    {

                                                    this.state.roles.map((rol, i)=>{
                                                        return(
                                                        <option key={i} value={rol.id}>
                                                        {rol.name}
                                                        </option>
                                                        )
                                                    })
                                                    }

                                                </select>
                                                </div>
                                                </div>
                                            </div>

                                        </div>

                                        {/* /.card-body */}
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary"><i className="fas fa-save" /> Guardar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }

}
export default UserActContainer;