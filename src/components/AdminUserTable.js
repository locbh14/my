import React from 'react'
import AdminUserTableItem from './AdminUserTableItem';
import './css/base.css';
import './css/User.css';

const AdminUserTable = ({users}) => {
    return (
        <div class="home-product">
            <div class="grid__row home-product__edits">
                <div className="home-product__edit"> 
                    <i class="fas fa-plus"></i>
                    Add
                </div>
                <div className="home-product__edit"> 
                    <i class="far fa-trash-alt"></i>
                    Delete
                </div>
                <div className="home-product__edit"> 
                    <i class="far fa-edit"></i>
                    Edit
                </div>
            </div>
            <div class="grid__row home-product__option">
                <span className="home-product__user-text"> User</span>
            </div>
            <div className="home-product__tilter">
                <div className="home-product__tilter--header">
                    <div class="grid__row">
                        <div class="grid__column-2-product">
                            Id
                        </div>
                        <div class="grid__column-2-product">
                            Name
                        </div>
                        <div class="grid__column-2-product">
                            Avatar
                        </div>
                        <div class="grid__column-2-product">
                            Status
                        </div>
                        <div class="grid__column-2-product">
                            Choose
                        </div>
                    </div>

                </div>
                {users.map((item, i) => <AdminUserTableItem id={item._id} name={item.username} avatar={""} status={""}  />)}
            </div>

        </div>

    );
}

export default AdminUserTable