import { useState, useEffect } from 'react';
import Wrapper from '../../assets/wrapper/Crown_96';

const base_url = `https://hzllwkixijuoqbropnat.supabase.co/rest/v1/category2_96?select=*`;

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

const Crown2SupaPage_96 = () => {
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
          <h3>Crown2 -- Supabase Shop2 (210410196)</h3>
        </div>
        <div className='directory-menu'>
          {product.map((item) => {
            const { id, link_url, local_url, name, remote_url, size } = item;
            return (
              <div className='menu-item' key={id}>
                <img className='background-image' src={local_url} alt='' />
                <a href={link_url} className='content'>
                  <h1 className='title'>{name}</h1>
                  <span className='subtitle'>SHOP NOW</span>
                </a>
              </div>
            );
          })}

          {/* <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/px2tCc3/jackets.png'
              alt=''
            />
            <a href='./jackets.html' className='content'>
              <h1 className='title'>JACKETS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/0jqHpnp/sneakers.png'
              alt=''
            />
            <a href='./sneakers.html' className='content'>
              <h1 className='title'>SNEAKERS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/GCCdy8t/womens.png'
              alt=''
            />
            <a href='./womens.html' className='content'>
              <h1 className='title'>WOMENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='https://i.ibb.co/R70vBrQ/men.png'
              alt=''
            />
            <a href='./mens.html' className='content'>
              <h1 className='title'>MENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Crown2SupaPage_96;
