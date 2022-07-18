import React, { useContext, useState } from "react";
import "./CategoryItem.css";
import { NavLink as Link } from "react-router-dom";
import { getFilteredCategory } from "../../api";
import { Context } from "../../Context";
import Loading from "../../Loading/Loading";

const CategoryItem = ({ el }) => {
  let { filterCatalogy, setFilterCatalogy, load } = useContext(Context);

  const filterCat = async (catName) => {
    getFilteredCategory(catName).then((data) => {
      setFilterCatalogy(data.meals);
    });
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <Link
          className="mealName"
          to={`/category/:${el.strCategory}`}
          onClick={() => filterCat(el.strCategory)}
        >
          <div className="CategoryItem">
            <div className="item">
              <img src={el.strCategoryThumb} alt="" />
              {el.strCategory}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CategoryItem;
