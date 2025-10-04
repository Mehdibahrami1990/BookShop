import React from "react";
interface ProductItemProps {
  id: string;
  image: string;
  title: string;
  describtion: string;
  price: number;
}
const ProductItem = ({
  image,
  title,
  price,
//   describtion,
}: ProductItemProps) => {
  return (
    <div>
      <div className="shadow-md">
        <img src={image} alt="catpic" />
        <div className="p-2">
          <h3 className="font-bold">{title}</h3>
          {/* <p>{describtion}</p> */}
          <p>
            price : <span>{price}$</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
