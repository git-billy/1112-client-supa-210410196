import { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import "../../App.css";

const base_url = `https://hzllwkixijuoqbropnat.supabase.co/rest/v1/menu_96?select=*`;

let url = `${base_url}`;

const options = {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGx3a2l4aWp1b3Ficm9wbmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTg2ODYsImV4cCI6MTk5MjAzNDY4Nn0.gaSAx7BiiJEZsSKlCt2WjivgUhzFBD1CjJSDU08k2WY",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGx3a2l4aWp1b3Ficm9wbmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTg2ODYsImV4cCI6MTk5MjAzNDY4Nn0.gaSAx7BiiJEZsSKlCt2WjivgUhzFBD1CjJSDU08k2WY",
  },
};

const MenuByCategoryPage_96 = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("all");
  console.log("useState - category:", category);

  const params = useParams();
  console.log("params category:", params.category);

  const navigate = useNavigate();

  const changeFilter = (categorys) => {
    console.log("categorys", categorys);
    setCategory(categorys);
  };

  const getMenuDataByCategory_96 = async () => {
    if (category === "all") {
      url = `${base_url}`;
    } else {
      url = `${base_url}&category=eq.${params.category}`;
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("menu data", data);
    setProduct(data);
  };

  useEffect(() => {
    getMenuDataByCategory_96();
  }, [category]);

  // const changeMenuFilter = (filter = "") => {
  //   navigate(`/supa_menu_96/${filter}`);
  //   getMenuDataByCategory_96();
  // };

  return (
    <section className="menu">
      <div className="title">
        <h2>Menu From Supabase Menu Table</h2>
        <h3>Billy, 210410196</h3>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="filter-btn"
          data-id="all"
          onClick={() => {
            changeFilter("all");
            return navigate(`/supa_menu_96/all`);
          }}
        >
          all
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="breakfast"
          onClick={() => {
            changeFilter("breakfast");
            return navigate(`/supa_menu_96/breakfast`);
          }}
        >
          breakfast
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="lunch"
          onClick={() => {
            changeFilter("lunch");
            return navigate(`/supa_menu_96/lunch`);
          }}
        >
          lunch
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="dessert"
          onClick={() => {
            changeFilter("dessert");
            return navigate(`/supa_menu_96/dessert`);
          }}
        >
          dessert
        </button>
        <button
          type="button"
          className="filter-btn"
          data-id="shakes"
          onClick={() => {
            changeFilter("shakes");
            return navigate(`/supa_menu_96/shakes`);
          }}
        >
          shakes
        </button>
      </div>
      <div className="section-center">
        {product.map((item) => {
          const { id, title, category, price, img, descrip } = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{descrip}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MenuByCategoryPage_96;
