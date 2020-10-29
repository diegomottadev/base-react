import React, {Component}from 'react'
import Item from './Item';

class UserList extends Component {

    _renderListUser(){  
        const {users} = this.props;
        return users.map((user, i) => {
            return (
            <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
            );
        })
       
    }

    render(){

        return (
            <section className="content">
                <div className="container-fluid">

                {/* /.row */}
                <div className="row">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                        <h3 className="card-title">Responsive Hover Table</h3>
                        <div className="card-tools">
                            <div className="input-group input-group-sm" style={{width: 150}}>
                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>

                            </tr>
                            </thead>
                            <tbody>
                            { this._renderListUser()}
                            </tbody>
                        </table>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
        ); 
        
    }
}

export default UserList;