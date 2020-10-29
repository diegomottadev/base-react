import { render } from '@testing-library/react';
import React, { Component } from 'react'


class Item extends Component {

    render() {
        console.log(this.props);

        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>
            </tr>
        )
    }
}

export default Item;

