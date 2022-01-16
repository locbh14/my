import React, { Component } from "react";


import './css/User.css';
import './css/base.css';
import './assets/fontawesome-free-5.15.4-web/js/all.js';
import AdminUserTable from "./AdminUserTable";

const users = [
    {
        _id:"1",
        username:"a",
    },
    {
        _id:"1",
        username:"a",
    },
    {
        _id:"1",
        username:"a",
    },
    {
        _id:"1",
        username:"a",
    },
    {
        _id:"1",
        username:"a",
    },
    {
        _id:"1",
        username:"a",
    }
]

const User = () => {
    return (
        <div id="wrapper">
            <div >
                <div class="navbar-header">
                    <div className="navbar-header-left">
                        <i class="fas fa-bars navbar-header-icon"></i>
                        <span class="header__navbar-title">Admin</span>
                    </div>
                    <div className="navbar-header-right">

                        <i class="far fa-user-circle navbar-header-icon"></i>
                        <span class="header__navbar-user-name">Bùi Hoàng Lọc</span>
                        <ul class="header__navbar-account-menu">
                            <li class="header__navbar-account-Logout">Logout</li>
                        </ul>

                    </div>
                </div>
                <div class="navbar__container">
                    <div class="grid">
                        <div class="grid__row">
                            <div class="grid__column-2">
                                <nav class="category">
                                    <h3 class="category__heading">
                                        <i class="category__heading-icon fas fa-list"></i>
                                        Menu
                                    </h3>

                                    <ul class="category-list">
                                        <li class="category-item category-item--active">
                                            <a href="http://localhost:3000/user" class="category-item__link ">Users</a>
                                        </li>
                                        <li class="category-item ">
                                            <a href="http://localhost:3000/post" class="category-item__link">Posts</a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>

                            <div class="grid__column-10">
                                    <AdminUserTable users={users}/>
                            </div>

                        </div>
                    </div>
                </div>






            </div>




        </div>
    )
}



export default User