/* eslint-disable jsx-a11y/anchor-is-valid */
export const Header = () => {
  return (
    <>
      <header className="header-global">
        <nav className="menu">
          <section className="invisible"></section>
          <button className="nav-btn">
            <img
              className="nav-icon"
              src={require("../images/Icons/menu-icon.png")}
              alt="Menu Icon"
            />
          </button>
          <a className="logo-link" href="/home.html">
            <img
              className="logo-icon"
              src={require("../images/Icons/Logo/logo-icon.png")}
              alt="Logo Icon"
            />
          </a>
          <ul className="menu-session">
            <li className="menu-session__icon">
              <a className="menu-profile">
                <img
                  className="profile-icon"
                  src={require("../images/Icons/profile-icon.png")}
                  alt="Profile Icon"
                />
              </a>
            </li>
            <li className="menu-session__icon">
              <a className="menu-shopping-bag">
                <img
                  className="shopping-bag-icon"
                  src={require("../images/Icons/shopping-bag-icon.png")}
                  alt="Shopping Icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <ul className="menu-segment">
        <li className="menu-segment__title">
          <a className="title-text">New Arrivals</a>
        </li>
        <li className="menu-segment__title">
          <a className="title-text">On Sale!</a>
        </li>
        <li className="menu-segment__title">
          <a className="title-text">Popular Items</a>
        </li>
      </ul>
    </>
  );
};
