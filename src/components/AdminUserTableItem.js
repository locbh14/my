import {React, useState} from 'react'
    import './css/base.css';
    import './css/User.css';
const AdminUserTableItem = ({ id, name, avatar, status }) => {
    const [chosen, setChosen] = useState(false);
    return (

        <div class="grid__row" >
            <div class="grid__column-2-product">
                <span className="id">{id}</span>
            </div>
            <div class="grid__column-2-product">
                <span className="name">{name}</span>
            </div>
            <div class="grid__column-2-product">
                <span className="avatar">{avatar}</span>
            </div>
            <div class="grid__column-2-product">
                <span className="status">{status}</span>
            </div>
            <div class="grid__column-2-product">
                <input type="checkbox" name="sport" value="Checkbox"></input>
            </div>
        </div>

    );
}


export default AdminUserTableItem