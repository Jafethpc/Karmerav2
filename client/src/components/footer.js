/* eslint-disable jsx-a11y/anchor-is-valid */

export const Footer = () => {
  return (
    <>
      <footer className="footer-global">
        <section className="categories">
          <section className="main-topic">
            <nav className="help-category">
              <h1 className="category-title">HELP</h1>
              <section className="category-list">
                <a className="link">Contact Us</a>
                <a className="link">My Account</a>
                <a className="link">Legal & Privacy</a>
              </section>
            </nav>

            <nav className="shop-category">
              <h1 className="category-title">SHOP</h1>
              <section className="category-list">
                <a className="link">Cameras</a>
                <a className="link">Lens</a>
                <a className="link">Batteries</a>
                <a className="link">Accessories</a>
                <a className="link">Carrying Bags</a>
                <a className="link">Tripods</a>
              </section>
            </nav>
          </section>

          <nav className="newsletter-category">
            <h1 className="category-title">Sign up to our Newsletter</h1>
            <p className="category-description">
              Join now and get 10% off your next purchase!
            </p>
            <a className="category-link">READ MORE </a>
          </nav>
        </section>

        <section className="footer-logo">
          <a>
            <img
              className="logo-icon"
              src={require("../images/Icons/Logo/logo-icon-text.png")}
              alt="Logo"
            />
          </a>
        </section>

        <section className="country-category">
          <p className="country">United States | $</p>
        </section>
      </footer>
    </>
  );
};
