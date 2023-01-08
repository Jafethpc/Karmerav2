import { DealBanner } from "../../components/deals-banner";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Navigation } from "../../components/navigation";

import "./contact.css";

export const Contact = () => {
  return (
    <>
      <Navigation />
      <main>
        <Header />
        <section className="main-content">
          <DealBanner />
          <section className="title">
            <h1 className="form-title">Contact Us</h1>
          </section>
          <div className="divider"></div>
          <form className="form">
            <section className="form-input">
              <label for="fname">First Name:</label>
              <input type="text" className="fname" name="fname" />
            </section>

            <section className="form-input">
              <label for="lname">Last Name:</label>
              <input type="text" className="lname" name="lname" />
            </section>

            <section className="form-input">
              <label for="email">Email Address:</label>
              <input type="email" className="email" name="email" />
            </section>

            <section className="form-input">
              <label for="phone-num">Phone Number: </label>
              <input
                type="tel"
                className="phonenum"
                name="phonenum"
                placeholder="###-###-####"
              />
            </section>

            <section className="form-input">
              <label for="order-num">Order Number:</label>
              <input type="text" className="ordernum" name="ordernum" />
            </section>

            <section className="form-textbox">
              <label for="customertext"> </label>
              <textarea
                type="text"
                className="customertext"
                name="customertext"
                placeholder="Enter your thoughts here!"
              ></textarea>
            </section>
          </form>
          <section className="submit">
            <button className="submit-btn" s>
              Submit
            </button>
          </section>
          <p className="operation-hours">Operation Hours: 9AM - 6PM est</p>
        </section>
      </main>
      <Footer />
    </>
  );
};
