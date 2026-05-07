function Header() {
  return (
    <div className="header-banner">

      <div className="logo-button">
        <a
          href="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/demo-logo.png"
          download=""
          style={{ color: "lightgray", textDecoration: "none" }}
        >
          <img
            style={{ verticalAlign: "top" }}
            src="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/demo-logo.png"
            alt="logo"
            height="60px"
          />
        </a>
      </div>

      <nav className="header-menu">
        <ul className="tab-container">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Downloads</a></li>

          <li className="search-wrapper">
            <form action="https://www.google.com/search" className="search">
              <input type="search" name="q" placeholder="Search Google" required />
              <button type="submit">
                <i className="search-icon-gray" />
              </button>
            </form>
          </li>
        </ul>
      </nav>

      <img
        style={{ marginTop: "-5px" }}
        src="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/banner-image.png"
        width="100%"
      />
    </div>
  )
}
export default Header