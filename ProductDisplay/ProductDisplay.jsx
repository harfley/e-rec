import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product = {} } = props;
    const { image = "path/to/default-image.png", name = "Default Name", old_price = 0, new_price = 0 } = product;
    const {addToCart} = useContext (ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1> {name} </h1>
                <div className="productdisplay-right-stars">
                    <img src = {star_icon} alt="" />
                    <img src = {star_icon} alt="" />
                    <img src = {star_icon} alt="" />
                    <img src = {star_icon} alt="" />
                    <img src = {star_dull_icon} alt="" />
                    <p> (122) </p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${old_price}</div>
                    <div className="productdisplay-right-price-new">${new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate pariatur repellendus quasi animi, unde necessitatibus ab impedit, molestiae at magni doloremque quia architecto voluptatem vel sit voluptates. Nam, reprehenderit!
                </div>
                <div className="productdisplay-right-size">
                    <h1> Select Size </h1>
                    <div className="productdisplay-right-sizes">
                        <div> Small </div>
                        <div> Medium </div>
                        <div> Large </div>
                        <div> XL </div>
                        <div> XXL </div>
                    </div>
                </div>
                <button onClick={() => {addToCart (product.id)}}> ADD TO CART </button>
                <p className="productdisplay-right-category"><span> Category: </span> Women , Vas, Pot</p>
                <p className="productdisplay-right-category"><span> Tags: </span> Modern, Latest </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
