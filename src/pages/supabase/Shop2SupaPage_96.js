import { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrapper/Crown_96';

const base_url = `https://hzllwkixijuoqbropnat.supabase.co/rest/v1/shop2_96?select=*`;

let url = `${base_url}`;

const options = {
  method: 'GET',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGx3a2l4aWp1b3Ficm9wbmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTg2ODYsImV4cCI6MTk5MjAzNDY4Nn0.gaSAx7BiiJEZsSKlCt2WjivgUhzFBD1CjJSDU08k2WY',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGx3a2l4aWp1b3Ficm9wbmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTg2ODYsImV4cCI6MTk5MjAzNDY4Nn0.gaSAx7BiiJEZsSKlCt2WjivgUhzFBD1CjJSDU08k2WY',
  },
};

const Shop2SupaPage_96 = () => {
  const [product, setProduct] = useState([]);

  const getCrownData_96 = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    setProduct(data);
    console.log('menu data', data);
  };

  useEffect(() => {
    getCrownData_96();
  }, []);

  return (
    <Wrapper>
      <div className='header'>
        <a href='/' className='logo-container'>
          <img src='assets/crown.svg' />
        </a>
        <div className='options'>
          <a href='./overview.html' className='option'>
            Shop
          </a>
          <a href='/shop' className='option'>
            Contact
          </a>
          <a href='/signin' className='option'>
            Sign In
          </a>
          <div className='cart-icon' onclick='cartToggle()'>
            <img
              className='shopping-icon'
              src='assets/shopping-bag.svg'
              alt=''
            />
          </div>
          <div className='cart-dropdown'>
            <div className='cart-items'>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Brown Cowboy</span>
                  <span className='price'>4 * $35</span>
                </div>
              </div>
              <div className='cart-item'>
                <img
                  src='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'
                  alt='item'
                />
                <div className='item-details'>
                  <span className='name'>Blue Jean Jacket</span>
                  <span className='price'>1 * $90</span>
                </div>
              </div>
            </div>
            <button className='custom-button'>GO TO CHECKOUT</button>
          </div>
        </div>
      </div>

      <div className='homepage'>
        <div className='title'>
          <h3>All Products -- Supabase Shop2 (210410196)</h3>
        </div>
        <div className='shop-page'>
          <div className='collection-overview'>
            <div className='collection-preview'>
              <div className='preview'>
                {product.map((item) => {
                  const { cat_id, id, local_url, name, price, remote_url } =
                    item;
                  return (
                    <div className='collection-item' key={id}>
                      <img className='image' src={local_url} />
                      <div className='collection-footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>{price}</span>
                      </div>
                      <button className='custom-button'>Add to Cart</button>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className='collection-preview'>
              <h2 className='title'>Hats</h2>
              <div className='preview'>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/ZYW3VTp/brown-brim.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Brown Brim</span>
                    <span className='price'>25</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/ypkgK0X/blue-beanie.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Blue Beanie</span>
                    <span className='price'>18</span>
                  </div>
                  <button className='custom-button'>Add to Card</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Brown Cowboy</span>
                    <span className='price'>35</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/RjBLWxB/grey-brim.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Grey Brim</span>
                    <span className='price'>25</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className='collection-preview'>
              <h1 className='title'>Jackets</h1>
              <div className='preview'>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/XzcwL5s/black-shearling.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Black Jean Shearling</span>
                    <span className='price'>125</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Blue Jean Jacket</span>
                    <span className='price'>90</span>
                  </div>
                  <button className='custom-button'>Add to Card</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/N71k1ML/grey-jean-jacket.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Grey Jean Jacket</span>
                    <span className='price'>90</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/s96FpdP/brown-shearling.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Brown Shearling</span>
                    <span className='price'>165</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className='collection-preview'>
              <h2 className='title'>Sneakers</h2>
              <div className='preview'>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/0s3pdnc/adidas-nmd.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Adidas NMD</span>
                    <span className='price'>220</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/dJbG1cT/yeezy.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Adidas Yeezy</span>
                    <span className='price'>280</span>
                  </div>
                  <button className='custom-button'>Add to Card</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/bPmVXyP/black-converse.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Black Converse</span>
                    <span className='price'>110</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/1RcFPk0/white-nike-high-tops.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Nike White AirForce</span>
                    <span className='price'>160</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className='collection-preview'>
              <h2 className='title'>Womens</h2>
              <div className='preview'>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/7CQVJNm/blue-tank.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Blue Tanktop</span>
                    <span className='price'>25</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/4W2DGKm/floral-blouse.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Floral Blouse</span>
                    <span className='price'>20</span>
                  </div>
                  <button className='custom-button'>Add to Card</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/KV18Ysr/floral-skirt.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Floral Dress</span>
                    <span className='price'>80</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Red Dots Dress</span>
                    <span className='price'>80</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className='collection-preview'>
              <h2 className='title'>Mens</h2>
              <div className='preview'>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/xJS0T3Y/camo-vest.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Camo Down Vest</span>
                    <span className='price'>325</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/qMQ75QZ/floral-shirt.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Floral T-shirt</span>
                    <span className='price'>20</span>
                  </div>
                  <button className='custom-button'>Add to Card</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/55z32tw/long-sleeve.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Black & White Longsleeve</span>
                    <span className='price'>25</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
                <div className='collection-item'>
                  <img
                    className='image'
                    src='https://i.ibb.co/RvwnBL8/pink-shirt.png'
                  />
                  <div className='collection-footer'>
                    <span className='name'>Pink T-shirt </span>
                    <span className='price'>25</span>
                  </div>
                  <button className='custom-button'>Add to Cart</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shop2SupaPage_96;
