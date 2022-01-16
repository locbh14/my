import React, {Component} from "react";


import './css/User.css';
import './css/base.css';
import './assets/fontawesome-free-5.15.4-web/js/all.js';


class Post extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
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
                                            <li class="category-item ">
                                                <a href="http://localhost:3000/user" class="category-item__link ">Users</a>
                                            </li>
                                            <li class="category-item category-item--active">
                                                <a href="http://localhost:3000/post" class="category-item__link">Posts</a>
                                            </li>
                                            
                                        </ul>
                                    </nav>
                                </div>

                                <div class="grid__column-10">
                                    <div class="home-filter">
                                        <div className="add-list home-filter__title">
                                            <i class="fas fa-plus home-filter__icon"></i>
                                            <span className="btn-text">Creat</span>
                                        </div>
                                        <div className="delete-list home-filter__title">
                                            <i class="far fa-trash-alt home-filter__icon"></i>
                                            <span className="btn-text">Delete</span>
                                        </div>
                                        <div className="add-list home-filter__title">
                                            <i class="far fa-edit home-filter__icon"></i>
                                            <span className="btn-text">Edit</span>
                                        </div>
                                    </div>
                                
                                    <div class="home-product">
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
                                                    Vote-up
                                                </div>
                                            </div>
                                            <div class="grid__row">
                                                <div class="grid__column-2-product">
                                                    <span className="number">1</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="name">abc</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="avatar">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="status">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="vote_up">#</span>
                                                </div>
                                            </div>
                                            <div class="grid__row">
                                                <div class="grid__column-2-product">
                                                    <span className="number">1</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="name">abc</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="avatar">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="status">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="vote_up">#</span>
                                                </div>
                                            </div>
                                            <div class="grid__row">
                                                <div class="grid__column-2-product">
                                                    <span className="number">1</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="name">abc</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="avatar">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="status">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="vote_up">#</span>
                                                </div>
                                            </div>
                                            <div class="grid__row">
                                                <div class="grid__column-2-product">
                                                    <span className="number">1</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="name">abc</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="avatar">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="status">#</span>
                                                </div>
                                                <div class="grid__column-2-product">
                                                    <span className="vote_up">#</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

export default Post