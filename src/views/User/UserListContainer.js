import axios from 'axios';
import React,{Component} from 'react'
import UserList from './UserList';

class UserListContainer extends Component {

    state = {users:[]};

    componentWillMount(){
        axios.get("http://apilaravel.test/api/v1/users/get-all", {
            headers: {
              'Authorization': `Bearer ${localStorage["token"]}`
            },
          })
        .then(response => {
         const {data} = response.data
          this.setState({
            users: data,
        });          //  return response;
           
        }).catch(error => {
            console.error(error.message)
        });
    }

    render(){
        return (
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Simple Tables</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a>Home</a></li>
                        <li className="breadcrumb-item active">Simple Tables</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
             {this.state.users.length > 0?
                          <UserList users={this.state.users}></UserList>
                          :
                          null
             }
            </div>
        ); 
    }
}

export default UserListContainer;