import { useState, useEffect } from "react";
import "../../App.css";

const MenuPage_96 = () => {
  const [product, setProduct] = useState([]);

  const getMenuData_96 = async () => {
    const response = await fetch(
      "https://hzllwkixijuoqbropnat.supabase.co/rest/v1/menu_96?select=*",
      {
        method: "GET",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGx3a2l4aWp1b3Ficm9wbmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTg2ODYsImV4cCI6MTk5MjAzNDY4Nn0.gaSAx7BiiJEZsSKlCt2WjivgUhzFBD1CjJSDU08k2WY",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGx3a2l4aWp1b3Ficm9wbmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTg2ODYsImV4cCI6MTk5MjAzNDY4Nn0.gaSAx7BiiJEZsSKlCt2WjivgUhzFBD1CjJSDU08k2WY",
        },
      }
    );
    const data = await response.json();
    setProduct(data);
    console.log("menu data", data);
  };

  useEffect(() => {
    getMenuData_96();
  }, []);

  return (
    <section className="menu">
      <div className="title">
        <h2>Menu From Supabase Menu Table</h2>
        <h3>Billy, 210410196</h3>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button type="button" className="filter-btn" data-id="all">
          all
        </button>
        <button type="button" className="filter-btn" data-id="breakfast">
          breakfast
        </button>
        <button type="button" className="filter-btn" data-id="lunch">
          lunch
        </button>
        <button type="button" className="filter-btn" data-id="dessert">
          dessert
        </button>
        <button type="button" className="filter-btn" data-id="shakes">
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

export default MenuPage_96;
