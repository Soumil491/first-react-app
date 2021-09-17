import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component'
// import Table from 'react-bootstrap/Table';

const url = 'https://fakestoreapi.com/products';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            fakeStoreData: []
        };

        this.changeState();
    }

    changeState() {
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({ fakeStoreData: res }));
    }

    render() {
        return (
            <div className="directory">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Image</td>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Category</td>
                            <td>Rate</td>
                            <td>Count</td>
                            <td>Buy</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.fakeStoreData
                                .map(({ id, ...fakeStoreProps }) => {
                                    return <MenuItem key={id} id={id} {...fakeStoreProps} />
                                })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Directory;