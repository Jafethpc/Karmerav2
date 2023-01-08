import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Navigation } from "../../components/navigation";
import { Product } from "../../components/product/product";

import "./products.css";
import "../../css/general.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { DealBanner } from "../../components/deals-banner";

export const Products = () => {
  const [products, setProducts] = useState();
  const [productComponents, setProductComponenets] = useState();
  const [filteredSubject, setFilteredSubject] = useState("none");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000000);

  // Fetch API to get data from mysql
  useEffect(() => {
    const retrieveProducts = async () => {
      const retrieveProductsAPI = await axios
        .get("http://localhost:5000/products")
        .then((d) => d.data);
      console.log(retrieveProductsAPI);
      setProducts(retrieveProductsAPI);

      setProductComponenets(retrieveProductsAPI);
    };
    retrieveProducts();
  }, []);

  const productFilter = (subject, brand) => {
    const filterProducts = [];

    if (filteredSubject === brand) {
      setProductComponenets(products);
      setFilteredSubject(brand);
    } else if (filteredSubject !== brand) {
      products.forEach((e) => {
        if (e[subject] === brand) filterProducts.push(e);
        console.log(e);
      });
      setFilteredSubject(brand);
      setProductComponenets(filterProducts);
    } else {
      setFilteredSubject("none");
      setProductComponenets(products);
    }
  };

  const priceFilter = () => {
    const filterProducts = [];
    products.forEach((e) => {
      if (e.price >= minPrice && e.price <= maxPrice) filterProducts.push(e);
    });
    setProductComponenets(filterProducts);
  };

  return (
    <>
      <Navigation />
      <Header />
      <main className="main-content">
        <section className="filter-content">
          <section className="filter">
            <h1 className="filter-title">Brand</h1>
            <ul className="filter-options">
              <li
                className="option"
                onClick={() => productFilter("brand", "Sony")}
              >
                Sony
              </li>
              <li
                className="option"
                onClick={() => productFilter("brand", "Canon")}
              >
                Canon
              </li>
              <li
                className="option"
                onClick={() => productFilter("brand", "FUJIFILM")}
              >
                FUJIFILM
              </li>
              <li
                className="option"
                onClick={() => productFilter("brand", "HasselBlad")}
              >
                HasselBlad
              </li>
              <li
                className="option"
                onClick={() => productFilter("brand", "Kodak")}
              >
                Kodak
              </li>
              <li
                className="option"
                onClick={() => productFilter("brand", "Polaroid")}
              >
                Polaroid
              </li>
            </ul>

            <h1 className="filter-title">Sensor Size</h1>
            <ul className="filter-options">
              <li
                className="option"
                onClick={() => productFilter("sensor_size", "Full Frame")}
              >
                Full Frame (35mm)
              </li>
              <li
                className="option"
                onClick={() => productFilter("sensor_size", "Medium Format")}
              >
                Medium Format
              </li>
              <li
                className="option"
                onClick={() => productFilter("sensor_size", `1"`)}
              >
                1"
              </li>
              <li
                className="option"
                onClick={() => productFilter("sensor_size", `1/2.3"`)}
              >
                1/2.3"
              </li>
              <li
                className="option"
                onClick={() => productFilter("sensor_size", `1.5"`)}
              >
                1.5"
              </li>
              <li
                className="option"
                onClick={() => productFilter("sensor_size", `1.2"`)}
              >
                1.2"
              </li>
              <li
                className="option"
                onClick={() => productFilter("sensor_size", "APS-C")}
              >
                APS-C
              </li>
            </ul>

            <h1 className="filter-title">Image Resolution</h1>
            <ul className="filter-options">
              <li
                className="option"
                onClick={() => productFilter("megapixels", 102)}
              >
                102 Megapixels
              </li>
              <li
                className="option"
                onClick={() => productFilter("megapixels", 100)}
              >
                100 Megapixels
              </li>
              <li
                className="option"
                onClick={() => productFilter("megapixels", 64)}
              >
                64 Megapixels
              </li>
              <li
                className="option"
                onClick={() => productFilter("megapixels", 61)}
              >
                61 Megapixels
              </li>
              <li
                className="option"
                onClick={() => productFilter("megapixels", 60)}
              >
                60 Megapixels
              </li>
              <li
                className="option"
                onClick={() => productFilter("megapixels", 50)}
              >
                50 Megapixels
              </li>
            </ul>
            <section className="price-filter">
              <h1 className="filter-title">Price</h1>
              <p className="filter-description">Enter a price range:</p>
              <section className="price-textbox">
                <input
                  type="text"
                  className="min-price"
                  name="min-price"
                  placeholder="$"
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="max-price"
                  name="max-price"
                  placeholder="$"
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                  }}
                />
              </section>
              <button
                className="price-filter-btn"
                onClick={() => {
                  priceFilter();
                }}
              >
                Go
              </button>
            </section>
          </section>
          <section className="product-content">
            <DealBanner />
            <div>
              {productComponents &&
                productComponents.map((e) => <Product productData={e} />)}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};
