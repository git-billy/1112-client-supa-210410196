import styled from 'styled-components';

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  // Header
  .header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }

    .options {
      display: flex;
      height: 100%;
      width: 50%;
      justify-content: flex-end;
      align-items: center;

      .option {
        padding: 10px 15px;
        cursor: pointer;
      }

      .cart-icon {
        width: 45px;
        height: 45px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .shopping-icon {
          width: 24px;
          height: 24px;
        }
      }

      .cart-dropdown {
        position: absolute;
        width: 240px;
        height: 340px;
        display: none;
        background-color: white;
        border: 1px solid black;
        top: 90px;
        right: 40px;
        padding: 20px;
        z-index: 5;

        &.show {
          display: block;
        }

        .cart-items {
          height: 240px;
          display: flex;
          flex-direction: column;
          overflow: scroll;
        }

        .cart-item {
          width: 100%;
          display: flex;
          height: 80px;
          margin-bottom: 10px;

          img {
            width: 30%;
          }

          .item-details {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 10px 20px;

            .name {
              font-size: 16px;
              margin-bottom: 10px;
            }

            .price {
              font-size: 18px;
            }
          }
        }

        .custom-button {
          width: 100%;
          height: 40px;
          background-color: #000;
          color: white;
          padding: 20px auto;
          margin: 20px auto;

          &:hover {
            background-color: lightgrey;
            color: black;
          }
        }
      }
    }
  }

  // Homepage
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;

    .directory-menu {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .menu-item {
        width: 30%;
        height: 240px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 7px;
        overflow: hidden;

        &:hover {
          cursor: pointer;

          & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
          }

          & .content {
            opacity: 0.9;
          }
        }

        &.large {
          height: 320px;
        }

        &:first-child {
          margin-right: 7.5px;
        }

        &.last-child {
          margin-left: 7.5px;
        }

        .background-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        & img {
          object-fit: cover;
          width: 100%;
          height: 240px;
        }

        .content {
          height: 90px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
          background-color: white;
          opacity: 0.5;
          position: absolute;

          .title {
            font-weight: bold;
            font-size: 20px;
            color: #4a4a4a;
          }

          .subtitle {
            font-weight: lighter;
            font-size: 14px;
          }
        }
      }
    }
  }

  // SHOP-PAGE (Hats, Jackets, Sneakers, Womens, Mens)
  .collection-page {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 38px;
      margin: 15px auto;
    }

    .items {
      // display: flex;
      // justify-content: flex-start;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }

  .collection-item {
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    position: relative;
    margin-bottom: 25px;

    .image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      margin-bottom: 5px;
    }

    .custom-button {
      width: 80%;
      position: absolute;
      top: 205px;
      display: none;
      opacity: 0.7;
      padding: 10px 10px;
      font-size: 20px;
      font-weight: bold;

      &:hover {
        background-color: #000;
        color: white;
      }
    }

    &:hover {
      .image {
        opacity: 0.8;
      }

      .custom-button {
        opacity: 0.85;
        display: block;
      }
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  // Overview & Preview
  .collection-overview {
    display: flex;
    flex-direction: column;
  }

  .collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      margin-bottom: 25px;
    }

    .preview {
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }
`;

export default Wrapper;
