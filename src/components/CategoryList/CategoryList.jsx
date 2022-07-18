import "./CategoryList.css";
import React, { useState, useEffect, useContext } from "react";
import { getAllCategories, getRandomMeal } from "../../api";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Context } from "../../Context";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  let { load, setLoad } = useContext(Context);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategory([...data.categories]);
      setLoad(false);
    });
  }, []);

  return (
    <div className="CategoryList-body">
      <div className="CategoryList">
        {category.map((el) => (
          <CategoryItem key={el.idCategory} el={el} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
