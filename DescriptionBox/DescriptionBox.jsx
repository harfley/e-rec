import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box"> Desciption </div>
                <div className="descriptionbox-nav-box fade"> Reviews (122) </div>
            </div>
            <div className="descriptionbox-description">
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, blanditiis quam facilis aliquid nemo corrupti qui fuga ducimus. Commodi illo ullam ab ipsum voluptas 
                    repellendus laboriosam architecto aliquid itaque? Fuga.</p>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum corporis sint facere officia iusto et ut tempora aliquid tenetur fuga voluptate laboriosam quae molestiae placeat error ad, repellat sequi debitis!
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;