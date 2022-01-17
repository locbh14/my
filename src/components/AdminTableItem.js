import { React, useState } from 'react'

import './css/base.css';
import './css/User.css';

const AdminTableItem = ({ id, title, date, likes, dislikes }) => {
    const [chosen, setChosen] = useState(false);
    return (

        <div class="grid__row">
            <div class="grid__column-2-product">
                <span className="number">{id}</span>
            </div>
            <div class="grid__column-2-product">
                <span className="name">{title}</span>
            </div>
            <div class="grid__column-2-product">
                <span className="avatar">{date}</span>
            </div>
            <div class="grid__column-2-product">
                <span className="status">{likes}</span>
            </div>
            <div class="grid__column-2-product">
                <span className="status">{dislikes}</span>
            </div>
            <div class="grid__column-2-product">
                <input type="checkbox" name="sport" value="Checkbox"></input>
            </div>
        </div>

    );
}

export default AdminTableItem
