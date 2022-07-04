import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../Styles/SingleShoe.css";

const SingleShoe = () => {
  const shoes = useSelector((state) => state.shoes);
  const { id } = useParams();
  const singleShoe = shoes.filter((shoe) =>
    shoe.id === Number(id) ? true : false
  )[0];
  return (
    <div className="singleshoe">
      <h2>{singleShoe.name}</h2>
      <div>
        <img src={singleShoe.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{singleShoe.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
