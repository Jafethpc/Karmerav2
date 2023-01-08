import "./products.css";

export const Product = (props) => {
  const productData = props.productData;
  const keyFeatures = productData.description.split("|");
  return (
    <section className="product">
      <section className="product-image">
        <img
          className="thumbnail-image"
          src={require(`${productData.image}`)}
          alt="Thumbnail"
        />
      </section>
      <section className="product-information">
        <section>
          <h1 className="product-title">{productData.name}</h1>
          <p className="review-stars">
            {Number(productData.review) > 0 &&
            productData.availability !== "Coming soon"
              ? String.fromCharCode(9733).repeat(productData.review)
              : String.fromCharCode(9734).repeat(5)}
          </p>
        </section>
        <section className="product-information__description">
          <section className="product-description">
            <h1 className="description-title">Key Features</h1>
            <p className="description">
              - {keyFeatures[0]}
              <br />- {keyFeatures[1]}
              <br />- {keyFeatures[2]}
              <br />
              <span className="four-feature">- {keyFeatures[3]}</span>
            </p>
          </section>
          <section className="product-information__pricing">
            <p className="delivery-date">
              {productData.availability === "Coming soon"
                ? "Coming Soon!"
                : `Est. Delivery ${productData.availability}`}
            </p>
            <h1 className="price">
              {productData.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              .00
            </h1>
            <button className="add-to-cart-btn">
              {productData.availability === "Coming soon"
                ? "Pre-Order"
                : "Add to cart"}
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};
