import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Shoes.css";
import { Link } from "react-router-dom";

// Components
import Filter from "../Components/Filter";

// Actions
import {
  getShoesDataFailure,
  getShoesDataRequest,
  getShoesDataSuccess,
} from "../Redux/AppReducer/action";
// import { getShoes as shoeList } from "../Redux/AppReducer/action";

const Shoes = () => {
  const [checkSneakers, setCheckSneakers] = useState(false);
  const [checkLoafers, setCheckLoafers] = useState(false);
  const [checkCanvas, setCheckCanvas] = useState(false);
  const [checkBoots, setCheckBoots] = useState(false);
  // const [showShoes, setShowShoes] = useState([]);
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes);
  const getShoes = () => {
    dispatch(getShoesDataRequest());
    axios
      .get("/shoes")
      .then((r) => dispatch(getShoesDataSuccess(r.data)))
      .catch((e) => dispatch(getShoesDataFailure(e)));
  };
  // const getShoes = useSelector((state) => state.getShoes);
  // const { shoes, loading, error } = getShoes;

  // useEffect(() => {
  //   dispatch(shoeList());
  // }, [dispatch]);
  // console.log(shoes);
  let showShoes = [];
  if (checkBoots || checkCanvas || checkLoafers || checkSneakers) {
    if (checkBoots) {
      shoes
        .filter((item) => (item.category === "Boots" ? true : false))
        .map((item) => showShoes.push(item));
    }
    if (checkCanvas) {
      shoes
        .filter((item) => (item.category === "Canvas" ? true : false))
        .map((item) => showShoes.push(item));
    }
    if (checkLoafers) {
      shoes
        .filter((item) => (item.category === "Loafers" ? true : false))
        .map((item) => showShoes.push(item));
    }
    if (checkSneakers) {
      shoes
        .filter((item) => (item.category === "Sneakers" ? true : false))
        .map((item) => showShoes.push(item));
    }
    showShoes.sort((a, b) => a.id - b.id);
  } else {
    // setShowShoes(shoes);
    showShoes = shoes;
  }

  useEffect(() => {
    if (shoes.length === 0) {
      getShoes();
    }
  }, [showShoes]);
  console.log(showShoes);

  return (
    <div className="shoes">
      <Filter
        setCheckBoots={setCheckBoots}
        setCheckCanvas={setCheckCanvas}
        setCheckLoafers={setCheckLoafers}
        setCheckSneakers={setCheckSneakers}
      />
      <div className="shoes__all">
        {showShoes.map((shoe) => {
          return (
            <div key={shoe.id} className="shoes__info">
              <img className="shoes__image" src={shoe.image} alt="" />
              <div>
                <Link to={`shoes/${shoe.id}`}>
                  <p className="shoes__name">{shoe.name}</p>
                </Link>
                <p className="shoes__ctgry">
                  Category : <span>{shoe.category}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shoes;
