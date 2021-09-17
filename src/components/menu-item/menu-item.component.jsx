import React from 'react';
import './menu-item.component.css'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ id, title, description, price, category, image, rating, history, match }) => {
    return (
        <tr className="menu-item">
            <td>{id}</td>
            <td>
                <img src={image} width="100px" alt={description}/>
            </td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{rating.rate}</td>
            <td>{rating.count}</td>
            <td>
                <button onClick={() => {history.push(`${match.url} ${title}`)}}>Shop Now</button>
            </td>
            <td>{}</td>
        </tr>
    )
}

export default withRouter(MenuItem);