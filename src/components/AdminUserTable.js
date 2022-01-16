import React from 'react'
import AdminUserTableItem from './AdminUserTableItem';
import './css/base.css';
import './css/User.css';

const AdminUserTable = ({users}) => {
    return (
        <div class="home-product">
            <span className="home-product__post"> Post</span>
            <div className="home-product__tilter">
                <div class="grid__row">
                    <div class="grid__column-2-product">
                        #
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
                {users.map((item, i) => <AdminUserTableItem id={item._id} name={item.username} avatar={""} status={""}  />)}
            </div>

        </div>

    );
}

export default AdminUserTable