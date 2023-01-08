import "./home.css";
import "../../css/general.css";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Navigation } from "../../components/navigation";
import { DealBanner } from "../../components/deals-banner";

export const Home = () => {
  // // SLIDESHOW
  let slideIndex = 1;

  window.onload = function () {
    showSlides(slideIndex);
  };

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("product-image");
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  return (
    <>
      <Navigation />
      <main>
        <Header />

        <section className="main-content">
          <DealBanner />

          <section className="product-slideshow">
            <section className="product-slideshow__image">
              <a className="product-slideshow__link">
                <img
                  className="product-image"
                  src={require("./Images/Slideshow Images/greyscale-sony-camera.jpg")}
                />
              </a>
            </section>

            <section className="product-slideshow__image">
              <a className="product-slideshow__link">
                <img
                  className="product-image"
                  src={require("./Images/Slideshow Images/hasselblad-camera.jpg")}
                />
              </a>
            </section>

            <section className="product-slideshow__image">
              <a className="product-slideshow__link">
                <img
                  className="product-image"
                  src={require("./Images/Slideshow Images/fujfilm-camera.jpg")}
                />
              </a>
            </section>

            <a className="prev" onClick={() => plusSlides(-1)}>
              &#10094;
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </a>
          </section>

          <section className="newsletter-banner">
            <a className="newsletter-banner__link">
              <h1 className="newsletter-title">
                Sign up for our Newsletter for 10% off your first purchase
              </h1>
              <p className="newsletter-description">
                Opt in Camera News to have all your offers and rewards delivered
                right to your inbox!
              </p>
            </a>
          </section>

          <section className="featured-item">
            <a className="featured-item__main">
              <section className="featured-item__image">
                <img
                  className="item-image"
                  src={require("./Images/Featured Item/sony-alpha-7-IV-image.png")}
                />
              </section>

              <section className="featured-item__information">
                <h1 className="item-title">
                  Alpha 7 IV - Full-frame Interchangeable Lens Camera 33MP,
                  10FPS, 4k/60p
                </h1>

                <section className="featured-item__description">
                  <p className="delivery-date">Est. Delivery Oct 12-13</p>
                  <h1 className="price">$2,499.99</h1>
                  <button className="shop-now-btn">Show Now</button>
                </section>
              </section>
            </a>
          </section>

          <section className="accessories">
            <h1 className="accessories-title">Acessories</h1>

            <ul className="accessories-list">
              <li className="accessories-category">
                <img
                  className="category-image"
                  src={require("./Images/Accessories/microphone.png")}
                />
              </li>
              <li className="accessories-category">
                <img
                  className="category-image"
                  src={require("./Images/Accessories/battery.png")}
                />
              </li>
              <li className="accessories-category">
                <img
                  className="category-image"
                  src={require("./Images/Accessories/flashes.png")}
                />
              </li>
              <li className="accessories-category">
                <img
                  className="category-image"
                  src={require("./Images/Accessories/carrying-bags.png")}
                />
              </li>
              <li className="accessories-category">
                <img
                  className="category-image"
                  src={require("./Images/Accessories/lens.png")}
                />
              </li>
            </ul>
          </section>

          <section className="popular-item">
            <a className="popular-item__main">
              <section className="popular-item__image">
                <img
                  className="item-image"
                  src={require("./Images/Popular Item/sony-camera.png")}
                />
              </section>

              <section className="popular-item__information">
                <h1 className="item-title">
                  Alpha 1 - Full-frame Interchangeable Lens Camera 50.1MP,
                  30FPS, 4k/120p/8K/30p
                </h1>

                <section className="popular-item__description">
                  <p className="delivery-date">Est. Delivery Oct 12 - 13</p>
                  <h1 className="price">$6,499.99</h1>
                  <button className="shop-now-btn">Shop Now</button>
                </section>
              </section>
            </a>
          </section>
        </section>

        <section className="featured-lens">
          <h1 className="featured-lens__title">FEATURED LENS</h1>
          <p className="featured-lens__description">A WORLD OF SIGHT</p>

          <ul className="featured-lens-list">
            <li className="featured-lens__link">
              <a className="featured-lens__main">
                <section className="featured-lens__image">
                  <img
                    className="lens-image"
                    src={require("./Images/Featured Lens/70-200mm-lens.png")}
                  />
                </section>
                <section className="featured-lens__description">
                  <p className="lens-description">
                    FE 70-200 mm F2.8 GM OSS II Full-frame Telephoto Zoom G
                    Master Lens with Optical SteadyShot
                  </p>
                </section>
              </a>
            </li>
            <li className="featured-lens__link">
              <a className="featured-lens__main">
                <section className="featured-lens__image">
                  <img
                    className="lens-image"
                    src={require("./Images/Featured Lens/24-70mm-lens.png")}
                  />
                </section>
                <section className="featured-lens__description">
                  <p className="lens-description">
                    FE 24-70 mm F2.8 GM Full-frame Standard Zoom G Master Lens
                  </p>
                </section>
              </a>
            </li>
            <li className="featured-lens__link">
              <a className="featured-lens__main">
                <section className="featured-lens__image">
                  <img
                    className="lens-image"
                    src={require("./Images/Featured Lens/14mm-lens.png")}
                  />
                </section>
                <section className="featured-lens__description">
                  <p className="lens-description">
                    FE 14mm F1.8 GM Full-frame Ultra-wide Prime G Master Lens
                  </p>
                </section>
              </a>
            </li>
          </ul>
        </section>
        <Footer />
      </main>
    </>
  );
};
