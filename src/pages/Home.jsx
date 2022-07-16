import { useEffect, useState } from "react";
import { getAllCategories } from "../api";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      console.log(data.categories);
    });
  }, []);

  return <div>Home</div>;
};

export default Home;
