import React from 'react'
import AdminTableItem from './AdminTableItem';
import './css/base.css';
import './css/User.css';
const PostManager = ({ posts }) => {
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
                <span className="home-product__user-text"> Post</span>
            </div>
            <div className="home-product__tilter">
                <div className="home-product__tilter--header">
                    <div class="grid__row">
                        <div class="grid__column-2-product">
                            Id
                        </div>
                        <div class="grid__column-2-product">
                            Title
                        </div>
                        <div class="grid__column-2-product">
                            Date
                        </div>
                        <div class="grid__column-2-product">
                            Likes
                        </div>
                        <div class="grid__column-2-product">
                            Dislikes
                        </div>
                        <div class="grid__column-2-product">
                            Choose
                        </div>
                    </div>
                </div>
                
                {posts.map((item, i) => <AdminTableItem id={item._id} title={item.title} date={"sd"} dislikes={0} likes={0} />)}
            </div>

        </div>

    );
}

export default PostManager