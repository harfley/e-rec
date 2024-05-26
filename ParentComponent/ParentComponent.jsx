import React from "react";
import Breadcrum from "../Breadcrums/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

const ParentComponent = () => {
    const product = {
        category: "Some Category",
        name: "Product Name",
        image: "path/to/image.png",
        old_price: 100,
        new_price: 80
    };

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <RelatedProducts />
        </div>
    );
};

export default ParentComponent;
